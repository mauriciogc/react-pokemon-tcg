import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
	container: {
		paddingTop: "25px",
		paddingBottom: "50px",
	},
	button: {
		background: "transparent",
		border: ({ color }) => `2px solid ${color}`,
		color: ({ color }) => color,
		cursor: "pointer",
		fontWeight: "bold",
		width: "50%",
		padding: "8px 16px",
		position: "relative",
		textAlign: "center",
		textDecoration: "none",
		"@media (max-width: 767px)": {
			width: "90%",
		},
		"&:hover": {
			background: ({ color }) => color,
			color: "#fff",
		},
	},
});
const Button = ({ text, handleEvent, color = "#ed1d25" }) => {
	const classes = useStyles({ color });

	return (
		<div className={classes.container}>
			<button className={classes.button} onClick={handleEvent}>
				{text}
			</button>
		</div>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	handleEvent: PropTypes.func.isRequired,
	color: PropTypes.string,
};

export default Button;
