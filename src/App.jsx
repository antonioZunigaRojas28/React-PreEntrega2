import './App.css'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
import Navbar from './components/navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartComponentContext } from './context/cartContext'
import Cart from './components/cart/cart'
import Checkout from './components/checkout/checkout'
function App() {
  return (
    <>
      <div>
        <CartComponentContext>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}></Route>
              <Route path='/categoria/:id_categoria' element={<ItemListContainer/>}></Route>
              <Route path='/item/:id_item' element={<ItemDetailContainer/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
            </Routes>
          </BrowserRouter>
        </CartComponentContext>
      </div>
    </>
  )
}

export default App
