import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import NavbarComp from './Components/NavBarComp';
import Home from './Components/Home';
import Addmenu from './Components/AddMenu';
import AddCategory from './Components/AddCategory';
import AddMenu from './Components/AddMenu';
import AddDish from './Components/AddDish';
import DeleteDish from './Components/DeleteDish';
import ShowMenu from './Components/ShowMenu';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ShowCategory from './Components/ShowCategory';
import Showdish from './Components/Showdish';
import DeleteCategory from './Components/DeleteCategory';
import EditDish from './Components/EditDish';
import Login from './Components/Login';

function App() {
  return (

    <>
    
      <NavbarComp />
      {/* <Home /> */}
      {/* <ShowMenu /> */}

      <Routes>
        <Route path='/ShowMenu' element={<ShowMenu />} />
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/AddMenu' element={< AddMenu />} />
        <Route path='/AddCategory' element={< AddCategory />} />
        <Route path='/AddDish' element={< AddDish />} />
        <Route path='/DeleteDish' element={< DeleteDish />} />
        <Route path='/DeleteCategory' element={< DeleteCategory/>} />
        <Route path='/EditDish' element={< EditDish/>} />
        <Route path='/ShowCategory' element={< ShowCategory />} />
        <Route path='/Showdish' element={< Showdish />} />
      </Routes>
      {/* <MenuItems /> */}
      {/* <Addmenu />
      <br />
      <AddCategory />
      <br />
      <AddDish />
      <br />
      <DeleteDish /> */}
    </>
  );
}

export default App;
