import { Toaster } from 'react-hot-toast'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Nabar'
import HomePage from './Pages/HomePage'

function App() {
 

  return (
    <>
      <Toaster />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
