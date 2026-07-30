import Sidebar from './components/sidebar'
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header title="..." />
        <Outlet />
      </div>
    </div>
  );
}

export default App