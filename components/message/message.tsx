import {toast, ToastContainer} from "react-toastify";
import React from "react";
import ReactDOM from "react-dom";
let ins:HTMLDivElement|null=null;
type MessageType={
    success:(message:string)=>void;
    info:(message:string)=>void;
}
const Message:MessageType={} as MessageType;

const MessageType=['success','info']

MessageType.forEach((type)=>{
    // @ts-ignore
    Message[type]=function (message:string) {
        if(ins){
            ReactDOM.render(<ToastContainer/>,ins)
        }else {
            ins = document.createElement("div");
            document.body.appendChild(ins);
            ReactDOM.render(<ToastContainer/>,ins)
        }
        // @ts-ignore
        toast[type](message);
    }
})
export default Message
