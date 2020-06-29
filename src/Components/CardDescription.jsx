import React from "react";
import { createUseStyles } from "react-jss";

import CustomContainer from "./CustomContainer";
import H2 from "./H2";
import Paragraph from "./Paragraph";

const useStyles = createUseStyles({
	type: {
		fontSize: "0.8rem",
		fontWeight: 100,
		color: ({ color }) => color,
	},
});

const CardDescription = ({ data }) => {
	const { title, text = [], type = "", color = "#4e5761" } = data;
	const classes = useStyles({ color });
	return (
		<CustomContainer>
			<H2 text={title} color={color}>
				{type && <span className={classes.type}>[ {type} ]</span>}
			</H2>
			{text.map((p, i) => (
				<Paragraph text={p} key={i} />
			))}
		</CustomContainer>
	);
};

export default CardDescription;
