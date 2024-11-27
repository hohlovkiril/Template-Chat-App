import React, { useEffect, useState } from 'react';
import { Divider, FormControl, InputAdornment, TextField, Box, Typography, useMediaQuery, Stack, IconButton } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';
import { ChatDrawerFooterStyled, ChatDrawerHeaderStyled, ChatDrawerListStyled, ChatDrawerStyled } from "../../styled";
import { ChatDrawerListItem } from "./list.item";
import { ChatType } from '../../common/types';
import { IChatDrawerProps } from "../../common/interfaces";
import { CHAT_APP_MEDIA_QUERIES } from '../../common/constants';

type FilterChats = {
	filter: string;
	chats: ChatType[];
}

export function ChatDrawer(props: IChatDrawerProps) {
	/** States */
	const [filterChats, setFilterChats] = useState<FilterChats>({
		filter: '', chats: props.chats,
	});

	/** Context */
	const isMobile = useMediaQuery(`(max-width: ${CHAT_APP_MEDIA_QUERIES.tablet})`);

	/** Handlers */

	const handleInputFilter = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFilterChats({ ...filterChats, filter: evt.target.value });
	}

	useEffect(() => {

		if (filterChats.filter.length > 0) {
			setFilterChats({
				...filterChats,
				chats: props.chats.filter((chat) => {
					if (chat.profile.fullName.toLowerCase().includes(filterChats.filter))
						return chat;

					return false;
				})
			})
		} else {
			setFilterChats({ filter: '', chats: props.chats })
		}
	}, [filterChats, props.chats])

	return (
		<>
			<ChatDrawerStyled {...props.drawerProps}>

				<ChatDrawerHeaderStyled>

					<Box>
						
						<Stack direction='row' justifyContent='space-between'>
							
							<Typography component='h1'>
								Chats
							</Typography>

							{isMobile && props.drawerProps.open && (
								<div>
									<IconButton onClick={props.onClose}>
										<MenuOpenIcon />
									</IconButton>
								</div>
							)}

						</Stack>

						<FormControl variant='standard'>
							<TextField 
								id="chat--filter-field"
								placeholder='Search'
								value={filterChats.filter}
								variant='outlined'
								onChange={handleInputFilter}
								slotProps={{
									input: {
										startAdornment: (
											<InputAdornment position='start'>
												<SearchIcon />
											</InputAdornment>
										)
									}
								}}
							/>
						</FormControl>
					</Box>
					
				</ChatDrawerHeaderStyled>

				<Divider />
				
				<ChatDrawerListStyled>
					{filterChats.chats.map((chat, key) => (
						<React.Fragment key={key}>

							<ChatDrawerListItem
								profile={props.profile}
								author={chat.profile}
								lastMessage={chat.messages.length > 0
									?	chat.messages[chat.messages.length - 1]
									: undefined
								}
								selected={props.selectedId === chat.profile.profile_id}
								onClick={() => {
									if (isMobile)
										props.onClose();

									props.onSelectChat(chat.profile.profile_id)
								}}
							/>

							{key !== filterChats.chats.length && (
								<Divider variant="inset" component="li" />
							)}

						</React.Fragment>
					))}
				</ChatDrawerListStyled>

				<Divider />

				<ChatDrawerFooterStyled />

			</ChatDrawerStyled>
		</>
	)
}