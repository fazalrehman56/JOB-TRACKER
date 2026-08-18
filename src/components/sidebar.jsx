import dashboardIcon from "../icons/noun-dashboard-1133234.png";
import addIcon from "../icons/noun-add-4995480.png";
import clipboardIcon from "../icons/noun-clipboard-65487.png";
import jobIcon from "../icons/noun-job-7832834.png";
import worldIcon from "../icons/noun-world-7783964.png";

import { NavLink } from "react-router-dom";

const Sidebar = ({
  setTittle,
  sidebarOpen,
  setSidebarOpen
}) => {

  const handleNavClick = (title) => {
    setTittle(title);

    // Mobile par link click karne ke baad sidebar close
    setSidebarOpen(false);
  };

  return (
    <div
      className={`sidebar ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >

      <div className="hero-heading-img">

        <img
          src={jobIcon}
          alt="Hero"
          className="hero-img"
        />

        <div className="hero-heading">
          <span>Job Application</span>
          <span>Tarcker</span>
        </div>

      </div>


      <nav className="sidebar-content">

        <div className="dashbord">

          <img
            src={dashboardIcon}
            alt="Dashboard"
            className="dashbord-img"
          />

          <NavLink
            onClick={() => handleNavClick("DASHBORD")}
            to="/dashboard"
          >
            DASHBORD
          </NavLink>

        </div>


        <div className="add-application">

          <img
            src={addIcon}
            alt="Add Application"
            className="add-application-img"
          />

          <NavLink
            onClick={() => handleNavClick("ADD APPLICATION")}
            to="/add-application"
          >
            ADD APPLICATION
          </NavLink>

        </div>


        <div className="all-applications">

          <img
            src={clipboardIcon}
            alt="All Applications"
            className="all-applications-img"
          />

          <NavLink
            onClick={() => handleNavClick("ALL APPLICATIONS")}
            to="/all-applications"
          >
            ALL APPLICATIONS
          </NavLink>

        </div>


        <div className="api-job">

          <img
            src={worldIcon}
            alt="API JOB"
            className="api-job-img"
          />

          <NavLink
            onClick={() => handleNavClick("API JOB")}
            to="/api-job"
          >
            API JOB
          </NavLink>

        </div>

      </nav>


      <footer className="sidebar-footer">

        <div className="profile">

          <img
            src={jobIcon}
            alt="Profile"
            className="profile-img"
          />

          <div>
            Stay orgnizeed and
          </div>

          <span>
            LAnd your dream job
          </span>

        </div>

      </footer>

    </div>
  );
};

export default Sidebar;