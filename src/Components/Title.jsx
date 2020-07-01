import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

import H1 from "./H1";
import H2 from "./H2";
import Paragraph from "./Paragraph";

const useStyles = createUseStyles({
	container: {
		display: "flex",
		alignItems: "center",
		flexFlow: "row wrap",
		justifyContent: "center",
		maxWidth: "1440px",
		padding: 0,
		margin: "0 auto",
	},
	hr: {
		width: "100%",
		border: "none",
		display: "block",
		height: "1px",
		margin: "1rem 0",
		backgroundColor: "#f5f5f5",
	},
});

const Title = ({ children, title = "", subtitle = "", text = "", color }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			{children}
			{title && <H1 text={title} color={color} />}
			{subtitle && <H2 text={subtitle} width="" />}
			{text && <Paragraph text={text} />}
			<hr className={classes.hr} />
		</div>
	);
};

Title.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	text: PropTypes.string,
	color: PropTypes.string,
};
export default Title;
