import Sidebar from "./sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tittle, setTittle] = useState("JOB APPLICATION TRACKER");

  // Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Applications
  const [applications, setApplications] = useState(() => {
    const storedApplications = localStorage.getItem("applications");

    return storedApplications
      ? JSON.parse(storedApplications)
      : [
          {
            companyName: "System Limited",
            role: "frontend developer",
            status: "pending",
            source: "llinkedin",
            date: "2-23-2024",
            id: 1,
          },
          {
            companyName: "google",
            role: "backend developer",
            status: "offer",
            source: "linkedin",
            date: "3-23-2024",
            id: 2,
          },
          {
            companyName: "Microsoft",
            role: "Data Scientist",
            status: "rejected",
            source: "linkedin",
            date: "6-23-2024",
            id: 3,
          },
          {
            companyName: "Meta",
            role: "frontend developer",
            status: "interview",
            source: "linkedin",
            date: "7-23-2024",
            id: 4,
          },
          {
            companyName: "Amazon",
            role: "frontend developer",
            status: "pending",
            source: "linkedin",
            date: "2-23-2024",
            id: 5,
          },
          {
            companyName: "Netflix",
            role: "frontend developer",
            status: "interview",
            source: "linkedin",
            date: "8-23-2026",
            id: 6,
          },
        ];
  });

  const [editingApplication, setEditingApplication] = useState(null);

  // Save applications in localStorage
  useEffect(() => {
    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  // Reset applications
  const onReset = () => {
    setApplications([]);
  };

  // Edit application
  const editApplication = (id, updatedApplication) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id
          ? { ...app, ...updatedApplication }
          : app
      )
    );
  };

  // Delete application
  const deleteApplication = (id) => {
    setApplications((prevApplications) =>
      prevApplications.filter((app) => app.id !== id)
    );
  };

  // Add application
  const addApplication = (newApplication) => {
    setApplications((prevApplications) => [
      ...prevApplications,
      newApplication,
    ]);
  };

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <Sidebar
        setTittle={setTittle}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content */}
      <div className="main-content">

        {/* Header */}
        <Header
          onReset={onReset}
          title={tittle}
          onMenuClick={() =>
            setSidebarOpen((prev) => !prev)
          }
        />

        {/* Page */}
        <Outlet
          context={{
            deleteApplication,
            applications,
            addApplication,
            editApplication,
            editingApplication,
            setEditingApplication,
          }}
        />

      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

    </div>
  );
}

export default App;