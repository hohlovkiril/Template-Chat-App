import { IconButton, Box, Stack, Avatar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IChatHeaderProps } from "../../common/interfaces";
import { ChatHeaderStyled, ChatHeaderToolbarStyled } from "../../styled";

export function ChatHeader({
	open,
	chat,
	onOpen,
	onClose
}: IChatHeaderProps) {
	/** Handlers */

	const handleClick = () => {
		open ? onClose() : onOpen();
	}

	return (
		<>
			<ChatHeaderStyled open={open}>
				<ChatHeaderToolbarStyled>

					{/** Left toolbar */}
					<div className="toolbar-container">

						<IconButton onClick={handleClick}>
							{open ? (
								<MenuOpenIcon />
							) : (
								<MenuIcon />
							)}
						</IconButton>

						{chat && (
							<Box className="toolbar-chat-info">
								<Avatar src={chat.profile.avatar}>{chat.profile.fullName[0]}</Avatar>
								<Stack direction='column' justifyContent='center' gap={1}>
									<Typography component='h1'>
										{chat.profile.fullName}
									</Typography>
								</Stack>
							</Box>
						)}

					</div>

					{/** Right toolbar */}
					<div className="toolbar-container">
						<IconButton>
							<MoreVertIcon />
						</IconButton>
					</div>

				</ChatHeaderToolbarStyled>
			</ChatHeaderStyled>
		</>
	)
}