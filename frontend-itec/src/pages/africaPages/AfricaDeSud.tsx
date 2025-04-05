import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const AfricaDeSud = () => {
    return (
        <>
            <div className="container">
                <Background country={33}/>
                <NavBar country={33}/>
            </div>
        </>
    );
}

export default AfricaDeSud;