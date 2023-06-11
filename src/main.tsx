import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProps } from './interfaces.ts';

const DATA: TodoProps[] = [];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)
