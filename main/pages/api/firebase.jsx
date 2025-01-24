import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push } from "firebase/database";

let firebase_data = '';
export let firebase_data_length = 0;
let typed;



//MARK:FIREBASE INIT
const firebaseConfig = {
    apiKey: "AIzaSyBXhCCNzuDcIFlYbHg8oublhVQ6zD0uwFM",
    authDomain: "hz-d5300.firebaseapp.com",
    databaseURL: "https://hz-d5300-default-rtdb.firebaseio.com",
    projectId: "hz-d5300",
    storageBucket: "hz-d5300.firebasestorage.app",
    messagingSenderId: "38943784930",
    appId: "1:38943784930:web:923a986c60ca5bf500c3bb",
    measurementId: "G-V5F9C317F0"
};

const app = initializeApp(firebaseConfig);







//MARK:READ DATA
function readOnceWithGet() {
    const dbRef = ref(getDatabase());

    get(child(dbRef, '/data')).then((snapshot) => {
        if (snapshot.exists()) {

            let data = snapshot.val();
            firebase_data_length = data.length;
            // console.log(data);
            // console.log(firebase_data_length);

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}




//MARK:WRITE DATA
export function writeUserData(date, message) {

    var d = new Date();
    const db = getDatabase();

    set(ref(db, '/' + d.getDate() + '/' + (firebase_data_length)), [date, message]);
    console.log("send message: ");
}



//MARK:MAIN FUNCTION
export default function FireBase(props) {

    useEffect(() => {
        var d = new Date();
        
        const id = setInterval(() => {

            const dbRef = ref(getDatabase());

            get(child(dbRef, '/' + d.getDate())).then((snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    firebase_data_length = data.length;
                    //console.log("firebase length: " + firebase_data_length);

                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });

        }, 1000);
        return () => clearInterval(id);
    }, [firebase_data_length]);



    return (
        <div></div>
    );
}
