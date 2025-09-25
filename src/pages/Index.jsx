import Header from '../components/Header';
import Hero from '../components/Hero';
import { motion } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const images = [
    "/images/img-cuisine-1.png",
    "/images/img-cuisine-2.jpg",
];

const inclusions = [
    "Stationnement privé",
    "Piscine extérieure avec chaises longues",
    "Linge de lit et serviettes",
    "Télévision, téléphone et Wi-Fi (accès au salon)",
    "Réfrigérateur, cuisinière, lave-vaisselle, vaisselle",
    "Kit bébé: comprend un lit parapluie avec un vrai matelas et une chaise haute (Frais supplémentaire)",
    "Autres commodités en prêt à la réception: jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants."
];

const loisirs = [
    {
        img: "/images/bateau.png.webp",
        description: "Sports nautiques, plongée, voile"
    },
    {
        img: "/images/randonnee.png.webp",
        description: "Randonnées et vélo dans l'Estérel"
    },
    {
        img: "/images/casino.png.webp",
        description: "Casino et vie nocturne animée"
    },
    {
        img: "/images/village.png.webp",
        description: "Villages perchés et marchés provençaux"
    },
    {
        img: "/images/golf.png.webp",
        description: "Un paradis pour les golfeurs"
    },
    {
        img: "/images/montagne.png.webp",
        description: "Montagne et vélo de route"
    }
];

const activities = [
    {
        image: "/images/img-activity-1.jpg",
        title: "Un patrimoine culturel d’exception",
        description: "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.",
        link: "Le Festival de Cannes, Carnaval de Nice, Fête du Citron",
        url: "#",
    },
    {
        image: "/images/img-activity-2.jpg",
        title: "Le sport au rythme de la Méditerranée",
        description: "Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.",
        link: "Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez",
        url: "#",
    },
    {
        image: "/images/img-activity-3.jpg",
        title: "Une destination gourmande et authentique",
        description: "Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.",
        buttonTitle: "Consulter la liste des meilleurs restaurants",
        buttonAction: "/"
    },
    {
        image: "/images/img-activity-4.jpg",
        title: "Des expériences inoubliables en famille",
        description: "Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.",
    },
    {
        image: "/images/img-activity-5.jpg",
        title: "L’évasion en pleine nature",
        description: "Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.",
        link: "Grand Canyon du Verdon",
        url: "#",
        buttonTitle: "Consulter la liste des sentiers pédestres",
        buttonAction: "/"
    },
];

const Index = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const handleButtonClick = (url) => {
        window.location.href = url;
    };

    return (
        <div className='min-h-screen overflow-x-hidden'>
            <Header />
            <Hero />
            <section id='a-propos'>
                <div className='min-h-screen items-center justify-center w-full flex lg:flex-row flex-col overflow-x-hidden my-10 xl:space-y-0 space-y-10'>
                    <div className="relative flex flex-col space-y-20 lg:w-1/2 w-full xl:ml-35 px-10 xl:px-0 ">
                        <div className="space-y-6">
                            <div className="xl:text-5xl text-3xl">
                                <h1 className='font-normal text-nowrap'>La confort et la sérénité d'un</h1>
                                <h1 className="font-semibold">appartement privé</h1>
                            </div>
                            <div className="text-md font-light text-justify">
                                <p className=''>
                                    Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.
                                </p>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='font-semibold text-2xl'>Les inclusions :</h1>
                                <ul className='ml-2 text-md font-light space-y-2'>
                                    {inclusions.map((inclusion, index) => (
                                        <li key={index} className='flex items-start'>
                                            <div className='w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-[0.45rem]'></div>
                                            <span>{inclusion}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 w-full flex items-center justify-center">
                        <div className="relative w-full h-[500px] flex items-center justify-center">
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
                <div className='relative min-h-screen bg-white overflow-hidden'>
                    <img
                        src="/images/img-piscine-3.webp"
                        alt="img-piscine-3"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4097FF] via-[#4097FF] via-40% to-transparent"></div>
                    <div className="relative flex flex-col items-center justify-center min-h-screen text-white space-y-20 py-20">
                        <div className='relative flex flex-col items-center justify-center w-full lg:w-[60vw] px-5 space-y-3'>
                            <div className="xl:text-5xl text-3xl text-center">
                                <h1 className='font-normal'>Saint Raphaël, l’endroit parfait pour</h1>
                                <h1 className="font-semibold">vivre la Côte d’Azur</h1>
                            </div>
                            <div className="text-md font-normal text-center">
                                <p className=''>
                                    Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique pour la détente et l’aventure.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center items-start xl:px-20 px-0  gap-8'>
                            {loisirs.map((loisir, index) => (
                                <div key={index} className='flex flex-col items-center justify-center space-y-2 w-40 px-2'>
                                    <img src={loisir.img} alt={loisir.description} className='w-28 h-28 object-contain hover:scale-105 duration-300' />
                                    <p className='text-center font-semibold text-xl px-4 leading-6'>{loisir.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-md font-normal text-center w-[60vw]">
                            <p>
                                <div className="text-md font-normal text-center">
                                    <p className=''>
                                        Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur !
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='localisation'>
                <div className='relative min-h-screen bg-white overflow-hidden'>
                    <img
                        src="/images/img-map-fond.png"
                        alt="img-map-fond"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-50% to-transparent"></div>
                    <div className="relative flex xl:flex-row flex-col items-center justify-center min-h-screen text-black w-full xl:pl-35 p-10 xl:p-0 xl:space-y-0 space-y-20  ">
                        <div className="relative flex flex-col space-y-10 xl:w-[50vw] w-full">
                            <div className="space-y-6">
                                <div className="xl:text-5xl text-3xl">
                                    <h1 className="font-normal">Où se trouve Blu Azur à</h1>
                                    <h1 className="font-semibold">Saint-Raphaël ?</h1>
                                </div>
                                <div className="text-md font-semibold text-justify">
                                    <p className=''>
                                        Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l’une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d’arrêt d’autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
                                    </p>
                                </div>
                            </div>
                            <Link
                                to="#"
                                className="flex items-center justify-between px-10 bg-transparent text-lg border-1 border-[#4097FF] text-[#4097FF] rounded-full py-3 font-semibold hover:bg-[#4097FF] hover:text-white duration-300 xl:w-[25vw] w-full"
                            >
                                Comment s’y rendre ?
                                <IoIosArrowDropright className="ml-2" size={20} />
                            </Link>
                        </div>
                        <div className='flex items-center justify-center relative xl:w-[60vw] w-full'>
                            <img src="/images/img-map.webp" alt="img-map" className='object-contain w-[500px] h-[500px] relative' />
                            <img src="/images/map-marker.webp" alt="map-marker" className='absolute xl:-top-10 xl:left-20 md:left-40 lg:left-80 -top-10 left-0 w-[100px] h-[90px] ' />
                        </div>
                    </div>
                </div>
                <div className='relative min-h-screen bg-white overflow-hidden'>
                    <img
                        src="/images/img-plage.jpg"
                        alt="img-plage"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#4085D4] via-[#4085D4] via-35% to-transparent"></div>
                    <div className="relative flex xl:flex-row flex-col items-center justify-center min-h-screen text-white w-full xl:space-x-20 space-x-0 space-y-10 xl:space-y-0 xl:p-0 p-10">
                        <div className=' flex items-center justify-center relative w-full xl:w-[30vw]'>
                            <img src="/images/img-group.png" alt="img-group" className='object-contain w-[400px] h-[400px]' />
                        </div>
                        <div className="relative flex flex-col space-y-10 w-full xl:w-[45vw]">
                            <div className="space-y-6">
                                <div className="xl:text-[45px] text-3xl  xl:text-end text-center xl:-space-y-1">
                                    <h1 className="font-normal">Un point de départ idéal</h1>
                                    <h1 className="font-semibold text-nowrap"><span className='font-normal'>pour</span> découvrir la Côte d’Azur !</h1>
                                </div>
                                <div className="text-md font-semibold text-justify">
                                    <p className=''>
                                        Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id='activite'>
                <div className='relative min-h-screen bg-white overflow-hidden'>
                    <img
                        src="/images/img-arbre-rocheuse.jpg"
                        alt="img-montagne"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-70% to-transparent"></div>
                    <div className="relative">
                        <div className="w-full lg:p-20 md:p-10 p-5 space-y-3">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                {activities.slice(0, 2).map((activity, index) => (
                                    <div key={index} className="overflow-hidden shadow-lg relative rounded-4xl">
                                        <img src={activity.image} alt={activity.title} className="w-full object-cover lg:h-80 h-100" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 via-20% to-transparent"></div>
                                        <div className="absolute inset-0 flex items-end text-start p-10">
                                            <div className="text-white">
                                                <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                                                <p className="text-sm mb-4">{activity.description}</p>
                                                <div className="flex flex-col items-start gap-2">
                                                    {activity.link && (
                                                        <a
                                                            href={activity.url || "#"}
                                                            className="text-blue-400 hover:text-blue-300 text-sm no-underline"
                                                        >
                                                            <span className="text-white">À voir :</span>{" "}
                                                            <span className="underline">{activity.link}</span>
                                                        </a>
                                                    )}

                                                    {activity.buttonAction && (
                                                        <button
                                                            onClick={() => handleButtonClick(activity.buttonAction)}
                                                            className="flex items-center justify-between px-5 bg-transparent text-[10px] border-1 border-[#4097FF] text-[#4097FF] rounded-full py-2 hover:bg-[#4097FF] hover:text-white duration-300 font-light cursor-pointer"
                                                        >
                                                            {activity.buttonTitle}
                                                            <IoIosArrowDropright className="ml-2" size={15} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
                                {activities.slice(2).map((activity, index) => (
                                    <div key={index + 2} className="overflow-hidden shadow-lg relative rounded-4xl">
                                        <img src={activity.image} alt={activity.title} className="w-full object-cover h-100" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black via-20% to-transparent"></div>
                                        <div className="absolute inset-0 flex items-end text-start p-10">
                                            <div className="text-white">
                                                <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                                                <p className="text-sm mb-4">{activity.description}</p>
                                                <div className="flex flex-col items-start gap-2">
                                                    {activity.link && (
                                                        <a
                                                            href={activity.url || "#"}
                                                            className="text-blue-400 hover:text-blue-300 text-sm no-underline"
                                                        >
                                                            <span className="text-white">À voir :</span>{" "}
                                                            <span className="underline">{activity.link}</span>
                                                        </a>
                                                    )}
                                                    {activity.buttonAction && (
                                                        <button
                                                            onClick={() => handleButtonClick(activity.buttonAction)}
                                                            className="flex items-center justify-between px-5 bg-transparent text-[10px] border-1 border-[#4097FF] text-[#4097FF] rounded-full py-2 hover:bg-[#4097FF] hover:text-white duration-300 font-light cursor-pointer"
                                                        >
                                                            {activity.buttonTitle}
                                                            <IoIosArrowDropright className="ml-2" size={15} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='reservation'>
                <div className='relative min-h-screen bg-white overflow-hidden'>
                    <img
                        src="/images/image-fond-piscine.png"
                        alt="img-fond-piscine"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4085D4]/85 via-[#4085D4]/85 via-60% to-transparent"></div>
                    <div className="relative flex flex-col items-center justify-center min-h-screen text-white space-y-20 py-10">
                        <div className='relative flex flex-col items-center justify-center xl:w-[40vw] w-full px-5 space-y-7'>
                            <div className="xl:text-5xl text-3xl text-center">
                                <h1 className='font-semibold'>Réservations</h1>
                            </div>
                            <div className="text-md font-normal text-center">
                                <p className=''>
                                    <span className='font-semibold'>Offrez-vous un séjour inoubliable</span> dans l’un de nos appartements Blu Azur. Profitez d’un cadre exceptionnel, entre confort, détente et découvertes, au cœur de Saint-Raphaël.
                                </p>
                            </div>
                            <Link
                                to="#"
                                className="flex items-center justify-between px-5 bg-[#4097FF] xl:text-lg text-sm border-1 border-[#4097FF] hover:border-white text-white rounded-full py-3 font-semibold hover:bg-transparent hover:text-white duration-300"
                            >
                                Réservez dès maintenant votre séjour !
                                <IoIosArrowDropright className="ml-5" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Index;