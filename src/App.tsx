import "./App.css"
import "spectre.css"
import { Chats } from "./features/chats/Chats"
import { Input } from "./features/input/Input"
import { User } from "./features/user/User"
const App = () => {
  return (
    <div className="App">
      <section className="container">
        <Chats/>
        <Input/>
        <User/>
      </section>
    </div>
  )
}

export default App
