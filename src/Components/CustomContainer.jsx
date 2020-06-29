import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	container: {
		width: "100%",
		display: "flex",
		alignItems: ({ alignItems }) => alignItems,
		flexDirection: "row",
		flexWrap: "wrap",
	},
});

const CustomContainer = ({ children, alignItems = "center" }) => {
	const classes = useStyles({ alignItems });

	return <div className={classes.container}>{children}</div>;
};

export default CustomContainer;
