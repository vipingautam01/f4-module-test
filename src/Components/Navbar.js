import React from "react";
import  ReactDOM  from "react-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {

    let navigate = useNavigate();

    function viewHistory(){
        setTimeout(() => {
            navigate("/history");
        }, 1000)
    }

    function viewHome(){
        setTimeout(() => {
            navigate("/");
        }, 1000)
    }


    return (
        <div>
            <nav className="nav">
                <div className="nav-title-cont">
                    <h1 className="nav-title">Dictionary App</h1>
                </div>

                <div className="nav-link-cont">
                    <span className="nav-link" onClick={viewHome}>Home</span>
                    <span className="nav-link" onClick={viewHistory}>History</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;