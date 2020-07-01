import { useEffect, useContext, useRef } from "react";
import GlobalContext from "../Providers/GlobalContext";
import { pokemonService } from "../utils/axios.pokemontcg";

const useTypes = () => {
	//const [types, getTypes] = useState([]);
	const { dataGlobal, setData } = useContext(GlobalContext);
	const { localTypes, listType } = dataGlobal;
	const refLocalTypes = useRef(localTypes);

	useEffect(() => {
		const fnThen = ({ data }) => {
			const list = data.types.map((type) => ({
				...(refLocalTypes.current[type] || refLocalTypes.current.Unknown),
				name: type,
			}));
			//getTypes(list)
			setData({ listType: list });
		};

		const fnError = (error) => console.warn("Error", error);

		if (!listType.length) {
			pokemonService.get("/types").then(fnThen).catch(fnError);
		}
	}, [listType, setData]);

	return { types: listType };
};

export default useTypes;
