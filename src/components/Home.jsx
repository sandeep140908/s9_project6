import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/styles.css";

function Home() {

    const location = useLocation();

   useEffect(() => {
        alert(localStorage.getItem("msg"));      
    }, []);

    return (
        <>
            <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <br />

                <h1>This is home page</h1>
            </div>

            <p>I'm belongs to --- {location.state?.course}</p>
            <p>Hello everyone ----- {location.state?.name}</p>
        </>
    );
}

export default Home;
