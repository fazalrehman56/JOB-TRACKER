import Sidebar from './sidebar'
import Header from './Header'
import { Outlet } from "react-router-dom";
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [tittle, setTittle] = useState("JOB APPLICATION TRACKER");
  const [applications, setApplications] = useState(()=>{
   const storedApplications = localStorage.getItem("applications");
  return storedApplications ? JSON.parse(storedApplications) :[{  companyName: "System Limited",
      role: "frontend developer",
      status: "pending",
      source: "linkedin",
      date: "2-23-2024",
      id : 1
    },{  companyName: "google",
      role: "backend developer",
      status: "offer",
      source: "linkedin",
      date: "3-23-2024",
      id : 2
    },{  companyName: "Microsoft",
      role: "Data Scientist",
      status: "rejected",
      source: "linkedin",
      date: "6-23-2024",
      id : 3
    },{  companyName: "Meta",
      role: "frontend developer",
      status: "interview",
      source: "linkedin",
      date: "7-23-2024",
      id : 4
    },{  companyName: "Amazon",
      role: "frontend developer",
      status: "pending",
      source: "linkedin",
      date: "2-23-2024",
      id : 5
    },{  companyName: "Netflix",
      role: "frontend developer",
      status: "interview",
      source: "linkedin",
      date: "8-23-2026",
      id : 6
    }]
  }); // starts empty, or with dummy data
  const [editingApplication, setEditingApplication] = useState(null);
 useEffect(() => {
 localStorage.setItem("applications",JSON.stringify(applications));
 },[applications])
  const onReset = ()=>{
    setApplications([]);
  }
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
        <Header onReset={onReset} title={tittle} />
 
        <Outlet context={{ deleteApplication, applications, addApplication, editApplication, editingApplication, setEditingApplication }} />
      </div>
    </div>
  );
}

export default App