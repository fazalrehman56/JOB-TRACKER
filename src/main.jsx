import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import AddApplication from './pages/AddApplication';
import AllApplications from './pages/AllApplications';
import ApiJobs from './pages/ApiJobs';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    
    path: "/", element: <App />,
    
    children: [
      {index: true, element: <Navigate to="/add-application" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "add-application", element: <AddApplication /> },
      { path: "all-applications", element: <AllApplications /> },
      { path: "api-job", element: <ApiJobs /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)