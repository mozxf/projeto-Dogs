import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { Footer } from "../Components/Footer/Footer"
import { Home } from "../Components/Home/Home"
import { Login } from "../Components/Login/Login"

import "./App.css"
import styles from "./App.module.scss"


function App() {

  return (
 <BrowserRouter>
 <Header />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Login" element={<Login />} />

</Routes>
 
 <Footer />
 </BrowserRouter>)
}

export default App
