import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import "./styles/index.scss";

const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Home/>}/>
                <Route path="/result" element={<Result/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;