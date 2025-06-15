// This is a COMPONENTS V2 conversion of the provided embed, using markdown and Discord's new layout system.
// filepath: e:\rprotogen-discord-bot\src\embeds\modAreaPanel.ts
export const modAreaUserSelectorEmbed = (): object => {
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
                                "url": "https://media.discordapp.net/attachments/1072902797999210506/1380983008919556227/thumbnail.png?ex=684fbf66&is=684e6de6&hm=186728ef4fdc6042b6a11a983448ae3f33083e11a4b7878c7a64aceeb3fc6166&="
                            },
                            "description": null,
                            "spoiler": false
                        },
                        "components": [
                            {
                                "type": 10,
                                "content": "## Internal Mod Contact <:BE:1380898199858053243><:TA:1380898240056131596>\n\nSometimes we may need to create a ticket on behalf of a user,\nthat's what this is for."
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
                                "type": 5,
                                "custom_id": "maInitiateTicketTargetUser",
                                "placeholder": "Select a user to create a ticket for",
                                "min_values": 1,
                                "max_values": 1,
                                "disabled": false
                            }
                        ]
                    }
                ]
            }
        ]
    };
}