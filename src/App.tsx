import "./App.css"
import "spectre.css"
import { Chats } from "./features/chats/Chats"
const App = () => {
  return (
    <div className="App">
      <section className="container">
        <Chats/>
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
