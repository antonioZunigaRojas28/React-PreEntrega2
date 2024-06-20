import './App.css'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
import Navbar from './components/navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/categoria/:id_categoria' element={<ItemListContainer/>}></Route>
            <Route path='/producto/:id_producto' element={<ItemDetailContainer/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
