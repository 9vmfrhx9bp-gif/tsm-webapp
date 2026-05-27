
import Homepage from './components/Homepage'
import Auftritte from './components/Auftritte'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auftritte" element={<Auftritte />} />

      </Routes>

    </>

  )
}

export default App
