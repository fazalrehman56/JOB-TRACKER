import Sidebar from './sidebar'
import Header from './Header'
import { Outlet } from "react-router-dom";
import './App.css'
import { useState } from 'react';
function App() {
  const [tittle, setTittle] = useState("JOB APPLICATION TRACKER");
  const [applications, setApplications] = useState([]); // starts empty, or with dummy data
  const [editingApplication, setEditingApplication] = useState(null);
 
  const editApplication = (id, updatedApplication) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id ? { ...app, ...updatedApplication } : app
      )
    );
  };
   const deleteApplication = (id) => {
    const Delete = applications.filter((app) => app.id !== id);
    setApplications(Delete);
  };

 const addApplication = (newApplication) => {
  setApplications((prevApplications) => [...prevApplications, newApplication]);
};


 
  return (
    <div className="app-layout">
      <Sidebar setTittle={setTittle} />
      <div className="main-content">
        <Header title={tittle} />
 
        <Outlet context={{ deleteApplication, applications, addApplication, editApplication, editingApplication, setEditingApplication }} />
      </div>
    </div>
  );
}

export default App