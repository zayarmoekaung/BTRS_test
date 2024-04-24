import { useState } from "react"
import styles from './chats.module.css'

export const Chats = () =>{

    return(
        <>
        <div className="chats">
          <div className="empty">
            <div className="empty-icon">
              
            </div>
            <p className="empty-title h5">You have no new messages</p>
            
          </div>
        </div>
        </>
    )
}