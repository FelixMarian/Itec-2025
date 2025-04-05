import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

import logoWhite from '../assets/logos/logotext_w.svg';
import logoBlack from '../assets/logos/logotext_b.svg';

interface NavBarProps {
    country: number;
}

//imagini light/dark pe tara
const countryImages: { [key: number]: { light: string; dark: string } } = {
    11: { light: "/src/assets/navBarImg/Europa/Spania.png", dark: "/src/assets/navBarImg/Europa/SpaniaDark.png" },
    12: { light: "/src/assets/navBarImg/Europa/Romania.png", dark: "/src/assets/navBarImg/Europa/RomaniaDark.png" },
    13: { light: "/src/assets/navBarImg/Europa/Germania.png", dark: "/src/assets/navBarImg/Europa/GermaniaDark.png" },
    14: { light: "/src/assets/navBarImg/Europa/UK.png", dark: "/src/assets/navBarImg/Europa/UKDark.png" },
    21: { light: "/src/assets/navBarImg/America/USA.png", dark: "/src/assets/navBarImg/America/USADark.png" },
    22: { light: "/src/assets/navBarImg/America/Mexic.png", dark: "/src/assets/navBarImg/America/MexicDark.png" },
    23: { light: "/src/assets/navBarImg/America/Jamaica.png", dark: "/src/assets/navBarImg/America/JamaicaDark.png" },
    24: { light: "/src/assets/navBarImg/America/Brazilia.png", dark: "/src/assets/navBarImg/America/BraziliaDark.png" },
    25: { light: "/src/assets/navBarImg/America/Argentina.png", dark: "/src/assets/navBarImg/America/ArgentinaBlack.png" },
    31: { light: "/src/assets/navBarImg/Africa/Ethiopia.png", dark: "/src/assets/navBarImg/Africa/EthiopiaDark.png" },
    32: { light: "/src/assets/navBarImg/Africa/Nigeria.png", dark: "/src/assets/navBarImg/Africa/NigeriaDark.png" },
    33: { light: "/src/assets/navBarImg/Africa/AfricaDeSud.png", dark: "/src/assets/navBarImg/Africa/AfricaDeSudDark.png" },
    34: { light: "/src/assets/navBarImg/Africa/Camerun.png", dark: "/src/assets/navBarImg/Africa/CamerunDark.png" },
    41: { light: "/src/assets/navBarImg/Asia/Korea.png", dark: "/src/assets/navBarImg/Asia/KoreaDark.png" },
    42: { light: "/src/assets/navBarImg/Asia/Japan.png", dark: "/src/assets/navBarImg/Asia/JapanDark.png" },
    43: { light: "/src/assets/navBarImg/Asia/China.png", dark: "/src/assets/navBarImg/Asia/ChinaDark.png" },
    44: { light: "/src/assets/navBarImg/Asia/Russia.png", dark: "/src/assets/navBarImg/Asia/RussiaDark.png" }
};

interface DropdownProps {
    title: string;
    items: string[];
    isOpen: boolean;
    onToggle: () => void;
    onNavigate: (region: string, country: string) => void;
}

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
    const navigate = useNavigate();

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme);
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

    const handleToggle = (title: string) => {
        setOpenDropdown(prev => (prev === title ? null : title));
    };

    const handleThemeToggle = () => {
        setIsDarkTheme(prev => !prev);
    };

    const handleNavigate = (region: string, country: string) => {
        navigate(`/${region}/${country}`);
    };

    const imageSrc = countryImages[country]
        ? isDarkTheme
            ? countryImages[country].dark
            : countryImages[country].light
        : "/images/default.png";

    const logo = isDarkTheme ? logoWhite : logoBlack;

    useEffect(() => {
        const body = document.body;
        if ([13, 42, 44].includes(country)) {
            body.classList.add("force-black-text");
        } else if (country === 43) {
            body.classList.add("force-white-text");
        } else {
            body.classList.remove("force-black-text");
            body.classList.remove("force-white-text");
        }
    }, [country]);

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
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>
                <div className="dropdowns">
                    <Dropdown title="Europa" items={["Spania", "Romania", "Germania", "UK"]} isOpen={openDropdown === "Europa"} onToggle={() => handleToggle("Europa")} onNavigate={handleNavigate} />
                    <Dropdown title="America" items={["USA", "Mexic", "Jamaica", "Brazilia", "Argentina"]} isOpen={openDropdown === "America"} onToggle={() => handleToggle("America")} onNavigate={handleNavigate} />
                    <Dropdown title="Africa" items={["Ethiopia", "Nigeria", "Africa de Sud", "Camerun"]} isOpen={openDropdown === "Africa"} onToggle={() => handleToggle("Africa")} onNavigate={handleNavigate} />
                    <Dropdown title="Asia" items={["Koreea", "Japonia", "China", "Rusia"]} isOpen={openDropdown === "Asia"} onToggle={() => handleToggle("Asia")} onNavigate={handleNavigate} />
                </div>
                <div className="dark-theme-toggle">
                    <button className="dark-btn transparent-btn" onClick={handleThemeToggle}>
                        {isDarkTheme ? "Light Theme" : "Dark Theme"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
