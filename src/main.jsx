import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        // bgGradient: "linear(red.100 0%, orange.100 25%, yellow.100 50%)",
      },
    }),
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
