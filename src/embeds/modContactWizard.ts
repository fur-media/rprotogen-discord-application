// https://discord.builders
export const modContactWizardEmbed = (channelId: string): object => {
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
                                "url": "https://media.discordapp.net/attachments/1072902797999210506/1380983008919556227/thumbnail.png?ex=684e6de6&is=684d1c66&hm=26cb5e954ecd1e64dcc739987c606732f7cf1b7517119a6a37e723b85482a171&="
                            },
                            "description": null,
                            "spoiler": false
                        },
                        "components": [
                            {
                                "type": 10,
                                // 10% chance to show a wizzard emoji
                                "content": `## Contact Wizard${Math.random() < 0.1 ? " 🧙" : ""}\nHow would you like to proceed?`
                            }
                        ]
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
                                "label": "Open a Ticket",
                                "emoji": null,
                                "disabled": false,
                                "custom_id": `mcOpenTicket_${channelId}`
                            },
                            {
                                "type": 2,
                                "style": 4,
                                "label": "Report a User",
                                "emoji": null,
                                "disabled": false,
                                "custom_id": `mcwReport`
                            },
                            {
                                "type": 2,
                                "style": 4,
                                "label": "Report a Message",
                                "emoji": null,
                                "disabled": false,
                                "custom_id": `mcwReport_`
                            }
                        ]
                    }
                ]
            }
        ]
    };
}