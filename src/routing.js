import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/home/Home';


const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Home/>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routing;