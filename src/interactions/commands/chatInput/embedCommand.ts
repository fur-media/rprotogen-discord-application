import { APIChatInputApplicationCommandInteraction, InteractionResponseType, Routes } from "discord-api-types/v10";
import { Context } from "hono";
import { discordApiFetch } from "../../../utils";
import { embeds } from "../../../embeds";

export const embedCommand = {
  name: 'embed',
  description: 'This is an example command.',
  options: {
  },
  execute: async (c: Context, interaction: APIChatInputApplicationCommandInteraction) => {
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