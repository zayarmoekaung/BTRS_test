import "./App.css"
import "spectre.css"
import { Chats } from "./features/chats/Chats"
import { Input } from "./features/input/Input"
const App = () => {
  return (
    <div className="App">
      <section className="container">
        <Chats/>
        <Input/>
      </section>
    </div>
  )
}

export default App
