import { Context } from "hono";
import { discordApiFetch } from "../../../utils";
import { InteractionResponseType, Routes } from "discord-api-types/v10";
import { embeds } from "../../../embeds";
import { modals } from "../../../modals";

export const modContactOpenTicketButton = {
  custom_id: 'mcOpenTicket',
  execute: async (c: Context, interaction: any, props: string[]) => {
    await discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
      type: InteractionResponseType.Modal,
      ...modals.openTicketModal(),
    });
  }
};