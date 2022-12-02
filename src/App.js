
import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';

import './App.css';
import SingleBlog from './Pages/SingleBlog/SingleBlog';
import Category from './Pages/Category/Category';
import axios from 'axios';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

axios.defaults.baseURL = 'http://ec2-35-91-145-26.us-west-2.compute.amazonaws.com:8080/';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/cat/:catId/:type" element={<Category />} />
        <Route path="/blog/:postId" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
