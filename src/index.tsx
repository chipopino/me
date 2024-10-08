import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {ContextPriveder} from 'components/Context';
import Modal from 'components/Modal';
import { cn } from 'methodes/global';
import './index.css';

const App: React.FC = () => {

  return <div className={cn(
    'overflow-hidden w-screen h-screen',
    'bg-background flex flex-col'
  )}>
    <ContextPriveder>
      <Modal/>

    </ContextPriveder>
  </div>

};

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);