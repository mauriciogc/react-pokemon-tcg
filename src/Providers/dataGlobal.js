import Colorless from "../img/Colorless.svg";
import Darkness from "../img/Darkness.svg";
import Dragon from "../img/Dragon.svg";
import Fairy from "../img/Fairy.svg";
import Fighting from "../img/Fighting.svg";
import Fire from "../img/Fire.svg";
import Grass from "../img/Grass.svg";
import Lightning from "../img/Lightning.svg";
import Metal from "../img/Metal.svg";
import Psychic from "../img/Psychic.svg";
import Water from "../img/Water.svg";

let defaultGlobal = {
  localTypes: {
    Colorless: {
      bg: "#A0A29F",
      img: Colorless,
    },
    Darkness: {
      bg: "#1e3439",
      img: Darkness,
    },
    Dragon: {
      bg: "#796b44",
      img: Dragon,
    },
    Fairy: {
      bg: "#EE90E6",
      img: Fairy,
    },
    Fighting: {
      bg: "#8e431b",
      img: Fighting,
    },
    Fire: {
      bg: "#9c2221",
      img: Fire,
    },
    Grass: {
      bg: "#5FBD58",
      img: Grass,
    },
    Lightning: {
      bg: "#F2D94E",
      img: Lightning,
    },
    Metal: {
      bg: "#5b5654",
      img: Metal,
    },
    Psychic: {
      bg: "#724b8d",
      img: Psychic,
    },
    Unknown: {
      bg: "#434343",
      img: null,
    },
    Water: {
      bg: "#539DDF",
      img: Water,
    },
  },
  listTypes: [],
  cardsByType:{},
  cardsById:{},
};

export { defaultGlobal };
