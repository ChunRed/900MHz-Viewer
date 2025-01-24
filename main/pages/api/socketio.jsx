import React, { useState, useEffect } from 'react'
import webSocket from 'socket.io-client'
import $ from "jquery";
import utilStyles from "../../styles/utils.module.css"

import FireBase, { writeUserData, firebase_data_length} from '../api/firebase';
import ViewShow, {ChangeColor} from '../api/viewshow'

const Socket = ({ msg, setMsg }) => {
    const [ws, setWs] = useState(null)
    const [listValue, setListValue] = useState('');
    const [serverState, setServerState] = useState('disconnect server');


    const [IP, setIP] = useState("http://huang.us-east-1.elasticbeanstalk.com:8080");


    const connectWebSocket = () => {
        setWs(webSocket(IP))
    }


    useEffect(() => {

        if (ws) {
            //連線成功在 console 中打印訊息
            console.log('success connect!')
            setServerState('connect server');

            //設定監聽
            ws.on('Get_MSG', (msg) => {
                let newmsg = msg.split(',');
                console.log(newmsg);
                //$('#messages').append($('<li>').text("user# : " + newmsg));
                $('#messages').prepend($('<li>').text(getRealTime() + ' :  ' + newmsg));
                writeUserData(getRealTime().toString(),newmsg);

                document.getElementById('count').innerHTML = "Count: " + firebase_data_length;



                //change seven-seg viewer color 
                ChangeColor(newmsg);
            })
        }

        let d = new Date();
        document.getElementById('date').innerHTML = "Date: " + d.getDate();

    }, [ws])


    function getRealTime() {
        const currentTime = Date.now();
        console.log(new Date(Math.round(currentTime / 1000) * 1000));
        return (new Date(Math.round(currentTime / 1000) * 1000));
    }



    const sendMessage = () => {
        //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
        ws.emit('Send_MSG', '0001000,0000101,0100001,1000000,0000011,0010001,0001000,');
    }


    return (
        <div className="containter">

            <div className="row">
                <div className="col-2"></div>
                <div className='text-center col-4' >
                    <input className='mt-2 btn btn-outline-light' type='button' value='connect server' onClick={connectWebSocket} />
                </div>

                <div className='text-center col-4' >
                    <input className='mt-2 btn btn-outline-light' type='button' value='send message' onClick={sendMessage} />
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row d-flex justify-content-center mt-3">
                <div className="col-2"></div>
                <div className="col-4 text-light text-center" id='date'>Date: </div>
                <div className="col-4 text-light text-center" id='count'>Count: 0</div>
                <div className="col-2"></div>
            </div>

            <div className="row mt-3">
                <ViewShow id="1" ></ViewShow>   
            </div>

            <div className="row mt-3">
                <ul id="messages" className={utilStyles.messages}></ul>
            </div>

            <FireBase></FireBase>
        </div>




    )
}



export default Socket;