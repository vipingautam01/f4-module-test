import React from "react";
import  ReactDOM  from "react-dom";
import Navbar from "./Navbar";
import "../App.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const History = () => {
    let {searchHistory} = useSelector((state) => state);
    let navigate = useNavigate()

    function searchFromHistory(string) {
        setTimeout(() => {
            navigate(`/word/${string}`)
        }, 1000)
        
    }


    return (
        <div className="his-cont">
            <Navbar/>
            <h1 className="his-heading">Search History</h1>
            {
                searchHistory && searchHistory.length > 0 ? 
                <div className="each-his-text-cont">
                    {
                        searchHistory.map((each) => <span className="each-his-text"  onClick={() => searchFromHistory(each)}>{each}</span>)
                    }
                </div> : ""
            }
        </div>
    )
}

export default History;