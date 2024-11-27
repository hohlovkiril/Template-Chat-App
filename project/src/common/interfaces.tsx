import { DrawerProps, ListItemProps } from "@mui/material";
import { ChatMessageType, ChatProfileType, ChatType } from "./types";

/** Props */

/** Base */

// interface IBaseChildrenProps {
// 	children: React.ReactNode;
// }

/** Drawer */

export interface IChatDrawerProps {
	drawerProps: DrawerProps;
	selectedId?: number;
	profile: ChatProfileType;
	chats: ChatType[];
	onSelectChat: (id: number) => void;
	onClose: () => void;
}

/** Drawer List */

/** Drawer List Item */

export interface IChatDrawerListItemStyleProps {
	selected: boolean,
}

export interface IChatDrawerListItemProps extends
	IChatDrawerListItemStyleProps,
	ListItemProps {
		profile: ChatProfileType;
		author: ChatProfileType;
		lastMessage?: ChatMessageType;
		onClick: () => void;
}

/** Header */

export interface IChatHeaderStyleProps {
	open: boolean;
}

export interface IChatHeaderProps extends
	IChatHeaderStyleProps {
		chat?: ChatType;
		onOpen: () => void;
		onClose: () => void;
}

/** Main */

export interface IChatMainStyleProps {
	open: boolean;
}

export interface IChatMainProps extends
	IChatMainStyleProps {
		profile: ChatProfileType;
		chat?: ChatType;
		chatUpdated: boolean;
		onSend: (message: string) => void;
		onChatUpdated: () => void;
}

export interface IChatMessageStyleProps {
	side: 'left' | 'right';
}

export interface IChatMessageProps {
	profile: ChatProfileType;
	author: ChatProfileType;
	message: ChatMessageType;
}