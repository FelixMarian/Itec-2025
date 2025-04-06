import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

//Logo-uri
import logoWhite from '../assets/logos/logotext_w.svg';
import logoBlack from '../assets/logos/logotext_b.svg';

import SpL from "/src/assets/navBarImg/Europa/Spania.png";
import SpD from "/src/assets/navBarImg/Europa/SpaniaDark.png" ;
import RoL from "/src/assets/navBarImg/Europa/Romania.png";
import RoD from "/src/assets/navBarImg/Europa/RomaniaDark.png";
import GeL from "/src/assets/navBarImg/Europa/Germania.png";
import GeD from "/src/assets/navBarImg/Europa/GermaniaDark.png";
import UKL from "/src/assets/navBarImg/Europa/UK.png";
import UKD from "/src/assets/navBarImg/Europa/UKDark.png";
import EtL from "/src/assets/navBarImg/Africa/Ethiopia.png";
import EtD from "/src/assets/navBarImg/Africa/EthiopiaDark.png";
import NiL from "/src/assets/navBarImg/Africa/Nigeria.png";
import NiD from "/src/assets/navBarImg/Africa/NigeriaDark.png";
import AfL from "/src/assets/navBarImg/Africa/AfricaDeSud.png";
import AfD from "/src/assets/navBarImg/Africa/AfricaDeSudDark.png";
import CaL from "/src/assets/navBarImg/Africa/Camerun.png";
import CaD from "/src/assets/navBarImg/Africa/CamerunDark.png";

//Interfete
interface NavBarProps {
    country: number;
}
interface DropdownProps {
    title: string;
    items: string[];
    isOpen: boolean;
    onToggle: () => void;
    onNavigate: (region: string, country: string) => void;
}

//imagini light/dark pe tara
const countryImages: { [key: number]: { light: string; dark: string } } = {
    11: { light: SpL, dark: SpD },
    12: { light: RoL, dark: RoD },
    13: { light: GeL, dark: GeD },
    14: { light: UKL, dark: UKD },
    31: { light: EtL, dark: EtD},
    32: { light: NiL, dark: NiD },
    33: { light: AfL, dark: AfD },
    34: { light: CaL, dark: CaD  },
};


//Sub-componenta dropdown
const Dropdown: React.FC<DropdownProps> = ({ title, items, isOpen, onToggle, onNavigate }) => {
    const region = title.toLowerCase();

    return (
        <div className="custom-dropdown">
            <button className="dropdown-toggle transparent-btn" onClick={onToggle}>
                {title}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => onNavigate(region, normalizeString(item))}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const normalizeString = (str: string) => {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "");
};

const NavBar: React.FC<NavBarProps> = ({ country }) => {

    //useStates
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [fontSize, setFontSize] = useState("normal");
    const [cursorType] = useState("default");
    const [logo, setLogo] = useState(logoBlack);
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    //useEffects
    useEffect(() => {
        //13-germania | 33 - Africa de sud
        if (isDarkTheme && country === 13) setLogo(logoBlack);
        else if (country === 33) {
            const body = document.body;
            body.classList.add("force-white-text");
            setLogo(logoWhite)
        } else  setLogo(isDarkTheme ? logoWhite : logoBlack);

        document.body.classList.toggle("dark-theme", isDarkTheme);
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme, country]);
    useEffect(() => {
        document.body.style.fontSize = fontSize === "large" ? "18px" : "14px";  // Schimbă fontul
        document.body.style.cursor = cursorType === "pointer" ? "pointer" : "default";  // Schimbă cursorul
    }, [fontSize, cursorType]);

    //handle-uri
    const handleToggle = (title: string) => { setOpenDropdown(prev => (prev === title ? null : title)); };
    const handleThemeToggle = () => { setIsDarkTheme(prev => !prev); };
    const handleNavigate = (region: string, country: string) => { navigate(`/${region}/${country}`); };
    const handleFontSizeChange = (size: string) => { setFontSize(size); };
    const handleLogoClick = () => { navigate("/"); };
    const imageSrc = countryImages[country]
        ? isDarkTheme
            ? countryImages[country].dark
            : countryImages[country].light
        : "../../assets/error.png";

    return (
        <div
            className="navbar"
            style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.5s ease-in-out"
            }}
        >
            <div className="navbar-content">
                <div className="logo" onClick={handleLogoClick}>
                    <img src={logo} alt="Logo" className="logo-img"/>
                </div>
                <div className="dropdowns">
                    <Dropdown title="Europa" items={["Spania", "Romania", "Germania", "UK"]}
                              isOpen={openDropdown === "Europa"} onToggle={() => handleToggle("Europa")}
                              onNavigate={handleNavigate}/>
                    <Dropdown title="Africa" items={["Ethiopia", "Nigeria", "Africa de Sud", "Camerun"]}
                              isOpen={openDropdown === "Africa"} onToggle={() => handleToggle("Africa")}
                              onNavigate={handleNavigate}/>
                </div>
                <div className="navButtons">
                    <div className="dark-theme-toggle">
                        <label className={`theme-switch ${isDarkTheme ? "dark" : "light"}`}>
                            <input type="checkbox" checked={isDarkTheme} onChange={handleThemeToggle}/>
                            <span className="slider">
                            <span className="icon">{isDarkTheme ? "🌙" : "☀️"}</span>
                        </span>
                        </label>
                    </div>
                    <div className="accessibility-toggle">
                        <button onClick={() => handleFontSizeChange(fontSize === "normal" ? "large" : "normal")}>
                            {fontSize === "normal" ? "Mărește font" : "Resetează font"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
