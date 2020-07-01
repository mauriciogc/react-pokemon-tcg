import { useEffect, useContext, useState } from "react";
import GlobalContext from "../Providers/GlobalContext";
import { pokemonService } from "../utils/axios.pokemontcg";

import fnFormatData from "../utils/cardHelper";

const useCard = (id) => {
	const [orderCard, setOrderCard] = useState(false);
	const { dataGlobal, setData } = useContext(GlobalContext);

	useEffect(() => {
		if (!dataGlobal.cardsById[id]) {
			setOrderCard(true);
		}
	}, [dataGlobal.cardsById, id]);

	useEffect(() => {
		const { cardsById } = dataGlobal;
		const fnThen = ({ data }) => {
			const { card } = data;
			setData({
				cardsById: {
					...cardsById,
					[id]: card,
				},
			});
		};

		const fnError = (error) => {
			console.warn("Error::", error);
			setData({
				cardsById: {
					...cardsById,
					[id]: "Error",
				},
			});
		};

		if (orderCard) {
			setOrderCard(false);
			pokemonService.get(`/cards/${id}`).then(fnThen).catch(fnError);
		}
	}, [dataGlobal, setData, orderCard, setOrderCard, id]);

	return { card: fnFormatData(dataGlobal.cardsById[id], dataGlobal) };
};

export default useCard;
