import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Argentina = () => {
    return (
        <>
            <div className="container">
                <Background country={25}/>
                <NavBar country={25}/>
            </div>
        </>
    );
}

export default Argentina;