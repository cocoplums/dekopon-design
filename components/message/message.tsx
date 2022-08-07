import {toast, ToastContainer} from "react-toastify";
import React from "react";
import {createRoot, Root} from "react-dom/client";

let ins: HTMLDivElement | null = null;
let root: Root;
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
            root.render(<ToastContainer/>)
        }else {
            ins = document.createElement("div");
            document.body.appendChild(ins);
            root = createRoot(ins);
            root.render(<ToastContainer/>)
        }
        // @ts-ignore
        toast[type](message);
    }
})
export default Message
