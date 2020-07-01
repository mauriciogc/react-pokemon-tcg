import { useEffect, useContext, useState, useCallback } from "react";
import GlobalContext from "../Providers/GlobalContext";
import { pokemonService } from "../utils/axios.pokemontcg";

const template = {
	id: "",
	title: {},
	cards: [],
	isFinal: false,
	error: false,
	page: 1,
	pageSize: 10, //max - 1000
};

const useCards = (id) => {
	const [orderCards, setOrderCards] = useState(false);
	const { dataGlobal, setData } = useContext(GlobalContext);
	let dataByType = { ...dataGlobal.cardsByType[id] };

	if (!dataByType.id) {
		dataByType = { ...template, title: dataGlobal.localTypes[id] || {}, id };
	}

	// First time
	useEffect(() => {
		if (dataByType.page === 1) setOrderCards(true);
	}, [dataByType.page]);

	useEffect(() => {
		const { id, cards, pageSize, page } = dataByType;

		const fnThen = ({ data }) => {
			setOrderCards(false);

			const newCards = data.cards.reduce((arr, data) => {
				arr[data.id] = data;
				return arr;
			}, {});

			setData({
				cardsById: { ...dataGlobal.cardsById, ...newCards },
				cardsByType: {
					...dataGlobal.cardsByType,
					[id]: {
						...dataByType,
						cards: [...cards, ...data.cards],
						isFinal: !data.cards.length,
						page: page + 1,
					},
				},
			});
		};
		const fnError = (error) => console.warn("Error", error);
		if (orderCards) {
			pokemonService
				.get("/cards", { params: { types: id, pageSize, page } })
				.then(fnThen)
				.catch(fnError);
		}
	}, [dataByType, dataGlobal, orderCards, setData]);

	//Handle nextPage
	const nextPage = useCallback(() => {
		const { isFinal, cards, page, pageSize } = dataByType;
		if (!isFinal && cards.length < page * pageSize) {
			setOrderCards(true);
		}
	}, [dataByType]);

	return { ...dataByType, nextPage };
};

export default useCards;
