import { BrowserRouter, Routes, Route } from 'react-router-dom'
import House from './pages/House/house'
import Footer from './components/Footer/footer'
import SingleHouse from './pages/SingleHouse/singleHouse'
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/login'

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<House />} />
        <Route exact path="singleHouse" element={<SingleHouse />} />
        <Route exact path='login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
