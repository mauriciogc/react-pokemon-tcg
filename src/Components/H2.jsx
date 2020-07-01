import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
	h2: {
		width: ({ width }) => width,
		fontSize: "1.5rem",
		fontWeight: 300,
		color: ({ color }) => color,
		padding: "0 5px 10px 5px",
		margin: "0",
	},
});

const H2 = ({ children, text = "", color = "#4e5761", width = "100%" }) => {
	const classes = useStyles({ color, width });

	return (
		<h2 className={classes.h2}>
			{children} {text}
		</h2>
	);
};

H2.propTypes = {
	children: PropTypes.any,
	text: PropTypes.string,
	color: PropTypes.string,
	width: PropTypes.string,
};

export default H2;
