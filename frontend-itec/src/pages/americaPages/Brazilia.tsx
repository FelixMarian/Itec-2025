import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Brazilia = () => {
    return (
        <>
            <div className="container">
                <Background country={24}/>
                <NavBar country={24}/>
            </div>
        </>
    );
}

export default Brazilia;