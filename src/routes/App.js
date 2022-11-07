import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='*' element={<h1>Nothing here</h1>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
