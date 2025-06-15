// https://discord.builders
export const modContactEmbed = (): object => {
    return {
        flags: 32768,
        components: [
            {
                "type": 17,
                "accent_color": null,
                "spoiler": false,
                "components": [
                    {
                        "type": 9,
                        "accessory": {
                            "type": 11,
                            "media": {
                                "url": "https://media.discordapp.net/attachments/1072902797999210506/1380983008919556227/thumbnail.png?ex=6845dc26&is=68448aa6&hm=80e4800436d50cf0e0ed292949dac9caa1864df07b478eab13af5d29c10f021f&="
                            },
                            "description": null,
                            "spoiler": false
                        },
                        "components": [
                            {
                                "type": 10,
                                "content": "## Mod Contact <:BE:1380898199858053243><:TA:1380898240056131596>\nWelcome to the r/protogen moderator contact form.\nClick 'Start Wizard' to contact mods or report a user."
                            }
                        ]
                    },
                    {
                        "type": 14,
                        "divider": true,
                        "spacing": 2
                    },
                    {
                        "type": 1,
                        "components": [
                            {
                                "type": 2,
                                "style": 1,
                                "label": "Start Wizard",
                                "emoji": null,
                                "disabled": false,
                                "custom_id": `mcStartWizard`
                            },
                            {
                                "type": 2,
                                "style": 5,
                                "label": "FAQ",
                                "emoji": null,
                                "disabled": false,
                                "url": "https://discord.com/channels/725241819960705154/1216830966153351198"
                            }
                        ]
                    }
                ]
            }
        ]
    };
}