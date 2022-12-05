import { Route, Routes, HashRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <HashRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
