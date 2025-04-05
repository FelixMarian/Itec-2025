import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const UK = () => {
    return (
        <>
            <div className="container">
                <Background country={14}/>
                <NavBar country={14}/>
            </div>
        </>
    );
}

export default UK;