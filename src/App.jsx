import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { createContext, useState } from 'react'
export const ItemContext = createContext([]);
export const WishContext = createContext([]);


function App() {

  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  const increaseCart = (title) => {
    setCart([...cart, title]);
  }

  const handleWish = (title) => {
    setWish([...wish, title]);
  }
  
  return (
    <div className='container mx-auto'>
      <ItemContext.Provider value={{ cart, increaseCart }}>
        <WishContext.Provider value={{wish, handleWish}}>
          <NavBar></NavBar>
          <Outlet></Outlet>
        </WishContext.Provider>
      </ItemContext.Provider>
      <Footer></Footer>
    </div>
  )
}

export default App
