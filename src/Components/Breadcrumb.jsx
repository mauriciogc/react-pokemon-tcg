import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
	ul: {
		padding: "0.5em 1em",
		margin: "0 auto",
		marginBottom: "1em",
		backgroundColor: "#edeff0",
		position: "fixed",
		top: "0",
		left: "0",
		right: "0",
		zIndex: 1,
		"&:after": {
			clear: "both",
			content: "",
			display: "table",
		},
	},
	li: {
		display: "inline-block",
		margin: "0.5em 0",
		fontSize: "1rem",
		color: "#959fa5",
		"&:after": {
			display: "inline-block",
			content: "'\\00bb'",
			margin: "0 .6em",
		},
		"& > *": {
			display: "inline-block",
			color: "#2c3f4c",
			textDecoration: "none",
			"&:hover": {
				color: "red",
			},
		},
	},
	current: {
		fontSize: "0.8rem",
		"&:after": {
			content: "''",
		},
	},
});

function Breadcrumb({ pathname, list }) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<ul className={classes.ul}>
				{list.map((p) => {
					const current = pathname === p.url;
					return (
						<li
							key={p.name}
							className={`${classes.li} ${current && classes.current}`}
						>
							{current ? p.name : <Link to={p.url}>{p.name}</Link>}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

Breadcrumb.propTypes = {
	pathname: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
};

export default Breadcrumb;
