import { Avatar, Box, Typography } from "@mui/material";
import { IChatMessageProps } from "../../common/interfaces";
import { ChatMessageContainerStyled } from "../../styled";

export function ChatMessage({
	profile,
	author,
	message
}: IChatMessageProps) {
	return (
		<>
			<ChatMessageContainerStyled side={profile.profile_id === message.message_author_id ? 'right' : 'left'}>

				<Box className='chat--message-block'>

					<Box className='chat--message-avatar-block'>
						<Avatar src={author.avatar}>{author.fullName[0]}</Avatar>
					</Box>

					<Box className='chat--message-text-container'>
						<Box className='chat--message-text-block'>
							<Typography>
								{message.message_text}
							</Typography>
						</Box>
						<Typography className='chat--message-date'>
							{message.message_createdAt.toLocaleDateString()}
						</Typography>
					</Box>

					<Box className='chat--message-options'>

					</Box>
					
				</Box>

			</ChatMessageContainerStyled>
		</>
	)
}