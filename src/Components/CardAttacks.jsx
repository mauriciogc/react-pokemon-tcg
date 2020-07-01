import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

import CustomContainer from "./CustomContainer";
import Icon from "./Icon";
import H2 from "./H2";
import H3 from "./H3";
import Paragraph from "./Paragraph";

const useStyles = createUseStyles({
	types: {
		textAlign: "center",
		color: "#38424d",
		fontSize: "0.8rem",
		fontWeight: 100,
	},
	damage: {
		fontWeight: 600,
	},
});

const CardAttacks = ({ data }) => {
	const classes = useStyles();
	const { title, attacks } = data;

	return (
		<CustomContainer>
			<H2 text={title} />
			{attacks.map(({ cost, name, text, damage }) => (
				<Fragment key={name}>
					<span className={classes.types}>
						{cost.map((item, index) => (
							<Icon
								bg={item.bg}
								size="small"
								name={item.name}
								img={item.img}
								key={index}
							/>
						))}
					</span>
					<H3 text={name} />
					{damage && <span className={classes.damage}>{damage}</span>}
					{<Paragraph text={text} />}
				</Fragment>
			))}
		</CustomContainer>
	);
};

CardAttacks.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		attacks: PropTypes.arrayOf(
			PropTypes.shape({
				cost: PropTypes.arrayOf(
					PropTypes.shape({
						bg: PropTypes.string,
						name: PropTypes.string,
						img: PropTypes.string,
					})
				),
				name: PropTypes.string,
				text: PropTypes.string,
				damage: PropTypes.string,
			})
		),
	}),
};

export default CardAttacks;
