import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import Icon from "../Components/Icon";

const useStyles = createUseStyles({
	text: {
		color: "#7b8188",
		fontSize: "1rem",
		lineHeight: "1.5",
	},
});

const Boxes = ({ boxes }) => {
	const classes = useStyles();
	return (
		<Fragment>
			{boxes.map(
				({
					index,
					name = "",
					bg = "",
					img = "",
					text = "",
					size = "small",
				}) => (
					<Fragment key={index}>
						{img && <Icon bg={bg} size={size} name={name} img={img} />}
						{text && <span className={classes.text}>{text}</span>}
					</Fragment>
				)
			)}
		</Fragment>
	);
};

Boxes.propTypes = {
	boxes: PropTypes.arrayOf(
		PropTypes.shape({
			index: PropTypes.string.isRequired,
			name: PropTypes.string,
			bg: PropTypes.string,
			img: PropTypes.string,
			text: PropTypes.string,
			size: PropTypes.string,
		})
	),
};

export default Boxes;
