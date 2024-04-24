import { useState } from "react"
import styles from './send.module.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectMessage } from "./inputSlice"
export const Input = ()=>{
    const message = useAppSelector(selectMessage)
    return(
        <>
        <div className="columns input_bar">
          <div className="column col-8">
            <input type="text" name="message" id="message" className="form-input" placeholder="Message" value={message}/>
          </div>
          <div className="btn btn-primary column col-4">Send</div>
        </div>
        </>
    )
}