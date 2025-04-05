import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Jamaica = () => {
    return (
        <>
            <div className="container">
                <Background country={23}/>
                <NavBar country={23}/>
            </div>
        </>
    );
}

export default Jamaica;