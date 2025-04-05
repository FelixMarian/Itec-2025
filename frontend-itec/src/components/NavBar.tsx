import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

import logoWhite from '../assets/logos/logotext_w.svg';
import logoBlack from '../assets/logos/logotext_b.svg';

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

// imagini light/dark pe tara
const countryImages: { [key: number]: { light: string; dark: string } } = {
    11: { light: "/src/assets/navBarImg/Europa/Spania.png", dark: "/src/assets/navBarImg/Europa/SpaniaDark.png" },
    12: { light: "/src/assets/navBarImg/Europa/Romania.png", dark: "/src/assets/navBarImg/Europa/RomaniaDark.png" },
    13: { light: "/src/assets/navBarImg/Europa/Germania.png", dark: "/src/assets/navBarImg/Europa/GermaniaDark.png" },
    14: { light: "/src/assets/navBarImg/Europa/UK.png", dark: "/src/assets/navBarImg/Europa/UKDark.png" },
    31: { light: "/src/assets/navBarImg/Africa/Ethiopia.png", dark: "/src/assets/navBarImg/Africa/EthiopiaDark.png" },
    32: { light: "/src/assets/navBarImg/Africa/Nigeria.png", dark: "/src/assets/navBarImg/Africa/NigeriaDark.png" },
    33: { light: "/src/assets/navBarImg/Africa/AfricaDeSud.png", dark: "/src/assets/navBarImg/Africa/AfricaDeSudDark.png" },
    34: { light: "/src/assets/navBarImg/Africa/Camerun.png", dark: "/src/assets/navBarImg/Africa/CamerunDark.png" },
};

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

    const [fontSize, setFontSize] = useState("normal");  // Stare pentru dimensiunea fontului
    const [cursorType] = useState("default");  // Stare pentru cursor

    const [logo, setLogo] = useState(logoBlack);  // Starea logo-ului

    useEffect(() => {
        // Verificăm dacă tema este dark și țara este Germania
        if (isDarkTheme && country === 13) {
            setLogo(logoBlack);  // Forțăm logo-ul negru pentru Germania în tema dark
        } else if (country === 33) {
            const body = document.body;
            body.classList.add("force-white-text");
            setLogo(logoWhite)
        }
        else {
            setLogo(isDarkTheme ? logoWhite : logoBlack);  // Schimbăm logo-ul în funcție de tema curentă
        }

        document.body.classList.toggle("dark-theme", isDarkTheme);
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme, country]);

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

    const handleFontSizeChange = (size: string) => {
        setFontSize(size);
    };

    useEffect(() => {
        document.body.style.fontSize = fontSize === "large" ? "18px" : "14px";  // Schimbă fontul
        document.body.style.cursor = cursorType === "pointer" ? "pointer" : "default";  // Schimbă cursorul
    }, [fontSize, cursorType]);

    // Adăugăm funcția pentru navigarea la pagina principală
    const handleLogoClick = () => {
        navigate("/");  // Navigare către pagina principală
    };

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
                <div className="logo" onClick={handleLogoClick}>  {/* Modificat aici */}
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
                <div className="dark-theme-toggle">
                    <label className={`theme-switch ${isDarkTheme ? "dark" : "light"}`}>
                        <input type="checkbox" checked={isDarkTheme} onChange={handleThemeToggle}/>
                        <span className="slider">
                            <span className="icon">{isDarkTheme ? "🌙" : "☀️"}</span>
                        </span>
                    </label>
                </div>

                {/* Buton de accesibilitate */}
                <div className="accessibility-toggle">
                    <button onClick={() => handleFontSizeChange(fontSize === "normal" ? "large" : "normal")}>
                        {fontSize === "normal" ? "Mărește font" : "Resetează font"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
