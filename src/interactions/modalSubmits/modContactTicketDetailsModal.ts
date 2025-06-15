import { APIAllowedMentions, APIModalSubmitInteraction, APIUser, ChannelType, InteractionResponseType, PermissionFlagsBits, Routes } from "discord-api-types/v10";
import { Context } from "hono";
import { discordApiFetch } from "../../utils";
import { embeds } from "../../embeds";

export const modContactTicketDetailsModal = {
  custom_id: 'modContactTicketDetails',
  execute: async (c: Context, interaction: APIModalSubmitInteraction, props: string[]) => {
    await discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
      type: InteractionResponseType.DeferredChannelMessageWithSource,
      data: { flags: 64 }
    });
    const userId = props[1];
    let userData = userId ? await discordApiFetch(c, Routes.user(userId), 'GET') as APIUser : null;

    const topic = interaction.data.components[0].components[0].value;
    const details = interaction.data.components[1].components[0].value;
    const usernames = userId ? undefined : interaction.data.components[2].components[0].value;

    const ticketChannel = await discordApiFetch(c, Routes.guildChannels(interaction.guild?.id || ''), 'POST', {
      name: `${userId ? userData?.username : interaction.member?.user.username}}`,
      type: ChannelType.GuildText,
      topic: `Ticket for: ${topic}`,
      rate_limit_per_user: 5,
      permission_overwrites: [
        {
          id: interaction.guild_id,
          type: 0,
          allow: '0',
          deny: PermissionFlagsBits.ViewChannel.toString(), // Read Messages
        },
        {
          id: c.env.GUILD_MOD_ROLE_ID,
          type: 0,
          allow: (PermissionFlagsBits.ViewChannel | PermissionFlagsBits.SendMessages).toString(),
          deny: '0',
        },
        {
          id: userId ? userId : interaction.member?.user.id || '',
          type: 1,
          allow: (PermissionFlagsBits.ViewChannel | PermissionFlagsBits.SendMessages).toString(),
          deny: '0',
        }
      ],
      parent_id: c.env.GUILD_MOD_MAIL_CATEGORY_ID,
    }) as any;

    await discordApiFetch(c, Routes.webhookMessage(interaction.application_id, interaction.token), 'PATCH', {
      type: InteractionResponseType.DeferredMessageUpdate,
      content: `Ticket created: <#${ticketChannel.id}>`,
    });

    await discordApiFetch(c, Routes.channelMessages(ticketChannel.id), 'POST', {
      content: `Ticket created ${userId ? `on behalf of <@${userId}> by <@${interaction.member?.user.id}>` : `by <@${interaction.member?.user.id}>`} for \n>>> **topic**\n${topic}\n\n**Details:**\n${details}\n\n**Usernames:**\n ${usernames}`,
      allowed_mentions: {
        parse: [],
        users: [userId ? userId : null, interaction.member?.user.id],
      } as APIAllowedMentions
    }) as any;

    const ticketThread = await discordApiFetch(c, Routes.threads(ticketChannel.id), 'POST', {
      name: `Discussion`,
      auto_archive_duration: 4320,
      type: ChannelType.PrivateThread
    }) as any;

    await discordApiFetch(c, Routes.channelMessages(ticketThread.id), 'POST', {
      content: `<@&${c.env.GUILD_MOD_ROLE_ID}>`,
      allowed_mentions: {
        parse: [],
        roles: [c.env.GUILD_MOD_ROLE_ID],
      } as APIAllowedMentions
    }) as any;

    await discordApiFetch(c, Routes.channelMessages(c.env.GUILD_MOD_MAIL_LOGS_CHANNEL_ID), 'POST', {
      ...embeds.ticketLogEmbed({ ticketChannelId: ticketChannel.id, threadId: ticketThread.id, userId: userId ? userId : interaction.member?.user.id || '', topic, details, usernames, isClosed: false, closedBy: undefined, createdBy: userId ? interaction.member?.user.id : undefined }),
    })
  }
};