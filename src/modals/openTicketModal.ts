export const openTicketModal = (targetUserId?: string): object => {
    return {
        "type": 9,
        "data": {
            "custom_id": `modContactTicketDetails${targetUserId ? `_${targetUserId}` : ''}`,
            "title": targetUserId ? `Contact User` : 'Contact Moderators',
            "components": [
                {
                    "type": 1,
                    "components": [
                        {
                            "type": 4,
                            "custom_id": "ticket_topic",
                            "label": "Topic",
                            "style": 1,
                            "min_length": 1,
                            "max_length": 100,
                            "placeholder": "E.g. User report, Rule question, Appeal, etc.",
                            "required": true
                        }
                    ]
                },
                {
                    "type": 1,
                    "components": [
                        {
                            "type": 4,
                            "custom_id": "ticket_details",
                            "label": "Details",
                            "style": 2,
                            "min_length": 10,
                            "max_length": 1000,
                            "placeholder": "Describe your issue or request in detail.",
                            "required": true
                        }
                    ]
                },
                ...(!targetUserId ? [{
                    "type": 1,
                    "components": [
                        {
                            "type": 4,
                            "custom_id": "ticket_usernames",
                            "label": "Users Involved (optional)",
                            "style": 1,
                            "min_length": 0,
                            "max_length": 200,
                            "placeholder": "List any relevant usernames (optional)",
                            "required": false
                        }
                    ]
                }] : [])
            ]
        }
    };
}