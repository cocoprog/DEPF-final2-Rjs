import './App.css';
import {
  Cart,
  Header,
  ItemDetailConteiner,
  ItemListContainer,
  Footer,
  Contact
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
        <Route path='/contacto' element={<Contact />}/>
        <Route path='/detail/:id' element={<ItemDetailConteiner />}/>
      </Routes>
      <Footer/>
    </ BrowserRouter>
  )
}

export default App;