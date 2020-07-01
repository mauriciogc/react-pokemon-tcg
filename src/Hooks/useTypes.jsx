import { useEffect, useContext, useRef } from "react";
import GlobalContext from "../Providers/GlobalContext";
import { pokemonService } from "../utils/axios.pokemontcg";

const useTypes = () => {
	//const [types, getTypes] = useState([]);
	const { dataGlobal, setData } = useContext(GlobalContext);
	const { localTypes, listTypes } = dataGlobal;
	const refLocalTypes = useRef(localTypes);

	useEffect(() => {
		const fnThen = ({ data }) => {
			const list = data.types.map((type) => ({
				...(refLocalTypes.current[type] || refLocalTypes.current.Unknown),
				name: type,
			}));
			//getTypes(list)
			setData({ listTypes: list });
		};

		const fnError = (error) => console.warn("Error", error);

		if (!listTypes.length) {
			pokemonService.get("/types").then(fnThen).catch(fnError);
		}
	}, [listTypes, setData]);

	return { types: listTypes };
};

export default useTypes;
