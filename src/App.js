import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar'
import News from './components/News';
import About from './components/about';
import Intro from './components/intro';
import Contact from './components/contact';

const App = () => {
  return <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route exact path='/entertainment' element={<News key="entertainment" catagory="entertainment" pageSize={30}/>} />
      <Route exact path='/sports' element={<News key="sports" catagory="sports" pageSize={30}/>} />
      <Route exact path='/health' element={<News key="health"  catagory="health" pageSize={30}/>} />
      <Route exact path='/business' element={<News key="business" catagory="business" pageSize={30}/>} />
      <Route exact path='/technology' element={<News key="technology" catagory="technology" pageSize={30}/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/home' element={<News key="general" catagory="general" pageSize={30}/>} />
      <Route exact path='/science' element={<News key="science" catagory="science" pageSize={30}/>} />
      <Route exact path='/about' element={<About key="about"/>} />
      <Route exact path='/intro' element={<Intro/>} />
      <Route exact path='/contact' element={<Contact/>} />
    </Routes>
  </BrowserRouter>
    
};

export default App;
