import { Context } from "hono";
import { discordApiFetch } from "../../../utils";
import { APIMessageComponentSelectMenuInteraction, InteractionResponseType, Routes } from "discord-api-types/v10";
import { embeds } from "../../../embeds";
import { modals } from "../../../modals";

export const maInitiateTicketTargetUserSelectMenu = {
    custom_id: 'maInitiateTicketTargetUser',
    execute: async (c: Context, interaction: APIMessageComponentSelectMenuInteraction, props: string[]) => {
        await discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
            type: InteractionResponseType.Modal,
            ...modals.openTicketModal(interaction.data.values[0]),
        });
    }
};