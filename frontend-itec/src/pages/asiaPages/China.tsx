import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const China = () => {
    return (
        <>
            <div className="container">
                <Background country={43}/>
                <NavBar country={43}/>
            </div>
        </>
    );
}

export default China;