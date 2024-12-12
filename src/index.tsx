import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextPriveder } from 'components/Context';
import Modal from 'components/Modal';
import NavBar from 'components/NavBar';
import { cn } from 'methodes/global';
import './index.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from 'components/pages/home/Home';
import MyLife from 'components/pages/my-life/MyLife';
import MyWork from 'components/pages/mywork/MyWork';
import Hobbyc from 'components/pages/hobbyc/Hobbyc';
import Creations from 'components/pages/creations/Creations';
import Thoughts from 'components/pages/my-thoughts/MyThoughts';


function Main() {
  return <div className={cn(
    'overflow-hidden w-full h-full',
    'bg-background flex flex-col'
  )}>
    <ContextPriveder>
      <Modal />
      <NavBar />
      <div className='w-full h-full relative'>
        <Home />
        <MyLife />
        <MyWork />
        <Hobbyc />
        <Creations />
        <Thoughts />
      </div>
    </ContextPriveder>
  </div>

};

function App() {
  return (
    <Router basename='/me'>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </Router>
  );
}

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);