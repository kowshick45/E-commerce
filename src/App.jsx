import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Components from './Components/Components'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Buypro from './Pages/Buypro'
 

 function App() {

  return (
    <>
      <BrowserRouter><Routes>
        <Route path='/' element={<Components/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Buypro' element={<Buypro/>}/>
        
        </Routes></BrowserRouter>
    </>
  )
}

export default App
