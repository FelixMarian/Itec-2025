    import React, { useEffect, useState } from "react";
    import "../styles/Background.css";
    import Card from "./Card.tsx";

    //spania
    import s1 from "../assets/images/europa/spania/1.jpg";
    import s2 from "../assets/images/europa/spania/2.jpg";
    import s3 from "../assets/images/europa/spania/3.jpg";
    import s4 from "../assets/images/europa/spania/4.jpg";
    import s5 from "../assets/images/europa/spania/5.jpg";
    import s6 from "../assets/images/europa/spania/6.jpg";

    //uk
    import u1 from "../assets/images/europa/uk/1.jpg";
    import u2 from "../assets/images/europa/uk/2.jpg";
    import u3 from "../assets/images/europa/uk/3.jpg";
    import u4 from "../assets/images/europa/uk/4.jpg";
    import u5 from "../assets/images/europa/uk/5.jpg";
    import u6 from "../assets/images/europa/uk/6.jpg";

    //romania
    import r1 from "../assets/images/europa/romania/1.jpg";
    import r2 from "../assets/images/europa/romania/2.jpg";
    import r3 from "../assets/images/europa/romania/3.jpg";
    import r4 from "../assets/images/europa/romania/4.jpg";
    import r5 from "../assets/images/europa/romania/5.jpg";
    import r6 from "../assets/images/europa/romania/6.jpg";

    //germania
    import g1 from "../assets/images/europa/germania/1.jpg";
    import g2 from "../assets/images/europa/germania/2.jpg";
    import g3 from "../assets/images/europa/germania/3.jpg";
    import g4 from "../assets/images/europa/germania/4.jpg";
    import g5 from "../assets/images/europa/germania/5.jpg";
    import g6 from "../assets/images/europa/germania/6.jpg";

    //africaDeSud
    import afr1 from "../assets/images/africa/africaDeSud/1.jpg";
    import afr2 from "../assets/images/africa/africaDeSud/2.jpg";
    import afr3 from "../assets/images/africa/africaDeSud/3.jpg";
    import afr4 from "../assets/images/africa/africaDeSud/4.jpg";
    import afr5 from "../assets/images/africa/africaDeSud/5.jpg";
    import afr6 from "../assets/images/africa/africaDeSud/6.jpg";

    //camerun
    import c1 from "../assets/images/africa/camerun/1.jpg";
    import c2 from "../assets/images/africa/camerun/2.jpg";
    import c3 from "../assets/images/africa/camerun/3.jpg";
    import c4 from "../assets/images/africa/camerun/4.jpg";
    import c5 from "../assets/images/africa/camerun/5.jpg";
    import c6 from "../assets/images/africa/camerun/6.jpg";

    //ethiopia
    import e1 from "../assets/images/africa/ethiopia/1.jpg";
    import e2 from "../assets/images/africa/ethiopia/2.jpg";
    import e3 from "../assets/images/africa/ethiopia/3.jpg";
    import e4 from "../assets/images/africa/ethiopia/4.jpg";
    import e5 from "../assets/images/africa/ethiopia/5.jpg";
    import e6 from "../assets/images/africa/ethiopia/6.jpg";

    //nigeria
    import n1 from "../assets/images/africa/nigeria/1.jpg";
    import n2 from "../assets/images/africa/nigeria/2.jpg";
    import n3 from "../assets/images/africa/nigeria/3.jpg";
    import n4 from "../assets/images/africa/nigeria/4.jpg";
    import n5 from "../assets/images/africa/nigeria/5.jpg";
    import n6 from "../assets/images/africa/nigeria/6.jpg";

    //Interfete
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
    interface ProductProps {
        name: string;
        price: number;
        image1: string;
        image2: string;
    }

    //Dictionare
    const countryProducts: CountryProducts = {
        11: { // Spania
            Sardana: [
                { name: "Rochie sardana", price: 90, image1: s1, image2: "./images/spain_product4_image2.jpg" },
                { name: "Pantofi traditionali", price: 130, image1: s2, image2: "./images/spain_product5_image2.jpg"},
                { name: "Rochie clasica", price: 140, image1: s3, image2: "./images/spain_product6_image2.jpg"}],
            Flamenco: [
                { name: "Pantofi Flamenco", price: 120, image1: s6, image2: "./images/spain_product1_image2.jpg"},
                { name: "Rochie Flamenco", price: 100, image1: s4, image2: "./images/spain_product2_image2.jpg"},
                { name: "Rochie Flamenco", price: 150, image1: s5, image2: "./images/spain_product3_image2.jpg"}]},
        12: { // Romania
            Populara: [
                { name: "Rochie Populara", price: 130, image1: r1, image2: "./images/romania_product1_image2.jpg"},
                { name: "Costum popular", price: 80, image1: r2, image2: "./images/romania_product2_image2.jpg"},
                { name: "Ie romaneasca", price: 150, image1: r3, image2: "./images/romania_product3_image2.jpg"}],
            Lautareasca: [
                {name: "Pantofi piele", price: 150, image1: r4, image2: "./images/romania_product4_image2.jpg"},
                {name: "Sacou barbat", price: 90, image1: r5, image2: "./images/romania_product5_image2.jpg"},
                {name: "Pantaloni barbat", price: 120, image1: r6, image2: "./images/romania_product6_image2.jpg"}]},
        13: { // Germania
            Klassische_Musik: [
                { name: "Costum barbati", price: 140, image1: g1, image2: "./images/germany_product1_image2.jpg"},
                { name: "Pantofi barbati", price: 100, image1: g2, image2: "./images/germany_product2_image2.jpg"},
                { name: "Rochie dama", price: 160, image1: g3, image2: "./images/germany_product3_image2.jpg"}],
            Schlagger: [
                {name: "Costum traditional", price: 120, image1: g4, image2: "./images/germany_product4_image2.jpg"},
                {name: "Tricou modern dama", price: 100, image1: g5, image2: "./images/germany_product5_image2.jpg"},
                {name: "Costum barbat", price: 140, image1: g6, image2: "./images/germany_product6_image2.jpg"}]},
        14: { // UK
            Hip_Hop: [
                { name: "Tricou larg", price: 130, image1: u1, image2: "./images/uk_product1_image2.jpg"},
                { name: "Blugi largi", price: 90, image1: u2, image2: "./images/uk_product2_image2.jpg"},
                { name: "Pantaloni tur lasat", price: 140, image1: u3, image2: "./images/uk_product3_image2.jpg"}],
            Drill: [
                { name: "Hoodie barbat", price: 110, image1: u4, image2: "./images/uk_product4_image2.jpg"},
                { name: "Sneakersi", price: 90, image1: u5, image2: "./images/uk_product5_image2.jpg"},
                { name: "Geaca", price: 120, image1: u6, image2: "./images/uk_product6_image2.jpg"}]},
        31: { // Etiopia
            Ethio_Jazz: [
                { name: "Costum barbat", price: 120, image1: e1, image2: "./images/ethiopia_product1_image2.jpg"},
                { name: "Costum barbat", price: 100, image1: e2, image2: "./images/ethiopia_product2_image2.jpg"},
                { name: "Costum barbat", price: 140, image1: e3, image2: "./images/ethiopia_product3_image2.jpg"}],
            Traditional_Ethiopian_Folk: [
                { name: "Costum traditional dama", price: 110, image1: e4, image2: "./images/ethiopia_product4_image2.jpg"},
                { name: "Costum traditional barbat", price: 95, image1: e5, image2: "./images/ethiopia_product5_image2.jpg"},
                { name: "Costume traditionale", price: 130, image1: e6, image2: "./images/ethiopia_product6_image2.jpg"}]},
        32: { // Nigeria
            Afrobeats: [
                { name: "Tricou barbat", price: 125, image1: n1, image2: "./images/nigeria_product1_image2.jpg"},
                { name: "Pantaloni", price: 100, image1: n2, image2: "./images/nigeria_product2_image2.jpg"},
                { name: "Geaca", price: 150, image1: n3, image2: "./images/nigeria_product3_image2.jpg"}],
            Highlife: [
                { name: "Rochie larga", price: 120, image1: n4, image2: "./images/nigeria_product4_image2.jpg"},
                { name: "Rochie", price: 95, image1: n5, image2: "./images/nigeria_product5_image2.jpg"},
                { name: "Costum traditional", price: 130, image1: n6, image2: "./images/nigeria_product6_image2.jpg"}]},
        33: { // Africa de Sud
            Kwaito: [
                { name: "Costum barbat", price: 130, image1: afr1, image2: "./images/southafrica_product1_image2.jpg"},
                { name: "Palton si fusta", price: 95, image1: afr2, image2: "./images/southafrica_product2_image2.jpg"},
                { name: "Palton si pantaloni", price: 140, image1: afr3, image2: "./images/southafrica_product3_image2.jpg"}],
            Jazz: [
                { name: "Costum barbat", price: 100, image1: afr4, image2: "./images/southafrica_product4_image2.jpg"},
                { name: "Costum barbat", price: 90, image1: afr5, image2: "./images/southafrica_product5_image2.jpg"},
                { name: "Costum dama", price: 130, image1: afr6, image2: "./images/southafrica_product6_image2.jpg"}]},
        34: { // Camerun
            Makossa: [
                { name: "Costume copii", price: 120, image1: c1, image2: "./images/cameroon_product1_image2.jpg"},
                { name: "Costum barbati", price: 100, image1: c2, image2: "./images/cameroon_product2_image2.jpg"},
                { name: "Costum dama", price: 130, image1: c3, image2: "./images/cameroon_product3_image2.jpg"}],
            Assiko: [
                { name: "Costum barbati", price: 110, image1: c4, image2: "./images/cameroon_product4_image2.jpg"},
                { name: "Costum barbati", price: 90, image1: c5, image2: "./images/cameroon_product5_image2.jpg"},
                { name: "Costum barbati", price: 120, image1: c6, image2: "./images/cameroon_product6_image2.jpg"}]}
    };
    const countryGradients: { [key: number]: { light: string[]; dark: string[] } } = {
        11: {
            light: ["linear-gradient(90deg, #FF4D4D 0%, #FFB347 50%, #FFFFFF 100%)", "linear-gradient(90deg, #FF6B6B, #FFD166, #FFFFFF)"],
            dark: ["linear-gradient(135deg, #4a0e00, #a83400, #ff6f00)", "linear-gradient(120deg, #3b1c00, #805230, #b47149, #e6a57b)"]},
        12: {
            light: ["linear-gradient(to right, #E0F7FA 0%, #80DEEA 50%, #4DD0E1 100%)", "linear-gradient(115deg, #E0F7FA 0%, #80DEEA 0%, #FFEE58 85%, #FFFDE7 160%)"],
            dark: ["linear-gradient(to right, #0A0E1A 0%, #1A2742 30%, #E6C229 50%, #5E1A1A 70%, #3A0A0A 100%)", "linear-gradient(to right, #0A1F3A 0%, #1E2B4D 20%, #3A2C4E 50%, #6E2C3C 80%, #8C1D1D 100%)"]},
        13: {
            light: ["linear-gradient(45deg, #FF5252 0%, #FFA726 100%)", "linear-gradient(45deg, #FF0000 0%, #FFCC00 100%)"],
            dark: ["linear-gradient(135deg, #1A1A1A 0%, #2D2424 50%, #5D4037 100%)", "linear-gradient(to right, #1e1e1e 0%, #3a1f1f 30%, #6d2c2c 70%, #1e1e1e 100%)"]},
        14: {
            light: ["linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 50%, #9CA3AF 100%)", "linear-gradient(45deg, #F5F5F5 0%, #E67E8B 100%)"],
            dark: ["linear-gradient(45deg, #012169 0%, #000000 50%, #012169 100%)", "linear-gradient(45deg, #000000 0%, #012169 25%, #C8102E 50%, #012169 75%, #000000 100%)"]},
        31: {
            light: ["linear-gradient(90deg, #FCE38A 0%, #F38181 50%, #EAFFD0 100%)", "linear-gradient(90deg, #FFDDC1, #FFABAB, #FFC3A0)"],
            dark: ["linear-gradient(135deg, #2F2F2F, #3A3A3A, #1B1B1B)", "linear-gradient(120deg, #1A1A1A, #444, #111)"]},
        32: {
            light: ["linear-gradient(90deg, #C6FFDD 0%, #FBD786 50%, #F7797D 100%)", "linear-gradient(90deg, #FFFACD, #FFEFD5, #FFDAB9)"],
            dark: ["linear-gradient(135deg, #2E2E2E, #4E4E4E, #1C1C1C)", "linear-gradient(120deg, #1D2B64, #F8CDDA, #0F2027)"]},
        33: {
            light: ["linear-gradient(90deg, #D4FC79 0%, #96E6A1 100%)", "linear-gradient(90deg, #F9FBE7, #F0F4C3, #DCEDC8)"],
            dark: ["linear-gradient(135deg, #373B44, #4286F4, #232526)", "linear-gradient(120deg, #141E30, #243B55, #000000)"]},
        34: {
            light: ["linear-gradient(90deg, #FFDEE9 0%, #B5FFFC 100%)", "linear-gradient(90deg, #FFE0E0, #FFB6B6, #FF9999)"],
            dark: ["linear-gradient(135deg, #0F2027, #203A43, #2C5364)", "linear-gradient(120deg, #232526, #414345, #111)"]}
    };


    const musicTypes: { [key: number]: { country: string; music1: string; music2: string } } = {
        11: {
            country: "Spania",
            music1: "Sardana",
            music2: "Flamenco"
        },
        12: {
            country: "Romania",
            music1: "Populara",
            music2: "Lautareasca"
        },
        13: {
            country: "Germania",
            music1: "Klassische_Musik",
            music2: "Schlagger"
        },
        14: {
            country: "UK",
            music1: "Hip_Hop",
            music2: "Drill"
        },
        31: {
            country: "Etiopia",
            music1: "Ethio_Jazz",
            music2: "Traditional_Ethiopian_Folk"
        },
        32: {
            country: "Nigeria",
            music1: "Afrobeats",
            music2: "Highlife"
        },
        33: {
            country: "Africa de Sud",
            music1: "Kwaito",
            music2: "Jazz"
        },
        34: {
            country: "Camerun",
            music1: "Makossa",
            music2: "Assiko"
        }
    };

    const ProductsList: React.FC<{ countryId: number; musicType: string }> = ({ countryId, musicType }) => {
        const country = countryProducts[countryId];
        const products = country[musicType] || [];
        const [screenWidth, setScreenWidth] = useState(window.innerWidth);
        const [randomProducts, setRandomProducts] = useState<Array<ProductProps>>([]);

        useEffect(() => {
           //Vedem cum se schimba ecranul pt randare
            const handleResize = () => setScreenWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);
        useEffect(() => {
            let selectedProducts: Array<ProductProps> = [];
            if (screenWidth < 880) {
                //1 element random
                const randomIndex = Math.floor(Math.random() * products.length);
                selectedProducts = [products[randomIndex]];
            } else if (screenWidth >= 880 && screenWidth <= 1190) {
                //2 elemente random
                while (selectedProducts.length < 2) {
                    const randomIndex = Math.floor(Math.random() * products.length);
                    if (!selectedProducts.includes(products[randomIndex])) { selectedProducts.push(products[randomIndex]);}
                }
            } else {selectedProducts = products;} //3 elemente pt >1190px
            setRandomProducts(selectedProducts);
        }, [screenWidth, products]);

        return (
            <div className="products-display">
                {randomProducts.map((product, index) => (
                    <Card
                        key={index}
                        name={product.name}
                        price={product.price}
                        image1={product.image1}
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
                    const isMusic1 = idx === 0;
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
                                    <h1 className={`country-name ${country === 14 ? "uk-name" : ""}`}>
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

