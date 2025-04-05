import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Romania = () => {
    return (
        <>
            <div className="container">
                <Background country={12}/>
                <NavBar country={12}/>
            </div>
        </>
    );
}

export default Romania;