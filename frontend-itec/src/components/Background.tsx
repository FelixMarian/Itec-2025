import React, { useEffect, useState } from "react";
import "../styles/Background.css";

interface BackgroundProps {
    country: number;
}

const countryGradients: { [key: number]: { light: string[]; dark: string[] } } = {
    11: {
        light: ["linear-gradient(to bottom, #f8e8a0, #ffb347)", "linear-gradient(to bottom, #ffd194, #ffb347)"],
        dark: ["linear-gradient(to bottom, #2c3e50, #4ca1af)", "linear-gradient(to bottom, #232526, #414345)"]
    }
};

const Background: React.FC<BackgroundProps> = ({ country }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [gradients, setGradients] = useState<string[]>(countryGradients[country]?.[theme === "dark" ? "dark" : "light"] || ["linear-gradient(to bottom, #ccc, #eee)"]);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const isDark = document.body.classList.contains("dark-theme");
            const newTheme = isDark ? "dark" : "light";
            if (theme !== newTheme) {
                setFadeOut(true);
                setTimeout(() => {
                    setTheme(newTheme);
                    setGradients(countryGradients[country]?.[newTheme] || ["linear-gradient(to bottom, #ccc, #eee)"]);
                    setFadeOut(false);
                }, 500);
            }
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, [theme, country]);

    return (
        <div className="background-sections-container">
            {gradients.map((gradient, idx) => (
                <div
                    key={`${theme}-${idx}`}
                    className={`background-section ${fadeOut ? "fade-out" : "fade-in"}`}
                    style={{ background: gradient }}
                />
            ))}
        </div>
    );
};

export default Background;
