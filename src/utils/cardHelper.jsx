import { v4 as uuidv4 } from "uuid";

const powers = {
	"Poké-Body": "#5FBD58",
	"Poké-Power": "#D3425F",
	"Pokémon Power": "#FA8581",
	Ability: "#CC0000",
};

const fnFormatData = (card, dataGlobal) => {
	if (!card) return;
	if (typeof card === "string") return card;

	const { localTypes } = dataGlobal;
	const {
		hp,
		name,
		nationalPokedexNumber: pokedex,
		types,
		subtype,
		supertype,
		ability,
		text: rules,
		attacks,
		weaknesses,
		resistances,
		retreatCost,
		artist,
		rarity,
		set,
		imageUrlHiRes: image,
	} = card;

	let newCard = {
		svgImage: `https://veekun.com/dex/media/pokemon/dream-world/${pokedex}.svg`,
		title: `${name} #${pokedex}`,
		subtitle: `${supertype} - ${subtype}`,
		image,
		types: fnTypes(types, hp, localTypes),
		ability: fnAbility(ability, powers),
		rules: fnRules(rules),
		attacks: fnAttacks(attacks, localTypes),
		miscellaneous: fnMiscellaneous({
			localTypes,
			weaknesses,
			resistances,
			retreatCost,
			artist,
			rarity,
			set,
		}),
	};

	return newCard;
};

//TYPES
const fnTypes = (data = [], hp, localTypes) =>
	data.map((name) => {
		const { bg, img } = localTypes[name] || localTypes.Unknown;
		return {
			index: uuidv4(),
			name,
			text: `HP ${hp || "Unknown"}`,
			img,
			bg,
			size: "small",
		};
	});

//ABILITY
const fnAbility = (data = null, powers) =>
	data
		? {
				title: data.name,
				type: data.type,
				color: powers[data.type],
				text: [data.text],
		  }
		: null;

//RULES
const fnRules = (data = null) =>
	data
		? {
				title: "Rules",
				text: data,
		  }
		: null;

//ATTACKS
const fnAttacks = (data = null, localTypes) => {
	let newData = null;
	if (data) {
		const dataAttacks = data.map((attack) => {
			const { cost, damage } = attack;
			const dataCost = cost.map((name) => {
				const { bg, img } = localTypes[name] || localTypes.Unknown;
				return { index: uuidv4(), name, img, bg, size: "small" };
			});

			return {
				...attack,
				cost: [...dataCost],
				damage: damage && `| ${damage}`,
			};
		});

		newData = {
			title: "Attacks",
			attacks: dataAttacks,
		};
	}

	return newData;
};

//OTHERS
const fnMiscellaneous = (data) => {
	const {
		localTypes,
		weaknesses,
		resistances,
		retreatCost,
		artist,
		rarity,
		set,
	} = data;

	const others = [
		{ title: "Weakness", data: fnMergeData(weaknesses) },
		{ title: "Resistance", data: fnMergeData(resistances) },
		{ title: "Retreat Cost", data: fnRetreatCost(retreatCost) },
		{ title: "Artist", data: fnMergeData(artist) },
		{ title: "Rarity", data: fnMergeData(rarity) },
		{ title: "Set", data: fnMergeData(set) },
	];

	return fnFormatBoxes(others, localTypes);
};

const fnMergeData = (data) => {
	if (typeof data === "string") {
		return [{ value: data || "N/A" }];
	}

	return data || [{ value: "N/A" }];
};

const fnRetreatCost = (data) => {
	let newData = fnMergeData(data);
	if (data) newData = data.map((type) => ({ type }));
	return newData;
};

const fnFormatBoxes = (data, localTypes) => {
	return data.map(({ title, data }) => {
		const boxes = data.map(({ type: name, value: text }) => {
			const { bg, img } = localTypes[name] || localTypes.Unknown;
			return { index: uuidv4(), name, text, img, bg, size: "xsmall" };
		});

		return { title, boxes };
	});
};

export default fnFormatData;
