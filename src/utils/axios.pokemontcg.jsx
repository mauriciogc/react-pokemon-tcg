import Axios from "axios";

const instance = Axios.create({
	baseURL: "https://api.pokemontcg.io/v1/",
});

instance.interceptors.request.use(
	(config) => ({ ...config }),
	(error) => Promise.reject(error)
);

export const pokemonService = instance;
