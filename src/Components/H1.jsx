import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
	h1: {
		fontSize: "2rem",
		color: ({ color }) => color,
		padding: "0 5px",
		margin: "0",
	},
});

const H1 = ({ children, text = "", color = "#4e5761" }) => {
	const classes = useStyles({ color });

	return (
		<h1 className={classes.h1}>
			{children} {text}
		</h1>
	);
};

export default H1;
