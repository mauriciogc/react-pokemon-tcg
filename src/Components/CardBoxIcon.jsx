import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

import Boxes from "./Boxes";
import CustomContainer from "./CustomContainer";
import H3 from "./H3";

const useStyles = createUseStyles({
	row: {
		flex: "1 0 0",
		margin: "5px",
		minWidth: "230px",
		textAlign: "center",
		"@media (max-width: 767px)": {
			minWidth: "150px",
		},
	},
});

const CardBoxIcon = ({ data = {} }) => {
	const classes = useStyles();

	return (
		<CustomContainer alignItems={"stretch"}>
			{data.map(({ title, boxes }) => (
				<div key={title} className={classes.row}>
					<H3 text={title} />
					<Boxes boxes={boxes} />
				</div>
			))}
		</CustomContainer>
	);
};

CardBoxIcon.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			boxes: PropTypes.array,
		})
	),
};

export default CardBoxIcon;
