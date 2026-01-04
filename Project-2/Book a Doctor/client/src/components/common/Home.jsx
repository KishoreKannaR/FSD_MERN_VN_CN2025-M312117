import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import "./Home.css";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-content">
          <h1>Book Doctor Appointments Easily</h1>
          <p>
            Find trusted doctors, book appointments online,
            and manage your health effortlessly.
          </p>

          <div className="home-buttons">
            <Link to="/login" className="primary-btn">
              Login
            </Link>

            <Link to="/register" className="secondary-btn">
              Register
            </Link> 
            <Footer />           
          </div>          
        </div>        
      </div>      
    </>
  );
}
