import { useRef } from "react"

export default function(){
    const emailRef = useRef()
    const messageRef = useRef()
    const sendHandle=()=>{
        console.log(`email : ${emailRef.current.value}, message : ${messageRef.current.value}`);
        emailRef.current.value = ""
        messageRef.current.value = ""
    }
    return(<div className="form">
        <p>email</p>
        <label><input type="email" ref={emailRef}/></label>
        <p>message</p>
        <label><input type="text" ref={messageRef}/></label>
        <button className="getStartBtn" onClick={sendHandle}>Send</button>
    </div>)
}