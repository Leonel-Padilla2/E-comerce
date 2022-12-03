import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
