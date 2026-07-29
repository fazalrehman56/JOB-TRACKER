

const applications = [
  { id: 1, initials: "SL", color: "#0ea5e9", company: "Systems Limited", role: "Frontend Developer Intern", status: "Applied", source: "LinkedIn", date: "May 20, 2024" },
  { id: 2, initials: "1C", color: "#111827", company: "10Pearls", role: "React Developer", status: "In Interview", source: "LinkedIn", date: "May 15, 2024" },
  { id: 3, initials: "f3", color: "#dc2626", company: "Folio3", role: "Web Developer", status: "Rejected", source: "Indeed", date: "May 10, 2024" },
  { id: 4, initials: "DN", color: "#16a34a", company: "DevNest", role: "Frontend Developer", status: "Applied", source: "Company Website", date: "May 8, 2024" },
  { id: 5, initials: "CP", color: "#7c3aed", company: "CodePixel", role: "JavaScript Developer", status: "In Interview", source: "LinkedIn", date: "May 5, 2024" },
];

const AllApplications = () => {
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
                    <span>{app.company}</span>
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
                    <button className="icon-btn edit">✏️</button>
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