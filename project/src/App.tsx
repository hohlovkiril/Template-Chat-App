import { createTheme, ThemeProvider } from "@mui/material";
import { ChatApp } from "./ChatApp";

const theme = createTheme({
	palette: {
		mode: 'dark',
		text: {
			disabled: '#9d9c9c'
		},
		action: {
			active: '#fff',
			disabled: '#6c6c6c'
		},
		background: {
			default: '#121212',
			paper: '#1e1e1e'
		}
	}
})

export function App() {
	return (
		<ThemeProvider theme={theme}>
			<ChatApp />
		</ThemeProvider>
	)
}