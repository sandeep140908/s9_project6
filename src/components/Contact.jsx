import { Link , useLocation } from "react-router-dom";
import "../components/contact.css";
import profile from "../assets/comicfigure.jpg";


function Contact() {
     const location = useLocation();
    return (
        <>
            <div className="head">
                <nav className="nav">
                    <Link to="/">Main</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <h1>This is Contact Page</h1>
            </div>

            <div className="contact-container">
                <div className="contact-card">

                    <div className="photo-section">
                        
                        <img src={profile} alt="Profile" />

                    </div>

                    <div className="info-section">
                         <p>I'm belongs to ---{location.state?.course}</p>
                        <p><span>ID Number:</span> 2500080219</p>
                        <p><span>Name:</span>sandeep</p>
                        <p><span>Phone:</span>7036361456</p>
                        <p><span>Email:</span> sandeep@gmail.com</p>
                        <p><span>Address:</span> Vijayawada , Andhra Pradesh</p>
                        <p><span>Department:</span> CSE</p>
                        <p><span>College:</span>KL UNIVERSITY</p>
                    </div>
                    {/* Message Box */}
        <div className="contact-card message-card">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
                </div>
            </div>
        </>
    );
}

export default Contact;