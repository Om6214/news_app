import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar'
import News from './components/News';
import About from './components/about';
import Intro from './components/intro';
import Contact from './components/contact';
import Detail from './components/Detail';

const App = () => {
  return <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route exact path='/entertainment' element={<News key="entertainment" catagory="entertainment"  />} />
      <Route exact path='/sports' element={<News key="sports" catagory="sports"  />} />
      <Route exact path='/health' element={<News key="health"  catagory="health"  />} />
      <Route exact path='/business' element={<News key="business" catagory="business"  />} />
      <Route exact path='/technology' element={<News key="technology" catagory="technology"  />} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/home' element={<News key="general" catagory="general"  />} />
      <Route exact path='/science' element={<News key="science" catagory="science"  />} />
      <Route exact path='/about' element={<About key="about"/>} />
      <Route exact path='/intro' element={<Intro/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/detail' element={<Detail/>} />
    </Routes>
  </BrowserRouter>
    
};

export default App;
