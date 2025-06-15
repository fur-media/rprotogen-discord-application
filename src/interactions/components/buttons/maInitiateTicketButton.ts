import { Context } from "hono";
import { discordApiFetch } from "../../../utils";
import { APIMessageComponentButtonInteraction, InteractionResponseType, Routes } from "discord-api-types/v10";
import { embeds } from "../../../embeds";

export const maInitiateTicketButton = {
    custom_id: 'maInitiateTicket',
    execute: async (c: Context, interaction: APIMessageComponentButtonInteraction, props: string[]) => {
        await discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
            type: InteractionResponseType.DeferredChannelMessageWithSource,
            data: { flags: 64 }
        });

        await discordApiFetch(c, Routes.webhookMessage(interaction.application_id, interaction.token), 'PATCH', {
            type: InteractionResponseType.DeferredMessageUpdate,
            ...embeds.modAreaUserSelectorEmbed()
        });
    }
};