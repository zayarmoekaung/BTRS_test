import { useEffect, useState } from "react"
import styles from './chats.module.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchMessage,selectMessages } from "./chatsSlice"
import { selectUserName } from "../user/userSlice"
export const Chats = () =>{
  const dispatch = useAppDispatch()
  const messages = useAppSelector(selectMessages)
  const username = useAppSelector(selectUserName)
  const [count,setCount] = useState(25)
    useEffect(()=>{
      dispatch(fetchMessage())
    },[])
  const chat_history = ()=>{
    let index = messages.length-1
    let c     = count
    const history = []
    
    while(index>0&&c>0){
      const message = messages[index]
      history.unshift(
        <div className={`chat ${message.username==username?'out':'in'}`}>
          <span>{message.message}</span>
        </div>
      )
      c-=1
      index-=1
    }
    return (
      <>
        {history}
      </>
    )
  }
    return(
        <>
        <div className="chats">
          {messages?
          <>
          {chat_history()}
          </>
          :
            <div className="empty">
            <div className="empty-icon">
              
            </div>
            <p className="empty-title h5">You have no new messages</p>
            
          </div>
          }
        </div>
        </>
    )
}