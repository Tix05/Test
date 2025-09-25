import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMenu } from "../contexts/MenuContext";
import { IoIosArrowDropright } from "react-icons/io";

const images = [
    "/images/img-piscine-1.png",
    "/images/img-piscine-2.jpg",
];

const Hero = () => {
    const { isMenuOpen } = useMenu();
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            <img
                src="/images/img-landing-page-1.jpg"
                alt="img-landing-page-1"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

            <div className="relative flex items-center justify-center min-h-screen text-white px-4 pt-20">
                <div className={`relative flex flex-col space-y-20 w-1/2 mx-35 ${isMenuOpen ? "z-0" : "z-30"}`}>
                    <div className="space-y-6">
                        <div className="text-5xl">
                            <h1 className="font-semibold">Votre évasion</h1>
                            <h1 className="font-normal">sur la Côte d'Azur !</h1>
                        </div>
                        <div className="text-md font-light text-justify">
                            <p className="">
                                Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d’exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d’un séjour alliant confort, sérénité et élégance au cœur de la Riviera française !
                            </p>
                        </div>
                    </div>
                    <Link
                        to="#"
                        className="flex items-center justify-between px-10 bg-transparent text-lg border-1 border-white text-white rounded-full py-3 font-semibold hover:bg-white hover:text-gray-800 duration-300"
                    >
                        Réservez dès maintenant votre séjour !
                        <IoIosArrowDropright className="ml-2" size={20} />
                    </Link>
                </div>

                <div className="w-1/2 flex items-center justify-center relative">
                    <div className="relative w-full h-[250px] flex items-center justify-center">
                        {images.map((img, i) => {
                            let offset = (i - index) % images.length;
                            if (offset < 0) offset += images.length;

                            return (
                                <motion.img
                                    key={i}
                                    src={img}
                                    alt={`slide-${i}`}
                                    className="absolute rounded-xl shadow-lg object-cover"
                                    style={{
                                        width: offset === 0 ? "400px" : "250px",
                                        height: "100%",
                                        filter: offset === 0 ? "none" : "brightness(0.6)"
                                    }}
                                    animate={{
                                        x: offset === 0 ? 0 : 300,
                                        scale: offset === 0 ? 1 : 0.7,
                                        opacity: offset === 0 ? 1 : 0.9,
                                        rotateY: offset === 0 ? 0 : -25,
                                        zIndex: offset === 0 ? 5 : 2,
                                    }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={nextImage}
                        className="z-40 absolute right-1 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full cursor-pointer"
                    >
                        <IoIosArrowDropright size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
