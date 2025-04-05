import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Germania = () => {
    return (
        <>
            <div className="container">
                <Background country={13}/>
                <NavBar country={13}/>
            </div>
        </>
    );
}

export default Germania;