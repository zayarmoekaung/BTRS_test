import { useState } from "react"
import styles from './send.module.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setMessage,selectMessage, sendMessage } from "./inputSlice"
import { selectUserName } from "../user/userSlice"
export const Input = ()=>{
    const username = useAppSelector(selectUserName)
    const dispatch = useAppDispatch()
    const message = useAppSelector(selectMessage)
    const handleChange = (text:string) =>{
        dispatch(setMessage(text))
    }
    const handleSend = () =>{
        dispatch(sendMessage(username))
    }
    return(
        <>
        <div className="columns input_bar">
          <div className="column col-8">
            <input type="text" name="message" id="message" className="form-input" 
            placeholder="Message" value={message} onChange={e=>{handleChange(e.target.value)}}/>
          </div>
          <div className="btn btn-primary column col-4" onClick={handleSend}>Send</div>
        </div>
        </>
    )
}