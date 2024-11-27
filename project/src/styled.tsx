import { AppBar, Box, Drawer, List, ListItem, styled, Toolbar } from '@mui/material';
import { IChatDrawerListItemStyleProps, IChatHeaderStyleProps, IChatMainStyleProps, IChatMessageStyleProps } from './common/interfaces';
import { CHAT_APP_DRAWER_WIDTH, CHAT_APP_MEDIA_QUERIES } from './common/constants';

export const ChatWrapper = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}))

export const ChatContainer = styled(Box)(({ theme }) => ({
	width: '90%',
	height: '95%',
	boxSizing: 'border-box',
	background: theme.palette.background.paper,
	display: 'flex',
	position: 'relative',
	overflow: 'hidden',
	border: '1px solid',
	borderColor: theme.palette.mode === 'light'
		? 'var(--border-dark-mode-color)'
		: 'var(--border-light-mode-color)',
	borderRadius: 'var(--border-radius)',
}))

/** Chat Header */

export const ChatHeaderStyled = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<IChatHeaderStyleProps>(({ theme, open }) => ({
	position: 'absolute',
	height: '60px',
	width: open ? `calc(100% - ${CHAT_APP_DRAWER_WIDTH})` : '100%',
	marginLeft: open ? CHAT_APP_DRAWER_WIDTH : '0',
	background: theme.palette.background.paper,
	boxShadow: 'none',
	transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: open
			? theme.transitions.duration.enteringScreen
			: theme.transitions.duration.leavingScreen,
  }),

	[`@media screen and (max-width: ${CHAT_APP_MEDIA_QUERIES.tablet})`]: {
		width: '100%',
	}
}))

export const ChatHeaderToolbarStyled = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',

	'& .toolbar-container': {
		display: 'flex',
		flexDirection: 'row',
		gap: '1em',

		'& .toolbar-chat-info': {
			display: 'flex',
			flexDirection: 'row',
			gap: '1em',
			color: theme.palette.mode === 'light'
				? 'black' : 'white',
		}
	}
}))

/** Chat Drawer */

export const ChatDrawerStyled = styled(Drawer)(({ theme }) => ({
	width: '240px',
	flexShrink: 0,
	background: theme.palette.background.paper,

	'& .MuiDrawer-paper': {
		position: 'relative',
		width: '240px',
		boxSizing: 'border-box',
		overflow: 'hidden',
	},

	[`@media screen and (max-width: ${CHAT_APP_MEDIA_QUERIES.tablet})`]: {
		width: '0',

		'& .MuiDrawer-paper': {
			position: 'fixed',
		}
	},
}))

export const ChatDrawerHeaderStyled = styled('div')(({ theme }) => ({
	flex: 1,

	'& .MuiBox-root': {
		width: '100%',
		height: '100%',
		padding: '1em',
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',

		'& .MuiTypography-root': {
			fontSize: '1.25em',
			fontWeight: '500'
		}
	}
}))

/** Chat Drawer List */

export const ChatDrawerListStyled = styled(List)(({ theme }) => ({
	flex: 1,
	minHeight: '70%',
	padding: 0,
	overflowY: 'auto',

	'& .MuiDivider-root': {
		marginLeft: '0'
	}
}))

export const ChatDrawerListItemStyled = styled(ListItem, {
	shouldForwardProp: (prop) => prop !== 'selected'
})<IChatDrawerListItemStyleProps>(({ theme, selected }) => ({
	background: selected && theme.palette.mode === 'light'
		? '#bfbfbf' : selected && theme.palette.mode === 'dark'
		? '#151515' : theme.palette.background.paper,

	'& .MuiButtonBase-root': {
		paddingTop: '.25em',
		paddingBottom: '.25em',
	},

	'& .chat--profile-name': {
		fontSize: '.9rem',
		fontWeight: '500',
	},
	'& .chat--profile-date': {
		display: 'flex',
		alignItems: 'center',
		fontSize: '.6rem',
	},

	'& .chat--message-text': {
		fontSize: '.75rem',
		fontWeight: '300'
	},

	'& .chat--message-status': {
		display: 'flex',
		alignItems: 'center',

		'& svg': {
			fontSize: '.75rem'
		}
	},
}))

/** Chat Drawer Footer */

export const ChatDrawerFooterStyled = styled('div')(({ theme }) => ({
	flex: 1,
}))

/** Chat Main */

export const ChatMainStyled = styled('div', {
	shouldForwardProp: (prop) => prop !== 'open'
})<IChatMainStyleProps>(({ theme, open }) => ({
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	height: 'calc(100% - 60px)',
	marginTop: '60px',
	background: theme.palette.background.default,
	transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: open
			? theme.transitions.duration.enteringScreen
			: theme.transitions.duration.leavingScreen,
  }),
	marginLeft: open ? '0px' : '-240px',

	[`@media screen and (max-width: ${CHAT_APP_MEDIA_QUERIES.tablet})`]: {
		marginLeft: '0px',
	},
}))

export const ChatMessagesContainerStyled = styled('div')(({ theme }) => ({
	flex: 1,
	maxHeight: 'calc(100% - 180px)',
	height: '100%',
	background: theme.palette.background.default,
	alignContent: 'end',
	overflowY: 'auto',
}))

export const ChatMessageContainerStyled = styled('div', {
	shouldForwardProp: (prop) => prop !== 'side'
})<IChatMessageStyleProps>(({ theme, side }) => ({
	width: '100%',
	minHeight: '75px',
	padding: '1em',
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: side === 'right' ? 'end' : 'start',

	'& .MuiBox-root.chat--message-block': {
		display: 'flex',
		flexDirection: side === 'right' ? 'row-reverse' : 'row',
		gap: '1em',

		'& .chat--message-text-container': {
			display: 'flex',
			flexDirection: 'column',
			gap: '.15em',
			alignItems: 'start',

			'& .chat--message-text-block': {
				padding: '.5em',
				minWidth: '75px',
				borderRadius: side === 'right'
					? '6px 6px 0px 6px'
					: '6px 6px 6px 0px',
				color: theme.palette.mode === 'light' && side === 'right'
					? 'white' : theme.palette.mode === 'light' && side === 'left'
					? 'black' : theme.palette.mode === 'dark' && side === 'right'
					? 'black' : 'white',
				background: side === 'right'
					? theme.palette.primary.light
					: theme.palette.background.paper,
			},

			'& .chat--message-date': {
				color: 'gray',
				fontSize: '.75rem'
			}
		}
	},
}))

export const ChatFormContainerStyled = styled('div')(({ theme }) => ({
	padding: '1em',
	boxSizing: 'border-box',
	flex: 1,
	maxHeight: '180px',
	height: '100%',
	background: theme.palette.background.paper,
	display: 'flex',
	flexDirection: 'column',

	'& .MuiFormControl-root': {
		flex: 2,

		'& .MuiInputBase-root': {
			height: '100%',
		}
	},

	'& .MuiBox-root': {
		padding: '.25em',
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
}))