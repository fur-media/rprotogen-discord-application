import { Context } from "hono";
import { discordApiFetch } from "../../../utils";
import { APIMessageComponentButtonInteraction, InteractionResponseType, Routes } from "discord-api-types/v10";
import { embeds } from "../../../embeds";

export const closeTicketButton = {
    custom_id: 'closeTicket',
    execute: async (c: Context, interaction: APIMessageComponentButtonInteraction, props: string[]) => {
        await discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
            type: InteractionResponseType.DeferredChannelMessageWithSource,
            data: { flags: 64 }
        });
        const ticketChannelId = props[1];
        const threadId = props[2];

        await discordApiFetch(c, Routes.channel(ticketChannelId), 'DELETE');

        const embed = await discordApiFetch(c, Routes.channelMessage(interaction.channel.id, interaction.message.id), 'GET') as any;

        const userId = (embed.components[0].components[0].components[0].content as string).replace('## New ModMail Ticket\nA new ticket has been created by <@', '').replace('>.', '');
        const topic = (embed.components[0].components[1].content as string).replace('## Topic:\n', '');
        const details = (embed.components[0].components[2].content as string).replace('## Details:\n', '');
        const usernames = (embed.components[0].components[3].content as string).replace('### Usernames:\n', '');


        await discordApiFetch(c, Routes.channelMessage(interaction.channel.id, interaction.message.id), 'PATCH', {
            ...embeds.ticketLogEmbed({ isClosed: true, closedBy: interaction.member?.user.id, topic, details, usernames, userId }),
        })

        await discordApiFetch(c, Routes.webhookMessage(interaction.application_id, interaction.token), 'PATCH', {
            type: InteractionResponseType.DeferredMessageUpdate,
            content: 'Ticket closed.',
        });
    }
};