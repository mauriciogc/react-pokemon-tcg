import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	p: {
		marginTop: "5px",
		width: "100%",
		color: ({ color }) => color,
		fontSize: "1rem",
		lineHeight: "1.5",
	},
});

const Paragraph = ({ text, color = "#7b8188" }) => {
	const classes = useStyles({ color });

	return <p className={classes.p}>{text}</p>;
};

export default Paragraph;
