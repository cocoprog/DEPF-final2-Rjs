import './App.css';
import {
  Cart,
  Header,
  ItemDetailConteiner,
  ItemListContainer
} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/category/:category' element={<ItemListContainer />}/>
        <Route path='/contacto' element={<div>Contacto</div>}/>
        <Route path='/detail/:id' element={<ItemDetailConteiner />}/>
      </Routes>
    </ BrowserRouter>
  )
}

export default App;