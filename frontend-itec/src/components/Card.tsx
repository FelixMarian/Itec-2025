import React, {useEffect, useState} from "react";
import "../styles/Card.css";

interface ProductProps {
    name: string;
    price: number;
    image1: string;
}




const Card: React.FC<ProductProps> = ({ name, price, image1 }) => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);

    return (
        <div className={`product-card ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
            <div className="product-images">
                <img src={image1} alt={name} className="image1" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{price} RON</p>
            </div>
        </div>
    );
};



export default Card;
