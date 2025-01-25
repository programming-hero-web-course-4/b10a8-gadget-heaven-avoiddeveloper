import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='container mx-auto'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default App
