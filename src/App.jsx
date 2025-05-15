import './assets/css/reset.css'
import {useState} from 'react'
import {  Route, Routes } from 'react-router-dom'
import AllBlog from "./components/pages/allBlog/AllBlog";
import Allportfolio from "./components/pages/allPortfolio/Allportfolio";
import HomePage from "./components/pages/home/HomePage";
import SingleBlog from './components/pages/allBlog/SingleBlog';

import DataContextProviderFun from './components/contextApi/DataContext'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/fontawesome.6.7.2.css"
import Error404 from './components/pages/404/Error404';


function App() {
const [loading,setLoading]=useState(true)
const loader = document.getElementById('loader')
if(loader){
    setTimeout(()=> {
        loader.style.display='none';
        setLoading(false)
    }, 2000);
}
  return (
    !loading && (
   <DataContextProviderFun>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/allPortfolio' element={<Allportfolio />} />
      <Route path='/allBlog' element={<AllBlog />} />
      <Route path='/404' element={<Error404 />} />

      <Route path='/singleBlog' element={<SingleBlog />} />
    </Routes>
    </DataContextProviderFun>
   ) 
  )
}

export default App


/*

*/