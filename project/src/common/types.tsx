export type ChatProfileType = {
	profile_id: number;
	fullName: string;
	avatar: string;
}

export type ChatMessageType = {
	message_id: number;
	message_author_id: number;
	message_text: string;
	message_createdAt: Date;
	message_isRead: boolean;
}

export type ChatType = {
	profile: ChatProfileType;
	messages: ChatMessageType[];
}