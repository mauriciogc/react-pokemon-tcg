import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
	h3: {
		fontSize: "1.1rem",
		fontWeight: 400,
		color: ({ color }) => color,
		padding: "5px",
		margin: "0",
	},
});

const H3 = ({ children, text = "", color = "#151b22" }) => {
	const classes = useStyles({ color });

	return (
		<h3 className={classes.h3}>
			{children} {text}
		</h3>
	);
};

H3.propTypes = {
	children: PropTypes.any,
	text: PropTypes.string,
	color: PropTypes.string,
};

export default H3;
