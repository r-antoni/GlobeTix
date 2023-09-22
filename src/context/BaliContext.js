"use client";

import {createContext, useContext} from "react";

const BaliContext = createContext();

export default function BaliProvider({children}) {
  const baliTop = [
    {
      id: 1,
      title: "Bali Zoo",
      thumbnail: "https://freeimghost.net/images/2023/09/22/zoo.png",
      link: "/bali/bali-zoo",
    },
    {
      id: 2,
      title: "Danau Batur",
      thumbnail: "https://freeimghost.net/images/2023/09/22/batur.jpeg",
      link: "/bali/danau-batur",
    },
    {
      id: 3,
      title: "Bajra Sandi Monument",
      thumbnail: "https://freeimghost.net/images/2023/09/22/bajra.jpeg",
      link: "/bali/bajra-sandi",
    },
    {
      id: 4,
      title: "Pura Goa Lawah",
      thumbnail: "https://freeimghost.net/images/2023/09/22/Pura.jpeg",
      link: "/bali/goa-lawah",
    },
  ];

  const baliDisc = [
    {
      id: 1,
      title: "Bajra Sandi Monument",
      thumbnail: "https://freeimghost.net/images/2023/09/22/bajra.jpeg",
      link: "/bali/bajra-sandi",
    },
    {
      id: 2,
      title: "Pura Goa Lawah",
      thumbnail: "https://freeimghost.net/images/2023/09/22/Pura.jpeg",
      link: "/bali/goa-lawah",
    },
  ];

  const baliNew = [
    {
      id: 1,
      title: "Sanur Beach",
      thumbnail: "https://freeimghost.net/images/2023/09/22/sanur.jpeg",
      link: "/bali/sanur",
    },
    {
      id: 2,
      title: "Pandawa Beach",
      thumbnail: "https://freeimghost.net/images/2023/09/22/pandawa.jpeg",
      link: "/bali/pandawa",
    },
    {
      id: 3,
      title: "Garuda Wishnu Kencana",
      thumbnail: "https://freeimghost.net/images/2023/09/22/garuda.jpeg",
      link: "/bali/garuda",
    },
    {
      id: 4,
      title: "Sangeh Monkey Forest",
      thumbnail: "https://freeimghost.net/images/2023/09/22/monkey.jpeg",
      link: "/bali/monkey-forest",
    },
  ];
  return <BaliContext.Provider value={{baliTop, baliDisc, baliNew}}>{children}</BaliContext.Provider>;
}

export function useBaliContext() {
  return useContext(BaliContext);
}
