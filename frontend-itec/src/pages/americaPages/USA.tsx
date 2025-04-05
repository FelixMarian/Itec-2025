import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const USA = () => {
    return (
        <>
            <div className="container">
                <Background country={21}/>
                <NavBar country={21}/>
            </div>
        </>
    );
}

export default USA;