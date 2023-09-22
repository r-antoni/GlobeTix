"use client";

import {createContext, useContext} from "react";

const JavaContext = createContext();

export default function JavaProvider({children}) {
  const javaTop = [
    {
      id: 1,
      title: "Monas - Jakarta",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Monas1.jpeg",
      link: "/java/monas",
    },
    {
      id: 2,
      title: "Taman Safari - Jakarta",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Tamansafari1.jpeg",
      link: "/java/taman-safari",
    },
    {
      id: 3,
      title: "Bromo - DIY Yogyakarta",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Bromo1.jpeg",
      link: "/java/bromo",
    },
    {
      id: 4,
      title: "Borobudur - DIY Yogyakarta",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Borobudur1.jpeg",
      link: "/java/candi-borobudur",
    },
  ];

  const javaDisc = [
    {
      id: 1,
      title: "Taman Safari - Jakarta",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Tamansafari1.jpeg",
      link: "/java/taman-safari",
    },
    {
      id: 2,
      title: "Bromo - DIY Yogyakarta",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Bromo1.jpeg",
      link: "/java/bromo",
    },
    {
      id: 3,
      title: "Borobudur - DIY Yogyakarta",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Borobudur1.jpeg",
      link: "/java/candi-borobudur",
    },
  ];

  const javaNew = [
    {
      id: 1,
      title: "Ciater - Bandung",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Ciater1.jpeg",
      link: "/java/ciater",
    },
    {
      id: 2,
      title: "Tangkuban Perahu - Bandung",
      thumbnail: "https://freeimghost.net/images/2023/09/17/TangkubanPerahu1.jpeg",
      link: "/java/tangkuban-perahu",
    },
    {
      id: 3,
      title: "Ragunan - Jakarta",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Ragunan1.jpeg",
      link: "/java/ragunan",
    },
    {
      id: 4,
      title: "Kawah Putih - Bandung",
      thumbnail: "https://freeimghost.net/images/2023/09/17/Kawahputih1.jpeg",
      link: "/java/kawah-putih",
    },
  ];
  return <JavaContext.Provider value={{javaTop, javaDisc, javaNew}}>{children}</JavaContext.Provider>;
}

export function useJavaContext() {
  return useContext(JavaContext);
}
