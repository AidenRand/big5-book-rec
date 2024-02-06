import { theme } from "../theme.js";

const textfieldStyles = {
	width: "50vw",
	"&::focus": {
		color: theme.palette.lightPurple.main,
	},

	fieldset: {
		borderColor: theme.palette.purple.main,
		margin: "auto",
	},

	"& label.Mui-focused": {
		color: theme.palette.lightPurple.main,
	},

	"& label": {
		color: theme.palette.lightPurple.main,
	},

	"& .MuiInput-underline:after": {
		borderBottomColor: theme.palette.purple.main,
	},
	"& .MuiOutlinedInput-root": {
		color: theme.palette.lightPurple.main,

		"&.Mui-focused fieldset": {
			borderColor: theme.palette.purple.main,
		},

		"&:hover fieldset": {
			borderColor: theme.palette.purple.main,
		},
	},
};

export default textfieldStyles;
