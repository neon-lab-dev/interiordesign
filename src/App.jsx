import BestSellers from "./Components/BestSellers/BestSellers"
import Hero from "./Components/Hero/Hero"
import { Route, Routes } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Hero />
      <BestSellers />
    </>
  )
}

const Login = () => {
  return (
    <>
      Welcome to login page
    </>
  )
}


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
