import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Ethiopia = () => {
    return (
        <>
            <div className="container">
                <Background country={31}/>
                <NavBar country={31}/>
            </div>
        </>
    );
}

export default Ethiopia;