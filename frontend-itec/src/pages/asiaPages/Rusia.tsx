import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Rusia = () => {
    return (
        <>
            <div className="container">
                <Background country={44}/>
                <NavBar country={44}/>
            </div>
        </>
    );
}

export default Rusia;