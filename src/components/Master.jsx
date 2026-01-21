import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/styles.css";

function Master() {

    const location = useLocation();
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setMessage(value);

        localStorage.setItem("msg", value);
        localStorage.setItem("msg1", value);
    };

    return (
        <>
            <div className="head">
                <Link to="/" state={{ course: "CSE1" }}>Main</Link>

                <Link to="/home" state={{ course: "CSE1", name: message }}>
                    Home
                </Link>

                <Link to="/about" state={{ course: "CSE1" }}>
                    About
                </Link>

                <Link to="/contact" state={{ course: message }}>
                    Contact
                </Link>

                <br />

                <h1>This is the main page u know!!!!</h1>
            </div>

            <p>I'm belongs to --- {location.state?.course}</p>

            <input
                type="text"
                placeholder="Enter Message"
                style={{
                    width: 400,
                    height: 100,
                    padding: 10,
                    color: "blue",
                    backgroundColor: "yellow",
                    fontSize: 20
                }}
                value={message}
                onChange={handleChange}
            />
        </>
    );
}

export default Master;
