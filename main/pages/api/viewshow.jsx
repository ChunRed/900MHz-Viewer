import React, { useState, useEffect } from 'react'
import Image from "next/image";
import img1 from '../../public/images/profile.jpg'


let count = 0;
let msg_array = [
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
    ['0000000', '0000000', '0000000', '0000000', '0000000', '0000000', '0000000', ''],
];

export function ChangeColor(newmsg){

    msg_array.pop();
    msg_array.unshift(newmsg);
    
    for(let index = 0; index < 9; index++){
        for(let i = 0; i < 7; i++){
            let UI = document.querySelectorAll('.seg-' + (i+1).toString());
            for (let j = 0; j < 7; j++) {
                UI[j+(7*index)].style.opacity = 0.3 + (msg_array[index][i][j] * 0.7);
            }
        }
    }

    if(count <= 7){
        count += 1;
    }
    else{
        count = 0;
    }
    
   // console.log(msg_array);
    
}


const ViewShow =() => {



    return(
        <div className="container-fluid">
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}
            <div className="row justify-content-center mt-1" style={{height: '4vw'}}>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-1 display'/>
                    <img src="/images/2.png" alt="" className='seg-1 display'/>
                    <img src="/images/3.png" alt="" className='seg-1 display'/>
                    <img src="/images/4.png" alt="" className='seg-1 display'/>
                    <img src="/images/5.png" alt="" className='seg-1 display'/>
                    <img src="/images/6.png" alt="" className='seg-1 display'/>
                    <img src="/images/7.png" alt="" className='seg-1 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-2 display'/>
                    <img src="/images/2.png" alt="" className='seg-2 display'/>
                    <img src="/images/3.png" alt="" className='seg-2 display'/>
                    <img src="/images/4.png" alt="" className='seg-2 display'/>
                    <img src="/images/5.png" alt="" className='seg-2 display'/>
                    <img src="/images/6.png" alt="" className='seg-2 display'/>
                    <img src="/images/7.png" alt="" className='seg-2 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-3 display'/>
                    <img src="/images/2.png" alt="" className='seg-3 display'/>
                    <img src="/images/3.png" alt="" className='seg-3 display'/>
                    <img src="/images/4.png" alt="" className='seg-3 display'/>
                    <img src="/images/5.png" alt="" className='seg-3 display'/>
                    <img src="/images/6.png" alt="" className='seg-3 display'/>
                    <img src="/images/7.png" alt="" className='seg-3 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-4 display'/>
                    <img src="/images/2.png" alt="" className='seg-4 display'/>
                    <img src="/images/3.png" alt="" className='seg-4 display'/>
                    <img src="/images/4.png" alt="" className='seg-4 display'/>
                    <img src="/images/5.png" alt="" className='seg-4 display'/>
                    <img src="/images/6.png" alt="" className='seg-4 display'/>
                    <img src="/images/7.png" alt="" className='seg-4 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-5 display'/>
                    <img src="/images/2.png" alt="" className='seg-5 display'/>
                    <img src="/images/3.png" alt="" className='seg-5 display'/>
                    <img src="/images/4.png" alt="" className='seg-5 display'/>
                    <img src="/images/5.png" alt="" className='seg-5 display'/>
                    <img src="/images/6.png" alt="" className='seg-5 display'/>
                    <img src="/images/7.png" alt="" className='seg-5 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-6 display'/>
                    <img src="/images/2.png" alt="" className='seg-6 display'/>
                    <img src="/images/3.png" alt="" className='seg-6 display'/>
                    <img src="/images/4.png" alt="" className='seg-6 display'/>
                    <img src="/images/5.png" alt="" className='seg-6 display'/>
                    <img src="/images/6.png" alt="" className='seg-6 display'/>
                    <img src="/images/7.png" alt="" className='seg-6 display'/>
                </div>
                <div className="col-1 position-relative">
                    <img src="/images/1.png" alt="" className='seg-7 display'/>
                    <img src="/images/2.png" alt="" className='seg-7 display'/>
                    <img src="/images/3.png" alt="" className='seg-7 display'/>
                    <img src="/images/4.png" alt="" className='seg-7 display'/>
                    <img src="/images/5.png" alt="" className='seg-7 display'/>
                    <img src="/images/6.png" alt="" className='seg-7 display'/>
                    <img src="/images/7.png" alt="" className='seg-7 display'/>
                </div>
            </div>
{/* ---------------------------------------------------------------------------- */}

            <style jsx>{`
                .display {
                    position: absolute !important;
                    left: 20% !important;
                    display: block;
                    max-width: 20% !important;
                    height: auto !important;
                    opacity: 0.3;
                }
                    
            `}</style>


        </div>
    )
}

export default ViewShow;


