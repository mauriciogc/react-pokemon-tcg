import React from "react";
import { createUseStyles } from "react-jss";
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

export default H3;
