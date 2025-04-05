import NavBar from "../components/NavBar.tsx";
import Background from "../components/Background.tsx";
const Home = () => {
    return (
        <>
            <div className="container">
                <Background country={11}/>
                <NavBar country={11}/>
            </div>
        </>
    );
}

export default Home;