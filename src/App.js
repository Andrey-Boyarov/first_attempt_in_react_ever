import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Main from "./Main";

export default function App() {
    return (
        <div className="container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}