import React,{Component} from "react";
import '../main.css'
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function News(props){
        return(<div style={{textAlign: "center"}}>
            <main>
            <Header />
            <section className={'home-intro-lib'}>
              
            <img src="http://localhost:5231/Photos/logo.png" alt="Logo.png"/>
            <h1>News</h1>
            </section>
            <div style={{background: "gray", width: "100%", minHeight: "20px", opacity: "50%"}}></div>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: "80%", background: "white", minHeight: "500px", margin: "5%", borderRadius: "13px", fontFamily: "Poppins"}}>
                <h1 style={{margin: "10% 0% 1%", fontWeight: "bold", fontSize: "35px"}}>Our News Collection</h1>
                <p style={{fontSize: "20px"}}>Browse through our latest article for anything that catches your eye!</p>
              <hr style={{width: '90%', marginLeft: "5%", height: "2px"}} />
              <div className="img-columns">
       </div>
       </div>
            </div>
            <Footer />
            </main>
            </div>
        )
    }