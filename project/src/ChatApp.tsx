/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material"
import { ChatDrawer } from "./components/drawer";
import { ChatMain } from "./components/main";
import { ChatWrapper, ChatContainer } from "./styled";
import { templateProfile, templateChats } from "./common/data";
import { ChatType } from "./common/types";
import { ChatHeader } from "./components/header";
import { CHAT_APP_MEDIA_QUERIES } from "./common/constants";

interface IProps {
	
}

export function ChatApp(props: IProps) {
	/** States */
	const [open, setOpen] = useState<boolean>(true);
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);
	/** Chat states */
	const [chats, setChats] = useState<ChatType[]>(templateChats);
	const [selectedChat, setSelectedChat] = useState<ChatType | undefined>(undefined);
	const [chatUpdated, setChatUpdated] = useState<boolean>(false);

	/** Context */
	const isMobile = useMediaQuery(`(max-width: ${CHAT_APP_MEDIA_QUERIES.tablet})`);

	/** Handlers */
	
	const handleDrawerOpen = () => {
		if (isMobile) {
			setMobileOpen(true);
		} else {
    	setOpen(true);
		}
  };

  const handleDrawerClose = () => {
    if (isMobile) {
			setMobileOpen(false);
		} else {
    	setOpen(false);
		}
  };

	const handleSelectChat = (id: number) => {
		const findChat = chats.find((chat) => chat.profile.profile_id === id);

		if (findChat)
			setSelectedChat(findChat);
	}

	const handleSendMessage = (message: string) => {

		if (selectedChat) {
			setSelectedChat({ ...selectedChat, messages: [...selectedChat.messages, {
				message_id: 1,
				message_author_id: 1,
				message_text: message,
				message_createdAt: new Date(),
				message_isRead: false,
			}]})
			setChatUpdated(false);
		}
	}

	/** Effects */

	useEffect(() => {

		if (isMobile) {
			setOpen(true);
		} else {
			setMobileOpen(false);
		}

	}, [isMobile])

	return (
		<>
			<ChatWrapper >
				<ChatContainer>

					{/** Header */}
					<ChatHeader
						open={isMobile ? mobileOpen : open}
						chat={selectedChat}
						onOpen={handleDrawerOpen}
						onClose={handleDrawerClose}
					/>

					{/** Drawer */}
					<ChatDrawer
						drawerProps={{
							variant: 'persistent',
							anchor: "left",
							open: isMobile ? mobileOpen : open,
						}}
						selectedId={selectedChat ? selectedChat.profile.profile_id : undefined}
						profile={templateProfile}
						chats={chats}
						onSelectChat={handleSelectChat}
						onClose={handleDrawerClose}
					/>

					{/** Main */}
					<ChatMain
						open={open} 
						profile={templateProfile}
						chat={selectedChat}
						chatUpdated={chatUpdated}
						onSend={handleSendMessage}
						onChatUpdated={() => setChatUpdated(true)}
					/>

				</ChatContainer>
			</ChatWrapper>
		</>
	)
}