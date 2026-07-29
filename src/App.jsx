import { useState } from 'react'
import Sidebar from './components/sidebar'
import './App.css'

import Header from './components/Header'
import AddApplication from './pages/AddApplication';
import AllApplications from './pages/AllApplications';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        {/* <Header title="..." /> */}
        <AllApplications/>
        {/* <AddApplication/> */}
      </div>
    </div>
  );
}

export default App
