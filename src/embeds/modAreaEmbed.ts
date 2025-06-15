// This is a COMPONENTS V2 conversion of the provided embed, using markdown and Discord's new layout system.
// filepath: e:\rprotogen-discord-bot\src\embeds\modAreaPanel.ts
export const modAreaEmbed = (): object => {
    return {
        flags: 32768,
        components: [
            {
                "type": 17,
                "accent_color": null,
                "spoiler": false,
                "components": [
                    {
                        "type": 12,
                        "items": [
                            {
                                "media": {
                                    "url": "https://media.discordapp.net/attachments/1072902797999210506/1073448128931438622/Mod_Area.png?ex=684f91f9&is=684e4079&hm=164da9900f550b90749921229955657ba801945447252a499c031ddf1e9b50a5&="
                                },
                                "description": null,
                                "spoiler": false
                            }
                        ]
                    },
                    {
                        "type": 10,
                        "content": "# :hammer: Mod Notion Links\n-# Resources\n:robot: [Our bots, and what they do](https://furmedia.notion.site/Our-Bots-and-what-they-do-d88a5fb4e3c0438997f7985d0dfe1f2f 'List of our bots and their most used commands.')    :ocean: [Moderation Flow](https://furmedia.notion.site/Moderation-Flow-fc2400888eb44e3297f4617db2f571a5 'Our moderation flow on Notion.')\n:warning: [Handling difficult situations](https://furmedia.notion.site/Handling-difficult-situations-9139341123e74f8c813b9d455983865b 'Guide to handling difficult situations.')   :closed_book: [General Resources](https://furmedia.notion.site/Resources-8a2b417195d348618cc3f1c1b66cf1b4 'Moderation related resources')\n\n# :shield: Our Channels\n-# General               Discord\n:people_hugging: [Mod Chat](https://discord.com/channels/725241819960705154/1073451505530716250 'General Chat for the mods <3>')            :shield: [Discord Moderation](https://discord.com/channels/725241819960705154/1073451689807458304 'Channel for discussion and running commands')\n-# Reddit\n:shield: [Reddit Moderation](https://discord.com/channels/725241819960705154/1073451763824345128 'Channel for discussion of subreddit stuff')\n\n-# Moderation Queues\n:exclamation: [Report Queue](https://discord.com/channels/725241819960705154/1074404711433777183)           :love_letter: [ModMail Logs](https://discord.com/channels/725241819960705154/880029803846197308)\n:person_raising_hand: [Marketplace Approval Queue](https://discord.com/channels/725241819960705154/1072956952021311610)"
                    },
                    {
                        "type": 14,
                        "divider": true,
                        "spacing": 1
                    },
                    {
                        "type": 1,
                        "components": [
                            {
                                "type": 2,
                                "style": 1,
                                "label": "Initiate Ticket with a User",
                                "emoji": null,
                                "disabled": false,
                                "custom_id": "maInitiateTicket"
                            }
                        ]
                    }
                ]
            }
        ]
    };
}