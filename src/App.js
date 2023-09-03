import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import History from "./Components/History";
import WordDetails from "./Components/WordDetails";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/history" element = {<History/>}/>
          <Route path = "/word/:word" element = {<WordDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;