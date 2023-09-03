import React , {useEffect, useState} from "react";
import  ReactDOM  from "react-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadingFunc, successFunc , errorFunc, addToSearch} from "../redux/action/actionTypes";
import {FidgetSpinner} from "react-loader-spinner";


const Home = () => {
    const [input, setInput] = useState("");

    let dispatch = useDispatch();

    
    let {loading, data, error} = useSelector((state) => state);
    

    async function onSearch(){
        if(input === ""){
            alert("Type a Word to search");
            setInput("")
        }else if(input !== ""){
            dispatch(loadingFunc())

            await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            .then((response) => {
                console.log(response.data)

                dispatch(successFunc(response.data))
                dispatch(addToSearch(input))
                setInput("")

            })
            .catch((error) => {
                console.log(error);


                dispatch(errorFunc(error))


            })
        }
    }

    console.log("data = ", data);


    return (
        <div>
            <Navbar/>

            <div className="input-cont">
                <div className="actual-input-cont"> 
                    <input type = "text" placeholder="Search" className="input" value = {input} onChange={(e) => setInput(e.target.value.toLocaleLowerCase().trim())}/>
                    <button className="search-btn" onClick={onSearch}>Search</button>
                </div>
            </div>

            <div className="result-cont">
                {
                    <div className="spinner-cont">
                        {
                            loading && loading !== undefined? <FidgetSpinner/> : ""
                        }
                    </div>
                    
                } 

                {
                    data && data.length > 0 ? 
                    
                    <div className="data-cont">  
                        {
                            data.map((eachObj) => (
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

export default Home;