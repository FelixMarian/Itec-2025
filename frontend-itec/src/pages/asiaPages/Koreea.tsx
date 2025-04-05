import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Koreea = () => {
    return (
        <>
            <div className="container">
                <Background country={41}/>
                <NavBar country={41}/>
            </div>
        </>
    );
}

export default Koreea;