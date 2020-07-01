import React from "react";
import { Img } from "react-image";
import { createUseStyles } from "react-jss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PropTypes from "prop-types";

const sizes = { xsmall: "17px", small: "35px", medium: "75px", big: "150px" };

const useStyles = createUseStyles({
	container: {
		display: "inline-block",
		color: ({ bg }) => bg,
		textAlign: "center",
	},
	icon: {
		borderRadius: "100%",
		height: ({ size }) => sizes[size],
		width: ({ size }) => sizes[size],
		margin: "0 2px",
		display: "inline-block",
		background: ({ bg }) => bg,
		boxShadow: ({ boxShadow, bg }) => boxShadow && `0 0 10px ${bg}`,
	},
	hoverIcon: {
		transition: "0.2s all",
		"&:hover": {
			filter: "saturate(200%)",
			transform: "scale(1.1)",
			cursor: "pointer",
		},
	},
	img: {
		height: "60%",
		width: "60%",
		margin: "20%",
	},
	text: {
		padding: "3px",
	},
});
const Icon = (props) => {
	const {
		img,
		name,
		bg,
		text,
		hover = false,
		skeleton,
		size = "small",
	} = props;
	const classes = useStyles(props);
	return (
		<div className={classes.container}>
			<div className={`${classes.icon} ${hover && classes.hoverIcon}`}>
				<Img
					src={img}
					alt={name}
					className={classes.img}
					loader={
						skeleton && (
							<SkeletonTheme color={bg}>
								<Skeleton
									circle={true}
									width={sizes[size]}
									height={sizes[size]}
								/>
							</SkeletonTheme>
						)
					}
				/>
			</div>
			{text && <div className={classes.text}>{text}</div>}
		</div>
	);
};

Icon.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	bg: PropTypes.string,
	text: PropTypes.string,
	hover: PropTypes.bool,
	skeleton: PropTypes.bool,
	size: PropTypes.string,
};

export default Icon;
