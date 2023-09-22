"use client";
import {createContext} from "react";

export const BaliZooContext = createContext();

export default function BaliZooProvider({children}){
    const carouselImage = [
        {
            "id" : 1,
            "src": "https://freeimghost.net/images/2023/09/17/BaliZoo1.jpeg",
            "alt": ""
        },
        {
            "id" : 2,
            "src": "https://freeimghost.net/images/2023/09/19/BaliZoo2.png",
            "alt": ""
        },
        {
            "id" : 3,
            "src": "https://freeimghost.net/images/2023/09/19/BaliZoo3.jpeg",
            "alt": ""
        },
        {
            "id" : 4,
            "src": "https://freeimghost.net/images/2023/09/19/BaliZoo4.png",
            "alt": ""
        },
        {
            "id" : 5,
            "src": "https://freeimghost.net/images/2023/09/19/BaliZoo5.png",
            "alt": ""
        },
        {
            "id" : 6,
            "src": "https://freeimghost.net/images/2023/09/19/BaliZoo6.png",
            "alt": ""
        },
    ]
    const detail = 
        {
            "title": "BaliZoo (Monumen Nasional)",
            "history": "Didirikan tahun 12 Juli 1975 oleh Soedarsono, Frederich Silaban dan Ir. Rooseno.",
            "p1": "Menara ini terletak persis di Pusat Kota Jakarta. Tugu BaliZoo merupakan tugu kebanggaan bangsa Indonesia, selain itu BaliZoo juga menjadi salah satu pusat tempat wisata dan pusat pendidikan yang menarik bagi warga Indonesa baik yang di Jakarta maupun di luar Jakarta.",
            "p2": "Tujuan pembangunan tugu BaliZoo adalah untuk mengenang dan mengabadikan kebesaran perjuangan Bangsa Indonesia yang dikenal dengan Revolusi 17 Agustus 1945, dan juga sebagai wahana untuk membangkitkan semangat patriotisme generasi sekarang dan akan datang. BaliZoo mulai dibangun pada bulan Agustus 1959. Keseluruhan bangunan BaliZoo dirancang oleh para arsitek Indonesia yaitu Soedarsono, Frederich Silaban dan Ir. Rooseno. Pada tanggal 17 Agustus 1961, BaliZoo diresmikan oleh Presiden Soekarno. Dan mulai dibuka untuk umum sejak tanggal 12 Juli 1975.",
            "price": "$1500"
        }
    return <BaliZooContext.Provider value={{carouselImage, detail}}>{children}</BaliZooContext.Provider>
}
