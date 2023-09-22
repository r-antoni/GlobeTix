"use client";
import {createContext} from "react";

export const MonasContext = createContext();

export default function MonasProvider({children}){
    const carouselImage = [
        {
            "id" : 1,
            "src": "https://freeimghost.net/images/2023/09/17/Monas1.jpeg",
            "alt": ""
        },
        {
            "id" : 2,
            "src": "https://freeimghost.net/images/2023/09/19/Monas2.png",
            "alt": ""
        },
        {
            "id" : 3,
            "src": "https://freeimghost.net/images/2023/09/19/Monas3.jpeg",
            "alt": ""
        },
        {
            "id" : 4,
            "src": "https://freeimghost.net/images/2023/09/19/Monas4.png",
            "alt": ""
        },
        {
            "id" : 5,
            "src": "https://freeimghost.net/images/2023/09/19/Monas5.png",
            "alt": ""
        },
        {
            "id" : 6,
            "src": "https://freeimghost.net/images/2023/09/19/Monas6.png",
            "alt": ""
        },
    ]
    const detail = 
        {
            "title": "Monas (Monumen Nasional)",
            "history": "Didirikan tahun 12 Juli 1975 oleh Soedarsono, Frederich Silaban dan Ir. Rooseno.",
            "p1": "Menara ini terletak persis di Pusat Kota Jakarta. Tugu Monas merupakan tugu kebanggaan bangsa Indonesia, selain itu monas juga menjadi salah satu pusat tempat wisata dan pusat pendidikan yang menarik bagi warga Indonesa baik yang di Jakarta maupun di luar Jakarta.",
            "p2": "Tujuan pembangunan tugu monas adalah untuk mengenang dan mengabadikan kebesaran perjuangan Bangsa Indonesia yang dikenal dengan Revolusi 17 Agustus 1945, dan juga sebagai wahana untuk membangkitkan semangat patriotisme generasi sekarang dan akan datang. Monas mulai dibangun pada bulan Agustus 1959. Keseluruhan bangunan Monas dirancang oleh para arsitek Indonesia yaitu Soedarsono, Frederich Silaban dan Ir. Rooseno. Pada tanggal 17 Agustus 1961, Monas diresmikan oleh Presiden Soekarno. Dan mulai dibuka untuk umum sejak tanggal 12 Juli 1975.",
            "price": "$1500"
        }
    return <MonasContext.Provider value={{carouselImage, detail}}>{children}</MonasContext.Provider>
}
