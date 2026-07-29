import dashboardIcon from "../icons/noun-dashboard-1133234.png";
import addIcon from "../icons/noun-add-4995480.png";
import clipboardIcon from "../icons/noun-clipboard-65487.png";
import jobIcon from "../icons/noun-job-7832834.png";
import worldIcon from "../icons/noun-world-7783964.png";
const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="hero-heading-img">
                <img src={jobIcon} alt="Hero" className="hero-img" />
                <div className="hero-heading">
                    <span>Job Application</span>
                    <span>Tarcker</span>
                </div>
            </div>

            <nav className="sidebar-content">
                <div className="dashbord">
                    <img src={dashboardIcon} alt="Dashbord" className="dashbord-img" />
                    <span>DASHBORD</span>
                </div>
                <div className="add-application">
                    <img src={addIcon} alt="Add Application" className="add-application-img" />
                    <span>ADD APPLICATION</span>
                </div>
                <div className="all-applications">
                    <img src={clipboardIcon} alt="All Applications" className="all-applications-img" />
                    <span>ALL APPLICATIONS</span>
                </div>
                <div className="api-job">
                    <img src={worldIcon} alt="API JOB" className="api-job-img" />
                    <span>API JOB</span>
                </div>

            </nav>

          <footer className="sidebar-footer">
                <div className="profile">
                    <img src={jobIcon} alt="Profile" className="profile-img" />
                    <div>Stay orgnizeed and </div>
                    <span>LAnd your dream job </span>
                </div>
            </footer>

        </div>
    );
};

export default Sidebar;