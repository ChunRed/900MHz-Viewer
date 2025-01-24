
import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import ViewShow from './api/viewshow'
import "bootstrap/dist/css/bootstrap.css";


export default function Test(){
    return(
        <div className="container">
            <div className="row ">
                <div className="col text-light text-center">test</div>
            </div>

            <div className="row">
                <ViewShow></ViewShow>
                
            </div>
        </div>
    )
}