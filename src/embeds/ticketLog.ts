import { APIEmbed, APIActionRowComponent, APIButtonComponent } from "discord-api-types/v10";

// https://discord.builders
interface TicketLogEmbedOptions {
    isClosed?: boolean;
    closedBy?: string;
    ticketChannelId?: string;
    threadId?: string;
    userId?: string;
    topic?: string;
    details?: string;
    usernames?: string;
    createdBy?: string;
}

export const ticketLogEmbed = ({
    isClosed,
    closedBy,
    ticketChannelId,
    threadId,
    userId,
    topic,
    details,
    usernames,
    createdBy
}: TicketLogEmbedOptions) => ({
    flags: 32768,
    components: [
        {
            type: 17,
            accent_color: isClosed ? 0xff0000 : 0x5865f2,
            spoiler: false,
            components: [
                {
                    type: 9,
                    accessory: {
                        type: 11,
                        media: {
                            url: "https://media.discordapp.net/attachments/1072902797999210506/1380983008919556227/thumbnail.png?ex=6845dc26&is=68448aa6&hm=80e4800436d50cf0e0ed292949dac9caa1864df07b478eab13af5d29c10f021f&="
                        },
                        description: null,
                        spoiler: false
                    },
                    components: [
                        {
                            type: 10,
                            content: `## ${isClosed ? "Closed" : "New"} ModMail Ticket\nA new ticket has been created ${createdBy ? `by <@${createdBy}> on behalf of <@${userId}>` : `by <@${userId}>`}.`
                        }
                    ]
                },
                {
                    type: 10,
                    content: `## Topic:\n${topic || "n/a"}`
                },
                {
                    type: 10,
                    content: `## Details:\n${details || "n/a"}`
                },
                {
                    type: 10,
                    content: `### Usernames:\n${usernames || "n/a"}`
                },
                {
                    type: 14,
                    divider: true,
                    spacing: 2
                },
                ...(!isClosed ? [{
                    type: 1,
                    components: [
                        {
                            type: 2,
                            style: 5,
                            label: "View Ticket Channel",
                            url: `https://discord.com/channels/@me/${ticketChannelId}`,
                            emoji: null,
                            disabled: false
                        },
                        {
                            type: 2,
                            style: 5,
                            label: "View Mod Discussion Thread",
                            url: `https://discord.com/channels/@me/${threadId}`,
                            emoji: null,
                            disabled: false
                        },
                        {
                            type: 2,
                            style: 4,
                            label: "Close Ticket",
                            emoji: null,
                            disabled: false,
                            custom_id: `closeTicket_${ticketChannelId}_${threadId}`
                        }
                    ]
                }] : [
                    ...(closedBy ? [{
                        type: 10,
                        content: `Ticket closed by <@${closedBy}> (${closedBy}).`
                    }] : [])
                ])
            ]
        }
    ],
    allowed_mentions: { parse: [] }
});