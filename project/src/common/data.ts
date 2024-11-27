import { ChatMessageType, ChatProfileType, ChatType } from "./types";

export const templateProfile: ChatProfileType = {
	profile_id: 1,
	fullName: 'Harry Hazze',
	avatar: '',
}

export const templateMessage: ChatMessageType = {
	message_id: 1,
	message_author_id: 1,
	message_text: 'Hello!',
	message_createdAt: new Date('10.12.2024 11:24:42'),
	message_isRead: false,
}

export const templateChats: ChatType[] = [
	{
		profile: {
			profile_id: 2,
			fullName: 'Gabriel Stewart',
			avatar: '',
		},
		messages: [{ ...templateMessage, message_author_id: 2 }]
	},
	{
		profile: {
			profile_id: 3,
			fullName: 'Kyle Woods',
			avatar: '',
		},
		messages: [{ ...templateMessage, message_author_id: 3 }]
	},
	{
		profile: {
			profile_id: 4,
			fullName: 'John Carter',
			avatar: '',
		},
		messages: [{ ...templateMessage, message_author_id: 4 }]
	},
	{
		profile: {
			profile_id: 5,
			fullName: 'Mark Bauer',
			avatar: '',
		},
		messages: [{ ...templateMessage, message_author_id: 5 }]
	}
]