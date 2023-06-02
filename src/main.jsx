import React from "react"
import ReactDOM from "react-dom/client"
import "./input.css"
import Home from "./components/Home.jsx"
import Features from "./components/Features.jsx"
import Banner from "./components/Banner.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <Features />
  </React.StrictMode>
)
