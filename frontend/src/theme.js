import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		defaultText: {
			main: "#000000",
		},
		dark: {
			main: "#232424",
			contrastText: "#fff",
		},
		medium: {
			main: "#363636",
			contrastText: "#fff",
		},
		primary: {
			main: "#8365a6",
			contrastText: "#fff",
		},
		secondary: {
			main: "#f8b800",
		},
		secondaryBackground: {
			main: "#eeedf1",
		},
		tertiary: {
			main: "#9ec43f",
		},
		white: {
			main: "#fff",
			contrastText: "#000",
		},
		spark: {
			main: "#c6203e",
			contrastText: "#fff",
		},
		leaf: {
			main: "#9eab3f",
			contrastText: "#fff",
		},
		scout: {
			main: "#00b0c0",
			contrastText: "#fff",
		},
		tinker: {
			main: "#01acab",
			contrastText: "#ffcc00",
		},
		dispatch: {
			main: "#01acab",
			contrastText: "#ffcc00",
		},
		muted: {
			main: "#444",
		},
		lightGray: {
			main: "#f6f6f6",
			contrastText: "#000",
		},
		darkGray: {
			main: "#181818",
			contrastText: "#fff",
		},
		success: {
			main: "#678d06",
			contrastText: "#fff",
		},
		error: {
			main: "#c6203e",
			contrastText: "#fff",
		},
		lightSandstone: {
			main: "#bcb4a6",
			contrastText: "#000",
		},
		sandstone: {
			main: "#8e8c84",
			contrastText: "#000",
		},
	},

	typography: {
		fontFamily: "Roboto, sans-serif",

		h1: {
			fontSize: "1.875rem",
			fontWeight: "800",
			textTransform: "uppercase",
			letterSpacing: "3.75px",
			lineHeight: "38px",
		},
		h2: {
			fontSize: "1.125rem",
			fontWeight: "800",
			textTransform: "uppercase",
			letterSpacing: "2.5px",
			lineHeight: "30px",
		},
		h3: {
			fontSize: "1.5rem",
		},
		h4: {
			fontSize: "1.25rem",
		},

		h5: {
			fontSize: "1rem",
		},
		h6: {
			fontSize: "0.875rem",
		},
		p: {
			fontSize: "1rem",
		},
	},
	borderRadius: "10px",
	boxShadow: "0 2px 12px 1px rgba(0, 0, 0, 0.07)",
	menuWidth: "18.75rem",
	collapsedMenuWidth: "4rem",
	headerHeight: "107px",
	footerHeight: "40px",
	spacer: "1rem",
	borders: {
		radius: {
			default: "10px",
			sm: "4px",
			md: "8px",
			lg: "16px",
			none: "0",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: "1rem 2rem",
				},
			},
			variants: [
				{
					props: {
						size: "large",
					},
					style: {
						height: "50px",
						width: "250px",
						fontWeight: "600",
						fontSize: "0.75rem",
						lineHeight: "1.5",
					},
				},
			],
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					margin: "1rem 0",
				},
			},
		},
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "reel-h1",
					},
					style: {
						fontSize: "1.875rem",
						fontWeight: "800",
						textTransform: "uppercase",
						letterSpacing: "3.75px",
						lineHeight: "38px",
					},
				},
				{
					props: {
						variant: "reel-h2",
					},
					style: {
						fontSize: "1.125rem",
						fontWeight: "800",
						textTransform: "uppercase",
						letterSpacing: "2.5px",
						lineHeight: "30px",
					},
				},
				{
					props: {
						variant: "reel-h3",
					},
					style: {
						fontSize: "1.5rem",
					},
				},
				{
					props: {
						variant: "reel-h4",
					},
					style: {
						fontSize: "1.25rem",
					},
				},
				{
					props: {
						variant: "reel-h5",
					},
					style: {
						fontSize: "1rem",
					},
				},
				{
					props: {
						variant: "reel-h6",
					},
					style: {
						fontSize: "0.875rem",
					},
				},
				{
					props: {
						variant: "reel-p",
					},
					style: {
						fontSize: "1rem",
					},
				},
			],
		},
	},
});
