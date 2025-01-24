import React, { useState, useEffect } from 'react'
import Image from "next/image";
import img1 from '../../public/images/profile.jpg'
// import img2 from '../../media/2.png'
// import img3 from '../../media/3.png'
// import img4 from '../../media/4.png'
// import img5 from '../../media/5.png'
// import img6 from '../../media/6.png'
// import img7 from '../../media/7.png'


const ViewShow =() => {
    return(
        <div className="container-fluid">
            <div className="row">
            {/* <Image
                src="/../media/1.png"
                alt="Picture of the author"
                width={100}
                height={100}
                priority={true}
            /> */}
                <div className="col text-light">hello</div>
            </div>
            
            {/* <div className="row justify-content-center mt-5" style={{height: '15vw'}}>
                <div className="col-1 position-relative">
                    <img src={img1} className="seg1 display"></img>
                    <img src={img2} className="seg1 display"></img>
                    <img src={img3} className="seg1 display"></img>
                    <img src={img4} className="seg1 display"></img>
                    <img src={img5} className="seg1 display"></img>
                    <img src={img6} className="seg1 display"></img>
                    <img src={img7} className="seg1 display"></img>
                </div>
                <div className="col-1 position-relative">
                    <img src={img1} className="seg2 display"></img>
                    <img src={img2} className="seg2 display"></img>
                    <img src={img3} className="seg2 display"></img>
                    <img src={img4} className="seg2 display"></img>
                    <img src={img5} className="seg2 display"></img>
                    <img src={img6} className="seg2 display"></img>
                    <img src={img7} className="seg2 display"></img>
                </div>
                <div className="col-1 position-relative">
                    <img src={img1} className="seg3 display"></img>
                    <img src={img2} className="seg3 display"></img>
                    <img src={img3} className="seg3 display"></img>
                    <img src={img4} className="seg3 display"></img>
                    <img src={img5} className="seg3 display"></img>
                    <img src={img6} className="seg3 display"></img>
                    <img src={img7} className="seg3 display"></img>
                </div>
                <div className="col-1 position-relative">
                    <img src={img1} className="seg4 display"></img>
                    <img src={img2} className="seg4 display"></img>
                    <img src={img3} className="seg4 display"></img>
                    <img src={img4} className="seg4 display"></img>
                    <img src={img5} className="seg4 display"></img>
                    <img src={img6} className="seg4 display"></img>
                    <img src={img7} className="seg4 display"></img>
                </div>
                <div className="col-1 position-relative">
                    <img src={img1} className="seg5 display"></img>
                    <img src={img2} className="seg5 display"></img>
                    <img src={img3} className="seg5 display"></img>
                    <img src={img4} className="seg5 display"></img>
                    <img src={img5} className="seg5 display"></img>
                    <img src={img6} className="seg5 display"></img>
                    <img src={img7} className="seg5 display"></img>
                </div>
                <div className="col-1 position-relative">
                    <img src={img1} className="seg6 display"></img>
                    <img src={img2} className="seg6 display"></img>
                    <img src={img3} className="seg6 display"></img>
                    <img src={img4} className="seg6 display"></img>
                    <img src={img5} className="seg6 display"></img>
                    <img src={img6} className="seg6 display"></img>
                    <img src={img7} className="seg6 display"></img>
                </div>
                <div className="col-1 position-relative">
                    <img src={img1} className="seg7 display"></img>
                    <img src={img2} className="seg7 display"></img>
                    <img src={img3} className="seg7 display"></img>
                    <img src={img4} className="seg7 display"></img>
                    <img src={img5} className="seg7 display"></img>
                    <img src={img6} className="seg7 display"></img>
                    <img src={img7} className="seg7 display"></img>
                </div>
            </div> */}


            <style jsx>{`
                .display {
                    position: absolute;
                    left: 20%;
                    display: block;
                    max-width: 60%;
                    height: auto;
                    opacity: 1;
                }
                    
            `}</style>


        </div>
    )
}

export default ViewShow;


