
// uses the new undocumented Discord API to get all members with a specific role in a guild

// const modIds = await discordApiFetch(c, `${Routes.guildMembers(interaction.guild?.id || '')}-search`, 'POST', {
//       "and_query": {
//         "role_ids": {
//           "and_query": [
//             c.env.GUILD_MOD_ROLE_ID
//           ]
//         }
//       },
//       "limit": 100
//     }) as {
//       guild_id: string;
//       members: ({
//         member: APIGuildMember[];
//         source_invite_code: string;
//         join_source_type: number;
//         inviter_id: null;
//       })[];
//       page_result_count: number;
//       total_result_count: number;
//     }