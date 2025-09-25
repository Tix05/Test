import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiMenuAlt3, HiMenu } from "react-icons/hi";
import { useMenu } from '../contexts/MenuContext'

const Header = () => {
    const location = useLocation();
    const { isMenuOpen, toggleMenu } = useMenu(false);
    const [isHeaderOpen, setIsHeaderOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const toggleHeader = () => {
        setIsHeaderOpen(!isHeaderOpen);
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const shouldShowHeader = isMobile || isHeaderOpen;

    return (
        <>
            <div className="absolute top-0 right-0 z-20 p-4 lg:pr-20 hidden md:block">
                <button
                    onClick={toggleHeader}
                    className="p-2 rounded-full hover:bg-black/30 text-white backdrop-blur-sm transition-colors cursor-pointer"
                >
                    {isHeaderOpen ? (
                        <HiMenuAlt3 className="h-9 w-9" />
                    ) : (
                        <HiMenu className="h-9 w-9" />
                    )}
                </button>
            </div>
            <div className="absolute top-0 left-0 w-full z-10 ">
                <AnimatePresence>
                    {shouldShowHeader && (
                        <div className="flex h-screen">
                            <motion.div
                                className="w-16  bg-blue-transparent h-full md:flex flex-col hidden justify-end items-center"
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
                                <div className="flex flex-col items-center space-y-5 mb-20">
                                    <a href="#" className="text-white hover:text-gray-300 hover:scale-125 duration-300">
                                        <FaFacebookF size={20} />
                                    </a>
                                    <a href="#" className="text-white hover:text-gray-300 hover:scale-125 duration-300">
                                        <FaYoutube size={20} />
                                    </a>
                                    <a href="#" className="text-white hover:text-gray-300 hover:scale-125 duration-300">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href="#" className="text-white hover:text-gray-300 hover:scale-125 duration-300">
                                        <FaInstagram size={20} />
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                className="flex-1 max-w-screen-xl md:mx-5 lg:mx-20 mx-2 px-4 md:px-10 md:pr-20 flex items-center justify-between border-b-2 border-gray-300 h-20"
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-100%" }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}>
                                <img
                                    src="/images/logo.png"
                                    alt="logo"
                                    className="h-16 w-16 md:h-20 md:w-20 object-contain"
                                />
                                <button
                                    onClick={toggleMenu}
                                    className="md:hidden text-white text-2xl flex items-center cursor-pointer"
                                >
                                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                                </button>
                                <div className="hidden md:flex items-center space-x-6 h-full">
                                    {["#", "#", "#"].map((path, index) => {
                                        const labels = ["À propos", "Localisation", "Activités"];

                                        return (
                                            <Link
                                                key={path}
                                                to={path}
                                                className="group no-underline h-full flex items-center relative"
                                            >
                                                <span className="text-lg text-white font-normal transition-colors duration-200">
                                                    {labels[index]}
                                                </span>
                                                <div className="absolute -bottom-[1px] left-0 right-0 h-1 bg-white rounded-t-md transition-all duration-200 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70" />
                                            </Link>
                                        );
                                    })}
                                    <Link to="#" className="no-underline text-lg text-white font-semibold bg-[#4097FF] px-7 py-1 rounded-full cursor-pointer hover:scale-105 duration-300 hover:bg-[#4096ffb3]">
                                        Réservé
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="md:hidden fixed top-0 right-0 w-full max-w-[90vw] min-h-screen bg-blue-transparent rounded-l-xl bg-opacity-95 flex flex-col items-start justify-center px-6 space-y-4"
                            >
                                <button
                                    onClick={toggleMenu}
                                    className="absolute top-5 right-5 text-white text-2xl focus:outline-none cursor-pointer"
                                >
                                    <FaTimes />
                                </button>
                                {["/home", "/about", "/projects"].map((path, index) => {
                                    const labels = ["Accueil", "À propos", "Projets"];
                                    return (
                                        <Link
                                            key={path}
                                            to={path}
                                            onClick={toggleMenu}
                                            className="group no-underline w-full"
                                        >
                                            <div className="inline-block">
                                                <span className="sm:text-lg text-lg text-white font-semibold block py-2 relative">
                                                    {labels[index]}
                                                    {location.pathname === path && (
                                                        <motion.div
                                                            className="absolute left-0 bottom-0 h-1 bg-white rounded-t-md"
                                                            initial={{ scaleX: 0 }}
                                                            animate={{ scaleX: 1 }}
                                                            exit={{ scaleX: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                                            style={{ width: "100%" }}
                                                        />
                                                    )}
                                                </span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Header;