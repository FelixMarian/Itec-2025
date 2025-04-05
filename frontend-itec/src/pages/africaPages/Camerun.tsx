import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Camerun = () => {
    return (
        <>
            <div className="container">
                <Background country={34}/>
                <NavBar country={34}/>
            </div>
        </>
    );
}

export default Camerun;