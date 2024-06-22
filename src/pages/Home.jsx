import React from "react";
import Header from "../components/Header";
import "../css/Home.css";
import ReactLogo from "../assets/react.svg";

const Home = () => {
    return (
        <>
            <Header />
            <main className="home-body">
                <h2>Hello</h2>

                <img src={ReactLogo} className="spin" alt="React Logo" />
            </main>
        </>
    )
}

export default Home;