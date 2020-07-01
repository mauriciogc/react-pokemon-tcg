import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
	container: {
		width: "300px",
		height: "100px",
		padding: "20px",

		position: "absolute",
		top: "50%",
		left: "50%",

		margin: "-70px 0 0 -170px",
	},
	div: {
		display: "inline-block",
		position: "relative",
		width: "80px",
		height: "40px",
		"& div": {
			position: "absolute",
			top: "10px",
			width: "13px",
			height: "13px",
			borderRadius: "50%",
			background: ({ color }) => color,
			animation: "cubic-bezier(0, 1, 1, 0)",
		},
		"& div:nth-child(1)": {
			left: "8px",
			animation: "$lds-ellipsis1 0.6s infinite",
		},
		"& div:nth-child(2)": {
			left: "8px",
			animation: "$lds-ellipsis2 0.6s infinite",
		},
		"& div:nth-child(3)": {
			left: "32px",
			animation: "$lds-ellipsis2 0.6s infinite",
		},
		"& div:nth-child(4)": {
			left: "56px",
			animation: "$lds-ellipsis2 0.6s infinite",
		},
	},
	"@keyframes lds-ellipsis1": {
		"0%": { transform: "scale(0)" },
		"100%": { transform: "scale(1)" },
	},
	"@keyframes lds-ellipsis2": {
		"0%": { transform: "translate(0, 0)" },
		"100%": { transform: "translate(24px, 0)" },
	},
	"@keyframes lds-ellipsis3": {
		"0%": { transform: "scale(1)" },
		"100%": { transform: "scale(0)" },
	},
});

const Loading = ({ color = "#ed1d25", middle = false }) => {
	const classes = useStyles({ color });
	return (
		<div className={middle ? classes.container : ""}>
			<div className={classes.div}>
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};

Loading.propTypes = {
	color: PropTypes.string,
	middle: PropTypes.bool,
};

export default Loading;
