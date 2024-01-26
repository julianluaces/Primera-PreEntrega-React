import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Nosotros from './components/Nosotros'
import Footer from './components/Footer'
import { CartProvider } from './context/cartContext'

const App = () => {

  return (

    <CartProvider>


      <BrowserRouter>




        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item' element={<ItemDetailContainer itemId={2} />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>


        <Footer />



      </BrowserRouter>

    </CartProvider>
  )

}

export default App






