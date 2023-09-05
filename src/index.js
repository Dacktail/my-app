import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Form from './component/Form';
import Header from './component/Header';
import MyCoin from './component/MyCoin';
import Coin from './component/Coin';
import CoinDetails from './component/CoinDetails';
import 'react-alice-carousel/lib/alice-carousel.css';


 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='home' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
       
        <Route path='myform' element={<Form />}></Route>
        <Route path='mycoin' element={<MyCoin />}></Route>
        <Route path='coin' element={<Coin />}></Route>
        <Route path='coin/:id' element={<CoinDetails/>}></Route>
        {/* <Route path='coin-details' element={<CoinDetails />}></Route> */}
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);


