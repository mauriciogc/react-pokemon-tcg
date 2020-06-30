const CARD = {
	card: {
		svgImage: "https://veekun.com/dex/media/pokemon/dream-world/301.svg",
		title: "Delcatty ex #301",
		subtitle: "Pokémon - EX",
		image: "https://images.pokemontcg.io/ex14/91_hires.png",
		types: [
			{
				index: "a64d8490-2600-402b-80c6-3376fdd68c60",
				name: "Colorless",
				text: "HP 90",
				img: "/static/media/Colorless.8f2a7aaa.svg",
				bg: "#A0A29F",
				size: "small",
			},
		],
		ability: {
			title: "Constrain",
			type: "Poké-Power",
			color: "#D3425F",
			text: [
				"Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
			],
		},
		rules: {
			title: "Rules",
			text: [
				"When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.",
			],
		},
		attacks: {
			title: "Attacks",
			attacks: [
				{
					cost: [
						{
							index: "9e7a12aa-2ade-47be-84fa-ebc85e690df2",
							name: "Colorless",
							img: "/static/media/Colorless.8f2a7aaa.svg",
							bg: "#A0A29F",
							size: "small",
						},
					],
					name: "Upstream",
					text:
						"Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.",
					damage: "| 10×",
					convertedEnergyCost: 1,
				},
				{
					cost: [
						{
							index: "fe481591-0554-4f08-ae8c-959c82c37280",
							name: "Colorless",
							img: "/static/media/Colorless.8f2a7aaa.svg",
							bg: "#A0A29F",
							size: "small",
						},
						{
							index: "78679651-556c-4795-80c4-fb945ed984ba",
							name: "Colorless",
							img: "/static/media/Colorless.8f2a7aaa.svg",
							bg: "#A0A29F",
							size: "small",
						},
						{
							index: "b7a50c9a-e34f-4b56-818f-0eefd00cf4a2",
							name: "Colorless",
							img: "/static/media/Colorless.8f2a7aaa.svg",
							bg: "#A0A29F",
							size: "small",
						},
					],
					name: "Tail Slap",
					text: "",
					damage: "| 60",
					convertedEnergyCost: 3,
				},
			],
		},
		miscellaneous: [
			{
				title: "Weakness",
				boxes: [
					{
						index: "985bb163-ab3d-41c3-8e02-182c0474374c",
						name: "Fighting",
						text: "×2",
						img: "/static/media/Fighting.8ce4fa81.svg",
						bg: "#8e431b",
						size: "xsmall",
					},
				],
			},
			{
				title: "Resistance",
				boxes: [
					{
						index: "501d0a51-70d6-478e-8681-b32c3304d258",
						text: "N/A",
						img: null,
						bg: "#434343",
						size: "xsmall",
					},
				],
			},
			{
				title: "Retreat Cost",
				boxes: [
					{
						index: "0db6b74e-7609-4dc9-8b5c-03de9bedd597",
						text: "N/A",
						img: null,
						bg: "#434343",
						size: "xsmall",
					},
				],
			},
			{
				title: "Artist",
				boxes: [
					{
						index: "76ca81b6-a6d3-484b-8327-b328e55f1e7d",
						name: "",
						text: "Shizurow",
						img: null,
						bg: "#434343",
						size: "xsmall",
					},
				],
			},
			{
				title: "Rarity",
				boxes: [
					{
						index: "ca36335e-ab19-4cf7-8875-d2fe839c7cdb",
						name: "",
						text: "Rare Holo EX",
						img: null,
						bg: "#434343",
						size: "xsmall",
					},
				],
			},
			{
				title: "Set",
				boxes: [
					{
						index: "01dc03a5-c07b-49c2-81d1-804288c2153b",
						name: "",
						text: "Crystal Guardians",
						img: null,
						bg: "#434343",
						size: "xsmall",
					},
				],
			},
		],
	},
};

export default CARD;
