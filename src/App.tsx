import "./App.css"
import "spectre.css"

const App = () => {
  return (
    <div className="App">
      <section className="container">
        <div className="chats">
          <div className="empty">
            <div className="empty-icon">
              
            </div>
            <p className="empty-title h5">You have no new messages</p>
            
          </div>
        </div>
        <div className="columns input_bar">
          <div className="column col-8">
            <input type="text" name="message" id="message" className="form-input" placeholder="Message" />
          </div>
          <div className="btn btn-primary column col-4">Send</div>
        </div>
      </section>
    </div>
  )
}

export default App
