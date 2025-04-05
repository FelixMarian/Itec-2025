import React, { useEffect, useState } from "react";
import "../styles/Background.css";
import Card from "./Card.tsx";
import SpainP2I1 from "../assets/images/spain_product2_image1.jpg";

interface BackgroundProps {
    country: number;
}

interface CountryProducts {
    [key: number]: {
        [key: string]: Array<{
            name: string;
            price: number;
            image1: string;
            image2: string;
        }>;
    };
}
const countryProducts: CountryProducts = {
    11: { // Spania
        Flamenco: [
            {
                name: "Hanorac Flamenco",
                price: 120,
                image1: "./images/spain_product1_image1.jpg",
                image2: "./images/spain_product1_image2.jpg"
            },
            {
                name: "Cămașă Flamenco",
                price: 100,
                image1: SpainP2I1,
                image2: "./images/spain_product2_image2.jpg"
            },
            {
                name: "Jeans Flamenco",
                price: 150,
                image1: "./images/spain_product3_image1.jpg",
                image2: "./images/spain_product3_image2.jpg"
            }
        ],
        Pop: [
            {
                name: "T-shirt Pop",
                price: 90,
                image1: "./images/spain_product4_image1.jpg",
                image2: "./images/spain_product4_image2.jpg"
            },
            {
                name: "Hanorac Pop",
                price: 130,
                image1: "./images/spain_product5_image1.jpg",
                image2: "./images/spain_product5_image2.jpg"
            },
            {
                name: "Pantaloni Pop",
                price: 140,
                image1: "./images/spain_product6_image1.jpg",
                image2: "./images/spain_product6_image2.jpg"
            }
        ]
    },
    12: { // Romania
        Jazz: [
            {
                name: "Hanorac Jazz",
                price: 130,
                image1: "./images/romania_product1_image1.jpg",
                image2: "./images/romania_product1_image2.jpg"
            },
            {
                name: "T-shirt Jazz",
                price: 80,
                image1: "./images/romania_product2_image1.jpg",
                image2: "./images/romania_product2_image2.jpg"
            },
            {
                name: "Jeans Jazz",
                price: 150,
                image1: "./images/romania_product3_image1.jpg",
                image2: "./images/romania_product3_image2.jpg"
            }
        ],
        Classical: [
            {
                name: "Sacou Clasic",
                price: 150,
                image1: "./images/romania_product4_image1.jpg",
                image2: "./images/romania_product4_image2.jpg"
            },
            {
                name: "T-shirt Clasic",
                price: 90,
                image1: "./images/romania_product5_image1.jpg",
                image2: "./images/romania_product5_image2.jpg"
            },
            {
                name: "Jeans Clasic",
                price: 120,
                image1: "./images/romania_product6_image1.jpg",
                image2: "./images/romania_product6_image2.jpg"
            }
        ]
    },
    13: { // Germania
        Rock: [
            {
                name: "Hanorac Rock",
                price: 140,
                image1: "./images/germany_product1_image1.jpg",
                image2: "./images/germany_product1_image2.jpg"
            },
            {
                name: "T-shirt Rock",
                price: 100,
                image1: "./images/germany_product2_image1.jpg",
                image2: "./images/germany_product2_image2.jpg"
            },
            {
                name: "Jeans Rock",
                price: 160,
                image1: "./images/germany_product3_image1.jpg",
                image2: "./images/germany_product3_image2.jpg"
            }
        ],
        Electronic: [
            {
                name: "Cămașă Electronic",
                price: 120,
                image1: "./images/germany_product4_image1.jpg",
                image2: "./images/germany_product4_image2.jpg"
            },
            {
                name: "T-shirt Electronic",
                price: 100,
                image1: "./images/germany_product5_image1.jpg",
                image2: "./images/germany_product5_image2.jpg"
            },
            {
                name: "Jeans Electronic",
                price: 140,
                image1: "./images/germany_product6_image1.jpg",
                image2: "./images/germany_product6_image2.jpg"
            }
        ]
    },
    14: { // UK
        Hip_Hop: [
            {
                name: "Hanorac Hip-Hop",
                price: 130,
                image1: "./images/uk_product1_image1.jpg",
                image2: "./images/uk_product1_image2.jpg"
            },
            {
                name: "T-shirt Hip-Hop",
                price: 90,
                image1: "./images/uk_product2_image1.jpg",
                image2: "./images/uk_product2_image2.jpg"
            },
            {
                name: "Jeans Hip-Hop",
                price: 140,
                image1: "./images/uk_product3_image1.jpg",
                image2: "./images/uk_product3_image2.jpg"
            }
        ],
        Indie: [
            {
                name: "Cămașă Indie",
                price: 110,
                image1: "./images/uk_product4_image1.jpg",
                image2: "./images/uk_product4_image2.jpg"
            },
            {
                name: "T-shirt Indie",
                price: 90,
                image1: "./images/uk_product5_image1.jpg",
                image2: "./images/uk_product5_image2.jpg"
            },
            {
                name: "Jeans Indie",
                price: 120,
                image1: "./images/uk_product6_image1.jpg",
                image2: "./images/uk_product6_image2.jpg"
            }
        ]
    },
    31: { // Etiopia
        Afrobeat: [
            {
                name: "Hanorac Afrobeat",
                price: 120,
                image1: "./images/ethiopia_product1_image1.jpg",
                image2: "./images/ethiopia_product1_image2.jpg"
            },
            {
                name: "T-shirt Afrobeat",
                price: 100,
                image1: "./images/ethiopia_product2_image1.jpg",
                image2: "./images/ethiopia_product2_image2.jpg"
            },
            {
                name: "Jeans Afrobeat",
                price: 140,
                image1: "./images/ethiopia_product3_image1.jpg",
                image2: "./images/ethiopia_product3_image2.jpg"
            }
        ],
        Highlife: [
            {
                name: "Cămașă Highlife",
                price: 110,
                image1: "./images/ethiopia_product4_image1.jpg",
                image2: "./images/ethiopia_product4_image2.jpg"
            },
            {
                name: "T-shirt Highlife",
                price: 95,
                image1: "./images/ethiopia_product5_image1.jpg",
                image2: "./images/ethiopia_product5_image2.jpg"
            },
            {
                name: "Jeans Highlife",
                price: 130,
                image1: "./images/ethiopia_product6_image1.jpg",
                image2: "./images/ethiopia_product6_image2.jpg"
            }
        ]
    },
    32: { // Nigeria
        Gospel: [
            {
                name: "Hanorac Gospel",
                price: 125,
                image1: "./images/nigeria_product1_image1.jpg",
                image2: "./images/nigeria_product1_image2.jpg"
            },
            {
                name: "T-shirt Gospel",
                price: 100,
                image1: "./images/nigeria_product2_image1.jpg",
                image2: "./images/nigeria_product2_image2.jpg"
            },
            {
                name: "Jeans Gospel",
                price: 150,
                image1: "./images/nigeria_product3_image1.jpg",
                image2: "./images/nigeria_product3_image2.jpg"
            }
        ],
        Soul: [
            {
                name: "Cămașă Soul",
                price: 120,
                image1: "./images/nigeria_product4_image1.jpg",
                image2: "./images/nigeria_product4_image2.jpg"
            },
            {
                name: "T-shirt Soul",
                price: 95,
                image1: "./images/nigeria_product5_image1.jpg",
                image2: "./images/nigeria_product5_image2.jpg"
            },
            {
                name: "Jeans Soul",
                price: 130,
                image1: "./images/nigeria_product6_image1.jpg",
                image2: "./images/nigeria_product6_image2.jpg"
            }
        ]
    },
    33: { // Africa de Sud
        Kwaito: [
            {
                name: "Hanorac Kwaito",
                price: 130,
                image1: "./images/southafrica_product1_image1.jpg",
                image2: "./images/southafrica_product1_image2.jpg"
            },
            {
                name: "T-shirt Kwaito",
                price: 95,
                image1: "./images/southafrica_product2_image1.jpg",
                image2: "./images/southafrica_product2_image2.jpg"
            },
            {
                name: "Jeans Kwaito",
                price: 140,
                image1: "./images/southafrica_product3_image1.jpg",
                image2: "./images/southafrica_product3_image2.jpg"
            }
        ],
        Jazz: [
            {
                name: "Cămașă Jazz",
                price: 100,
                image1: "./images/southafrica_product4_image1.jpg",
                image2: "./images/southafrica_product4_image2.jpg"
            },
            {
                name: "T-shirt Jazz",
                price: 90,
                image1: "./images/southafrica_product5_image1.jpg",
                image2: "./images/southafrica_product5_image2.jpg"
            },
            {
                name: "Jeans Jazz",
                price: 130,
                image1: "./images/southafrica_product6_image1.jpg",
                image2: "./images/southafrica_product6_image2.jpg"
            }
        ]
    },
    34: { // Camerun
        Zouk: [
            {
                name: "Hanorac Zouk",
                price: 120,
                image1: "./images/cameroon_product1_image1.jpg",
                image2: "./images/cameroon_product1_image2.jpg"
            },
            {
                name: "T-shirt Zouk",
                price: 100,
                image1: "./images/cameroon_product2_image1.jpg",
                image2: "./images/cameroon_product2_image2.jpg"
            },
            {
                name: "Jeans Zouk",
                price: 130,
                image1: "./images/cameroon_product3_image1.jpg",
                image2: "./images/cameroon_product3_image2.jpg"
            }
        ],
        Soca: [
            {
                name: "Cămașă Soca",
                price: 110,
                image1: "./images/cameroon_product4_image1.jpg",
                image2: "./images/cameroon_product4_image2.jpg"
            },
            {
                name: "T-shirt Soca",
                price: 90,
                image1: "./images/cameroon_product5_image1.jpg",
                image2: "./images/cameroon_product5_image2.jpg"
            },
            {
                name: "Jeans Soca",
                price: 120,
                image1: "./images/cameroon_product6_image1.jpg",
                image2: "./images/cameroon_product6_image2.jpg"
            }
        ]
    },

};
const countryGradients: { [key: number]: { light: string[]; dark: string[] } } = {
    11: {
        light: [
            "linear-gradient(90deg, #FF4D4D 0%, #FFB347 50%, #FFFFFF 100%)",
            "linear-gradient(90deg, #FF6B6B, #FFD166, #FFFFFF)"
        ],
        dark: [
            "linear-gradient(135deg, #4a0e00, #a83400, #ff6f00)",
            "linear-gradient(120deg, #3b1c00, #805230, #b47149, #e6a57b)"
        ]
    },
    12: {
        light: [
            "linear-gradient(to right, #E0F7FA 0%, #80DEEA 50%, #4DD0E1 100%)",
            "linear-gradient(115deg, #E0F7FA 0%, #80DEEA 0%, #FFEE58 85%, #FFFDE7 160%)"
        ],
        dark: [
            "linear-gradient(to right, #0A0E1A 0%, #1A2742 30%, #E6C229 50%, #5E1A1A 70%, #3A0A0A 100%)",
            "linear-gradient(to right, #0A1F3A 0%, #1E2B4D 20%, #3A2C4E 50%, #6E2C3C 80%, #8C1D1D 100%)"
        ]
    },
    13: {
        light: [
            "linear-gradient(45deg, #FF5252 0%, #FFA726 100%)",
            "linear-gradient(45deg, #FF0000 0%, #FFCC00 100%)"
        ],
        dark: [
            "linear-gradient(135deg, #1A1A1A 0%, #2D2424 50%, #5D4037 100%)",
            "linear-gradient(to right, #1e1e1e 0%, #3a1f1f 30%, #6d2c2c 70%, #1e1e1e 100%)"
        ]
    },
    14: {
        light: [
            "linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 50%, #9CA3AF 100%)",
            "linear-gradient(45deg, #F5F5F5 0%, #E67E8B 100%)"
        ],
        dark: [
            "linear-gradient(45deg, #012169 0%, #000000 50%, #012169 100%)",
            "linear-gradient(45deg, #000000 0%, #012169 25%, #C8102E 50%, #012169 75%, #000000 100%)"
        ]
    },
    31: {
        light: [
            "linear-gradient(90deg, #FCE38A 0%, #F38181 50%, #EAFFD0 100%)",
            "linear-gradient(90deg, #FFDDC1, #FFABAB, #FFC3A0)"
        ],
        dark: [
            "linear-gradient(135deg, #2F2F2F, #3A3A3A, #1B1B1B)",
            "linear-gradient(120deg, #1A1A1A, #444, #111)"
        ]
    },
    32: {
        light: [
            "linear-gradient(90deg, #C6FFDD 0%, #FBD786 50%, #F7797D 100%)",
            "linear-gradient(90deg, #FFFACD, #FFEFD5, #FFDAB9)"
        ],
        dark: [
            "linear-gradient(135deg, #2E2E2E, #4E4E4E, #1C1C1C)",
            "linear-gradient(120deg, #1D2B64, #F8CDDA, #0F2027)"
        ]
    },
    33: {
        light: [
            "linear-gradient(90deg, #D4FC79 0%, #96E6A1 100%)",
            "linear-gradient(90deg, #F9FBE7, #F0F4C3, #DCEDC8)"
        ],
        dark: [
            "linear-gradient(135deg, #373B44, #4286F4, #232526)",
            "linear-gradient(120deg, #141E30, #243B55, #000000)"
        ]
    },
    34: {
        light: [
            "linear-gradient(90deg, #FFDEE9 0%, #B5FFFC 100%)",
            "linear-gradient(90deg, #FFE0E0, #FFB6B6, #FF9999)"
        ],
        dark: [
            "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
            "linear-gradient(120deg, #232526, #414345, #111)"
        ]
    }
};
const musicTypes: { [key: number]: { country: string; music1: string; music2: string } } = {
    11: {
        country: "Spania",
        music1: "Pop",
        music2: "Flamenco"
    },
    12: {
        country: "Romania",
        music1: "Jazz",
        music2: "Classical"
    },
    13: {
        country: "Germania",
        music1: "Rock",
        music2: "Electronic"
    },
    14: {
        country: "UK",
        music1: "Hip-Hop",
        music2: "Indie"
    },
    31: {
        country: "Etiopia",
        music1: "Afrobeat",
        music2: "Highlife"
    },
    32: {
        country: "Nigeria",
        music1: "Gospel",
        music2: "Soul"
    },
    33: {
        country: "Africa de Sud",
        music1: "Kwaito",
        music2: "Jazz"
    },
    34: {
        country: "Camerun",
        music1: "Zouk",
        music2: "Soca"
    }
};

const ProductsList: React.FC<{ countryId: number; musicType: string }> = ({ countryId, musicType }) => {
    const country = countryProducts[countryId];


    const products = country[musicType] || [];

    return (
        <div className="products-display">
            {products.map((product, index) => (
                <Card
                    key={index}
                    name={product.name}
                    price={product.price}
                    image1={product.image1}
                    image2={product.image2}
                />
            ))}
        </div>
    );
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
                {gradients.map((gradient, idx) => {
                    const isMusic1 = idx === 0; // Prima secțiune pentru music1
                    const musicTdasype = isMusic1 ? musicTypes[country]?.music1 : musicTypes[country]?.music2;

                    return (
                        <div
                            key={`${theme}-${idx}`}
                            className={`background-section ${fadeOut ? "fade-out" : "fade-in"}`}
                            style={{ background: gradient }}
                        >
                            <div className="background-overlay-box">

                                <ProductsList countryId={country} musicType={musicTdasype} />
                                <div className="country-info">
                                    <h1 className="country-name">
                                          {musicTypes[country]?.country} - {musicTdasype}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

export default Background

