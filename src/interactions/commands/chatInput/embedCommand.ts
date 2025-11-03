import { APIChatInputApplicationCommandInteraction, InteractionResponseType, Routes, PermissionFlagsBits } from "discord-api-types/v10";
import { Context } from "hono";
import { discordApiFetch } from "../../../utils";
import { embeds } from "../../../embeds";

export const embedCommand = {
  name: 'embed',
  description: 'This is an example command.',
  options: {
  },
  execute: async (c: Context, interaction: APIChatInputApplicationCommandInteraction) => {
    // Ensure this is used in a guild and the invoking member has Manage Messages (delete messages) permission
    const member = (interaction.member as any);
    const permissionsStr = member?.permissions;
    const required = BigInt(PermissionFlagsBits.ManageMessages);

    const hasManageMessages = permissionsStr
      ? (BigInt(permissionsStr) & required) !== BigInt(0)
      : false;

    if (!hasManageMessages) {
      await discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: { content: 'You need the Manage Messages (Delete Messages) permission to use this command.', flags: 64 }
      });
      return;
    }

    await discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
      type: InteractionResponseType.DeferredChannelMessageWithSource,
      data: { flags: 64 }
    });

    await discordApiFetch(c, Routes.channelMessages(interaction.channel.id), 'POST', {
      ...embeds.modAreaEmbed(),
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    await discordApiFetch(c, Routes.webhookMessage(interaction.application_id, interaction.token), 'PATCH', {
      type: InteractionResponseType.DeferredMessageUpdate,
      content: 'This is an updated message after the embed was sent.',
    });
  },
};