import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useLocation } from "react-router-dom";

import Breadcrumb from "../Components/Breadcrumb";

const useStyles = createUseStyles({
	container: {
		padding: "2rem 0",
	},
});

function Header() {
	const classes = useStyles();
	const { pathname } = useLocation();
	const [path, getPath] = useState([]);

	useEffect(() => {
		let arrPath = [
			{
				name: "Types",
				url: "/",
			},
		];
		const path = pathname;
		const s = path.split("/");

		for (let i = 1; i < s.length; i++) {
			arrPath.push({
				name: s[i],
				url: path.substring(0, `${path.indexOf(`/${s[i]}`)}${s[i].length + 1}`),
			});
		}

		getPath(arrPath);
	}, [pathname]);

	return (
		<div className={classes.container}>
			<Breadcrumb list={path} pathname={pathname} />
		</div>
	);
}

export default Header;
