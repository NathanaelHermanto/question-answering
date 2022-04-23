import React from 'react';
import { Routes as RouterLink, Route } from "react-router-dom";
import Home from './Home'
import About from './About'

const Routes = () => {
  return (
    <>
        <RouterLink>
            <Route exact path='/question-answering' element={<Home/>}/>
            <Route path='/about' element={<About/>}/> 
        </RouterLink>
    </>
  )
}

export default Routes;