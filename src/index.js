import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import BirthdayPage from './routes/BirthdayPage';
import ReceptionPage from './routes/ReceptionPage';
import AnniversaryPage from './routes/AnniversaryPage';
import LoginPage from './routes/LoginPage';
import HeroPage from './routes/HeroPage';
import MainPage from './routes/MainPage';
import BlogPage from './routes/BlogPage';
import BlogIdeasPage from './routes/BlogIdeasPage';

ReactDOM.render(
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Hero' element={<HeroPage />} />
      <Route path='/Blog' element={<BlogPage />} />
      <Route path='/BlogIdeas' element={<BlogIdeasPage />} />
      <Route path='/Main' element={<MainPage />} />
      <Route path='/birthday' element={<BirthdayPage />} />
      <Route path='/Reception' element={<ReceptionPage />} />
      <Route path='/Anniversary' element={<AnniversaryPage />} />
      <Route path='/Login' element={<LoginPage />} />
      
    </Routes>
   
    </BrowserRouter>,
      
    
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
