import NavBar from "../../components/NavBar.tsx";
import Background from "../../components/Background.tsx";

const Nigeria = () => {
    return (
        <>
            <div className="container">
                <Background country={32}/>
                <NavBar country={32}/>
            </div>
        </>
    );
}

export default Nigeria;