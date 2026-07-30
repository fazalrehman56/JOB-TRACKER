
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const AllApplications = () => {
  const navigate = useNavigate();
  const { applications , editApplication, editingApplication, setEditingApplication } = useOutletContext(); // Access the applications array and addApplication function from context;

  return (
    <div className="all-apps-page">
      {/* Header */}
      <div className="all-apps-header">
        <div>
          <h1>All Applications</h1>
          <p>Here is a list of all your job applications.</p>
        </div>
        <button className="btn-add-application">+ Add Application</button>
      </div>

      {/* Filter bar */}
      <div className="filter-bar">
        <div className="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search by company or role..." />
        </div>

        <select>
          <option>All Status</option>
          <option>Applied</option>
          <option>In Interview</option>
          <option>Rejected</option>
        </select>

        <select>
          <option>All Sources</option>
          <option>LinkedIn</option>
          <option>Indeed</option>
          <option>Company Website</option>
        </select>

        <select>
          <option>Sort by: Newest</option>
          <option>Sort by: Oldest</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>COMPANY</th>
              <th>ROLE</th>
              <th>STATUS</th>
              <th>SOURCE</th>
              <th>APPLIED ON</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>
                  <div className="company-cell">
                    <div className="company-logo" style={{ backgroundColor: app.color }}>
                      {app.initials}
                    </div>
                    <span>{app.companyName}</span>
                  </div>
                </td>
                <td>{app.role}</td>
                <td>
                  <span className={`badge badge-${app.status.replace(/\s+/g, "-").toLowerCase()}`}>
                    {app.status}
                  </span>
                </td>
                <td>{app.source}</td>
                <td>{app.date}</td>
                <td>
                  <div className="actions-cell">
                    <button onClick={()=>{
                      setEditingApplication(app)
                      console.log("Editing application:", app);
                      navigate("/add-application")
                    }} className="icon-btn edit">✏️</button>
                    <button className="icon-btn delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer / Pagination */}
        <div className="table-footer">
          <span>Showing 1 to 5 of 24 applications</span>
          <div className="pagination">
            <button className="page-btn">‹</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApplications;