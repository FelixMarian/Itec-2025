import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Mexic = () => {
    return (
        <>
            <div className="container">
                <Background country={22}/>
                <NavBar country={22}/>
            </div>
        </>
    );
}

export default Mexic;