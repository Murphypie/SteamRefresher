import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Splash />} />
                <Route path='/login' element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;