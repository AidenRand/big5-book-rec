import React from "react";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

function App() {
	const queryClient = new QueryClient({});

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={createTheme(theme)}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
