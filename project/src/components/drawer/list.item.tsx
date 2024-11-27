import { Avatar, Box, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CircleIcon from '@mui/icons-material/Circle'
import { IChatDrawerListItemProps } from "../../common/interfaces";
import { ChatDrawerListItemStyled } from "../../styled";

export function ChatDrawerListItem({
	profile,
	author,
	lastMessage,
	selected,
	onClick
}: IChatDrawerListItemProps) {
	return (
		<>
			<ChatDrawerListItemStyled
				selected={selected}
				disablePadding
			>
				<ListItemButton onClick={onClick}>

					{/** Avatar */}
					<ListItemAvatar>
						<Avatar src={author.avatar} >{author.fullName[0]}</Avatar>
					</ListItemAvatar>

					{}
					<ListItemText>

						<Typography component='div'>
							<Stack direction='row' justifyContent='space-between'>

								<Typography className="chat--profile-name" component='h5'>
									{author.fullName}
								</Typography>

								{lastMessage && (
									<Typography className="chat--profile-date" component='span'>
										{lastMessage.message_createdAt.toLocaleDateString()}
									</Typography>
								)}

							</Stack>
						</Typography>

						<Typography component='div'>
							<Stack direction='row' justifyContent='space-between'>

								{lastMessage && (
									<>
										<Typography className='chat--message-text'>
											{lastMessage.message_text}
										</Typography>

										<Box className="chat--message-status">
											{profile.profile_id !== author.profile_id ? (
												<>
													{lastMessage.message_isRead ? (
														<DoneAllIcon color='primary' />
													) : (
														<CircleIcon color='primary' />
													)}
												</>
											) : (
												<>
													{lastMessage.message_isRead ? (
														<DoneAllIcon />
													) : (
														<CheckIcon sx={{ opacity: '0.25' }} color='primary' />
													)}
												</>
											)}
										</Box>
									</>
								)}

							</Stack>
						</Typography>

					</ListItemText>

				</ListItemButton>
			</ChatDrawerListItemStyled>
		</>
	)
}