import { useState } from "react"
import styles from './send.module.css'

export const Input = ()=>{
    return(
        <>
        <div className="columns input_bar">
          <div className="column col-8">
            <input type="text" name="message" id="message" className="form-input" placeholder="Message" />
          </div>
          <div className="btn btn-primary column col-4">Send</div>
        </div>
        </>
    )
}