import React, { useEffect, useState } from "react";
import "../styles/Background.css";

interface BackgroundProps {
    country: number;
}

const countryGradients: { [key: number]: { light: string[]; dark: string[] } } = {
    11: {
        light: [" radial-gradient(circle at 10% 20%, #fff3e0, #fdc78a, #ff923f)", " linear-gradient(180deg, #ffffff, #fda8ba, #ec407a)"],
        dark: ["linear-gradient(to bottom, #2c3e50, #4ca1af)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    12: {
        light: ["linear-gradient(to bottom, #f9f9f9, #e0e0e0)", "linear-gradient(to bottom, #dbe6f6, #c5796d)"],
        dark: ["linear-gradient(to bottom, #434343, #000000)", "linear-gradient(to bottom, #141e30, #243b55)"]
    },
    13: {
        light: ["linear-gradient(to bottom, #f0f2f0, #000c40)", "linear-gradient(to bottom, #f9f9f9, #ddd)"],
        dark: ["linear-gradient(to bottom, #0f2027, #203a43, #2c5364)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    14: {
        light: ["linear-gradient(to bottom, #dce35b, #45b649)", "linear-gradient(to bottom, #e0eafc, #cfdef3)"],
        dark: ["linear-gradient(to bottom, #3a1c71, #d76d77, #ffaf7b)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    21: {
        light: ["linear-gradient(to bottom, #ffe259, #ffa751)", "linear-gradient(to bottom, #f7e2a0, #f7c59f)"],
        dark: ["linear-gradient(to bottom, #373b44, #4286f4)", "linear-gradient(to bottom, #141e30, #243b55)"]
    },
    22: {
        light: ["linear-gradient(to bottom, #f9d423, #ff4e50)", "linear-gradient(to bottom, #fbd3e9, #bb377d)"],
        dark: ["linear-gradient(to bottom, #1e3c72, #2a5298)", "linear-gradient(to bottom, #000428, #004e92)"]
    },
    23: {
        light: ["linear-gradient(to bottom, #f4e2d8, #ba5370)", "linear-gradient(to bottom, #ffecd2, #fcb69f)"],
        dark: ["linear-gradient(to bottom, #200122, #6f0000)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    24: {
        light: ["linear-gradient(to bottom, #fbc2eb, #a6c1ee)", "linear-gradient(to bottom, #ffe259, #ffa751)"],
        dark: ["linear-gradient(to bottom, #2c3e50, #4ca1af)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    25: {
        light: ["linear-gradient(to bottom, #d3cce3, #e9e4f0)", "linear-gradient(to bottom, #fdfcfb, #e2d1c3)"],
        dark: ["linear-gradient(to bottom, #000046, #1cb5e0)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    31: {
        light: ["linear-gradient(to bottom, #a1c4fd, #c2e9fb)", "linear-gradient(to bottom, #fdfcfb, #e2d1c3)"],
        dark: ["linear-gradient(to bottom, #1f1c2c, #928dab)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    32: {
        light: ["linear-gradient(to bottom, #d4fc79, #96e6a1)", "linear-gradient(to bottom, #e0c3fc, #8ec5fc)"],
        dark: ["linear-gradient(to bottom, #42275a, #734b6d)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    33: {
        light: ["linear-gradient(to bottom, #fbc2eb, #a6c1ee)", "linear-gradient(to bottom, #ffecd2, #fcb69f)"],
        dark: ["linear-gradient(to bottom, #0f2027, #203a43, #2c5364)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    34: {
        light: ["linear-gradient(to bottom, #fdfcfb, #e2d1c3)", "linear-gradient(to bottom, #e0eafc, #cfdef3)"],
        dark: ["linear-gradient(to bottom, #1c92d2, #f2fcfe)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    41: {
        light: ["linear-gradient(to bottom, #d3cce3, #e9e4f0)", "linear-gradient(to bottom, #e0eafc, #cfdef3)"],
        dark: ["linear-gradient(to bottom, #200122, #6f0000)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    42: {
        light: ["linear-gradient(to bottom, #e0c3fc, #8ec5fc)", "linear-gradient(to bottom, #fdfcfb, #e2d1c3)"],
        dark: ["linear-gradient(to bottom, #373b44, #4286f4)", "linear-gradient(to bottom, #232526, #414345)"]
    },
    43: {
        light: ["linear-gradient(to bottom, #ffe259, #ffa751)", "linear-gradient(to bottom, #f7e2a0, #f7c59f)"],
        dark: ["linear-gradient(to bottom, #141e30, #243b55)", "linear-gradient(to bottom, #000428, #004e92)"]
    },
    44: {
        light: ["linear-gradient(to bottom, #fbc2eb, #a6c1ee)", "linear-gradient(to bottom, #ffecd2, #fcb69f)"],
        dark: ["linear-gradient(to bottom, #0f2027, #203a43, #2c5364)", "linear-gradient(to bottom, #232526, #414345)"]
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
