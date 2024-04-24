import styles from './user.module.css'

export const User = () =>{
    return(
        <>
        <div className="modal active" id="modal-id">
  <div className="modal-container">
    <div className="modal-header">
      <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
      <div className="modal-title h5">Add User Name</div>
    </div>
    <div className="modal-body">
      <div className="content">
       <input type="text" className='form-input' placeholder='User Name'/>
      </div>
    </div>
    <div className="modal-footer">
      <div className='btn btn-primary column col-12'>Submit</div>
    </div>
  </div>
</div>
        </>
    )
}