import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from './user.module.css'
import { selectUserName } from "./userSlice"
import { setUsername } from "./userSlice"
export const User = () => {
    const dispatch = useAppDispatch()
    
    const username = useAppSelector(selectUserName)

    const [input,setInput] = useState<string>("")
    const handleChange = (text:string)=>{
        setInput(text)
    }
    const handleSubmit = ()=>{
        dispatch(setUsername(input))
    }
    return (
        <>
            {username ?
                <>
                </>
                :
                <>
                    <div className="modal active" id="modal-id">
                        <div className="modal-container">
                            <div className="modal-header">
                                <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
                                <div className="modal-title h5">Add User Name</div>
                            </div>
                            <div className="modal-body">
                                <div className="content">
                                    <input type="text" className='form-input' placeholder='User Name' value={input} onChange={e=>{handleChange(e.target.value)}}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className='btn btn-primary column col-12' onClick={handleSubmit}>Submit</div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}