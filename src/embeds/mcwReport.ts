// https://discord.builders
export const mcwReportEmbed = (): object => {
    return {
        flags: 32768,
        components: [
            {
                "type": 17,
                "accent_color": null,
                "spoiler": false,
                "components": [
                    {
                        "type": 10,
                        "content": "# Report a User/Message\nYou can directly report a user/message by selecting the `Report User` or `Report Message` button, under apps.\nwhich can be accessed via the right click menu\n-# (or by pressing and holding on a message on mobile)"
                    },
                    {
                        "type": 12,
                        "items": [
                            {
                                "media": {
                                    "url": "https://media.discordapp.net/attachments/1072902797999210506/1383780541010018314/image.png?ex=6850098e&is=684eb80e&hm=b540803a46764692b672f315adc510a3592e2d520ef669a2171bc907c2245ce2&="
                                },
                                "description": null,
                                "spoiler": false
                            }
                        ]
                    },
                    {
                        "type": 14,
                        "divider": true,
                        "spacing": 1
                    },
                    {
                        type: 10,
                        content: `# Still needs to be implemented`
                    }
                ]
            }
        ]
    };
}