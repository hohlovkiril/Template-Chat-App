import { useState, useRef, useEffect } from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import SendIcon from '@mui/icons-material/Send';
import { IChatMainProps } from "../../common/interfaces";
import { ChatFormContainerStyled, ChatMainStyled, ChatMessagesContainerStyled } from "../../styled";
import { ChatMessage } from "./message.item";

export function ChatMain({
	open,
	profile,
	chat,
	chatUpdated,
	onSend,
	onChatUpdated,
}: IChatMainProps) {
	/** States */
	const [message, setMessage] = useState<string>('');

	/** Refs */
	const messageContainerRef = useRef<HTMLDivElement>(null);

	/** Handlers */

	const handleSend = () => {
		if (message.length > 0) {
			onSend(message);
		}

		setMessage('');
	}

	const handleScrollBottom = () => {
		if (messageContainerRef.current) {
			const offsetHeight = messageContainerRef.current.offsetHeight;
			const scrollHeight = messageContainerRef.current.scrollHeight;
			const scrollTop = messageContainerRef.current.scrollTop;

			if (scrollHeight - scrollTop !== offsetHeight) {
				messageContainerRef.current.scrollTo({ top: scrollHeight });
			}
		}
	}

	/** Effects */

	useEffect(() => {
		if (chatUpdated === false) {
			handleScrollBottom();
			onChatUpdated();
		}
	}, [chatUpdated, onChatUpdated])

	return (
		<>
			<ChatMainStyled open={open}>

				<ChatMessagesContainerStyled
					ref={messageContainerRef}
				>
					{chat && chat.messages.map((msg, key) => (
						<ChatMessage
							key={key}
							profile={profile}
							author={msg.message_author_id === chat.profile.profile_id ? chat.profile : profile}
							message={msg}
						/>
					))}
				</ChatMessagesContainerStyled>

				<ChatFormContainerStyled>

					<TextField
						value={message}
						variant='standard'
						placeholder='Your message...'
						rows={3}
						multiline
						disabled={chat === undefined}
						onChange={(evt) => setMessage(evt.target.value)}
						onKeyDownCapture={(evt) => {
							if (evt.code === 'Enter' && evt.shiftKey === false) {
								evt.preventDefault();
								handleSend();
							}
						}}
					/>

					<Box>
						<Stack direction='row' gap={1}>
							<Box>
								<IconButton>
									<AttachFileIcon />
								</IconButton>
							</Box>
							<Box>
								<IconButton>
									<PhotoOutlinedIcon />
								</IconButton>
							</Box>
						</Stack>

						<Stack direction='row' gap={1}>
							<Box>
								<IconButton
									disabled={chat === undefined && message.length === 0}
									color={message.length > 1 ? 'primary' : 'default'}
									onClick={handleSend}
								>
									<SendIcon />
								</IconButton>
							</Box>
						</Stack>
					</Box>

				</ChatFormContainerStyled>

			</ChatMainStyled>
		</>
	)
}