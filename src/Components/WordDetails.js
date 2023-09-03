import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css"
import { useDispatch, useSelector } from "react-redux";
import { singleLoadingFunc, singleSuccessFunc, singleErrorFunc } from "../redux/action/actionTypes";
import { FidgetSpinner } from "react-loader-spinner";


const WordDetails = () => {

    let {word} = useParams();
    let {singleLoading, singleData, singleError} = useSelector((state) => state);
    let dispatch = useDispatch();
  

    useEffect(() => {
        dispatch(singleLoadingFunc())
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) =>{
            dispatch(singleSuccessFunc(response.data))

        })
        .catch((error) => {
            console.log(error)
            dispatch(singleErrorFunc(error))
        })
    },[])

    return(
        <div>
            <Navbar/>


            <div className="result-cont">

                {
                    <div className="spinner-cont">
                        {
                            singleLoading && singleLoading !== undefined? <FidgetSpinner/> : ""
                        }
                    </div>
                    
                } 

                {
                    singleData && singleData.length > 0 ? 
                    
                    <div className="data-cont">  
                        {
                            singleData.map((eachObj) => (
                                <div className="each-card">
                                    <h2>{eachObj.word}</h2>

                                    <div className="audio-cont">
                                        {
                                            eachObj.phonetics && eachObj.phonetics.length > 0 ? 

                                            <div>
                                                {
                                                    eachObj.phonetics.map((eachPhe) => (
                                                        <div>
                                                           <p>{eachPhe.text}</p> 
                                                           <audio controls>
                                                                <source src = {eachPhe.audio} type="audio/mp3"/>
                                                           </audio>
                                                        </div>
                                                    ))
                                                }
                                            </div> : ""
                                        }

                                    </div>

                                    <div className="phe-cont">
                                        {
                                            eachObj.phonetic && eachObj.phonetic !== "" ? <p>{eachObj.phonetic}</p> : ""
                                        }
                                    </div>

                                    <div>
                                        {
                                            eachObj.meanings && eachObj.meanings.length > 0 ? 

                                            <div>
                                                {
                                                    eachObj.meanings.map((eachMeaning) => (
                                                        <div>
                                                            <h3 className="pof">{eachMeaning.partOfSpeech}</h3>
                                                            <div>
                                                                {
                                                                    eachMeaning.definitions && eachMeaning.definitions.length > 0 ? 
                                                                    <div>
                                                                        {
                                                                            eachMeaning.definitions.map((eachDef) => (
                                                                                <div>
                                                                                    <p className="def">{eachDef.definition}</p>
                                                                                </div> 
                                                                            ))
                                                                        }
                                                                    </div> : ""
                                                                }
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div> : ""
                                        }
                                    </div>
                                </div>
                            ))
                        }

                    </div> : ""
                }

                
            </div>
        </div>
    )
}

export default WordDetails;