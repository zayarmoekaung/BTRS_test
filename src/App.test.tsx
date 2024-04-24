import { screen, waitFor } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"
import type { AppStore } from "./app/store"
import { makeStore, store } from "./app/store"
import { setUsername,selectUserName } from "./features/user/userSlice"
import { sendMessage,setMessage,selectMessage } from "./features/input/inputSlice"
import { fetchMessages,selectMessages } from "./features/chats/chatsSlice"
interface LocalTestContext {
    store: AppStore
  }
  test("App should render", () => {
    renderWithProviders(<App />)
    expect(screen.getByText(/Send/i)).toBeInTheDocument()
  })
  test("Username should be able to set",()=>{
    expect(selectUserName(store.getState())).toBe(null)
    store.dispatch(setUsername('Zayar'))
    expect(selectUserName(store.getState())).toBe('Zayar')
  })
  test("Message input should be able to set",()=>{
    expect(selectMessage(store.getState())).toBe("")
    store.dispatch(setMessage("Test Message"))
    expect(selectMessage(store.getState())).toBe("Test Message")
  })
  test("Message sholud be able to send and reterive",()=>{
    localStorage.removeItem('chatMessages')
    expect(selectMessages(store.getState()).length).toBe(0)
    store.dispatch(setMessage("Test Message 2"))
    expect(selectMessage(store.getState())).toBe("Test Message 2")
    store.dispatch(sendMessage("Zayar"))
    store.dispatch(fetchMessages())
    expect(selectMessages(store.getState()).length).toBe(1)
    expect(selectMessages(store.getState())[0].message).toBe("Test Message 2")
  })