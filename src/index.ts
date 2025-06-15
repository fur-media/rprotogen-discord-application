import { env } from 'cloudflare:workers'
// import { Hono } from 'hono'
import { Hono } from 'hono/quick';
import * as util from './utils'
import { interactions } from './interactions'
import { APIInteraction, InteractionResponseType, InteractionType, Routes } from 'discord-api-types/v10';

const app = new Hono<{ Bindings: typeof env }>()

// import { logger } from 'hono/logger';
// app.use(logger())

app.get('/*', (c) => {
  return c.text('Hello Hono!')
})

app.post('/interactions', util.verifySignature, async (c) => {
  const interaction: APIInteraction = await c.req.json()
  if (interaction.type === 1) {
    return c.json({ type: 1 })
  }
  c.executionCtx.waitUntil((async () => {
    switch (interaction.type) {
      case InteractionType.ApplicationCommand:
        const command = interactions.commands.find(cmd => cmd.name === interaction.data.name)
        if (command) {
          await command.execute(c, interaction as any);
        } else {
          await util.discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
            type: InteractionResponseType.ChannelMessageWithSource,
            data: { content: 'Unknown command', flags: 64 }
          })
        }
        break
      case InteractionType.MessageComponent:
        const messageComponentProps = interaction.data.custom_id.split('_')

        const component = interactions.components.find(comp => comp.custom_id.startsWith(messageComponentProps[0]))
        if (component) {
          await component.execute(c, interaction as any, messageComponentProps);
        }
        break
      case InteractionType.ModalSubmit:
        const modalSubmitProps = interaction.data.custom_id.split('_')
        const modal = interactions.modalSubmits.find(mod => mod.custom_id.startsWith(modalSubmitProps[0]))
        if (modal) {
          await modal.execute(c, interaction as any, modalSubmitProps);
        }
        break
      default:
        return await util.discordApiFetch(c, Routes.interactionCallback(interaction.id, interaction.token), 'POST', {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: { content: 'Unknown interaction type' }
        })
    }
  })())
  return c.json(null, 202)
})

export default app