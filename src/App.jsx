import { useState } from "react"
import "./App.css"
import Hello from "./components/hello"
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Hello />
    </div>
  )
}

export default App
