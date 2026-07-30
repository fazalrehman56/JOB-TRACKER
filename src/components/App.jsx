import Sidebar from './sidebar'
import Header from './Header'
import { Outlet } from "react-router-dom";
import './App.css'
import { useState } from 'react';
function App() {
  const [tittle, setTittle] = useState("JOB APPLICATION TRACKER");
  return (
    <div className="app-layout">
      <Sidebar setTittle={setTittle} />
      <div className="main-content">
        <Header title={tittle} />
        <Outlet />
      </div>
    </div>
  );
}

export default App