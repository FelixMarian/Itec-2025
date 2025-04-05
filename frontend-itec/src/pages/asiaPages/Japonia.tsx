import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Japonia = () => {
    return (
        <>
            <div className="container">
                <Background country={42}/>
                <NavBar country={42}/>
            </div>
        </>
    );
}

export default Japonia;