
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const AllApplications = () => {
  const navigate = useNavigate();
  const {  applications, editApplication, editingApplication, setEditingApplication, deleteApplication } = useOutletContext(); // Access the applications array and addApplication function from context;
    const [currentPage, setCurrentPage] = useState(1);
  const itemperPage = 5; // Number of applications per page
  const startIndex = (currentPage - 1) * itemperPage;
  const endIndex = startIndex + itemperPage;
  const currentApplications = applications.slice(startIndex, endIndex);
  const totalPages = Math.ceil(applications.length / itemperPage);
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
            {currentApplications.map((app) => (
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
                    <button onClick={() => {
                      setEditingApplication(app)
                      console.log("Editing application:", app);
                      navigate("/add-application")
                    }} className="icon-btn edit">✏️</button>
                    <button onClick={() => {
                      deleteApplication(app.id);
                    }} className="icon-btn delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer / Pagination */}
        <div className="table-footer">
          <span>
  Showing {startIndex + 1} to {Math.min(endIndex, applications.length)} of {applications.length} applications
</span>
          <div className="pagination">
            <button
              className="page-btn"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
              <button key={pageNum}
                className={`page-btn ${currentPage === pageNum ? "active" : ""}`}
                onClick={() => setCurrentPage(pageNum)}
              >{pageNum}</button>
            ))}
            <button
              className="page-btn"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AllApplications;