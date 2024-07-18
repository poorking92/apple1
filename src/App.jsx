import React from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from './Layout';
import Iphone15pro from './product/Iphone15pro';
import InformationView from './slide/InformationView';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path="/" element={<Iphone15pro/>}/> 
      <Route path='/' element={<InformationView/>}/>
    </Routes>
  );
};

export default App;