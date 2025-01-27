import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { createContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
export const ItemContext = createContext([]);
export const WishContext = createContext([]);


function App() {

  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  const increaseCart = (title) => {
    setCart([...cart, title]);
    toast.success('Successfully Added in Cart!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const handleWish = (title) => {
    setWish([...wish, title]);
    toast.success('Successfully Added in Wish List!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className='container mx-auto'>
      <ItemContext.Provider value={{ cart, increaseCart }}>
        <WishContext.Provider value={{ wish, handleWish }}>
          <NavBar></NavBar>
          <Outlet></Outlet>
        </WishContext.Provider>
      </ItemContext.Provider>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
