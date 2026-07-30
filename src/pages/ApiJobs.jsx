
const jobs = [
  { id: 1, initials: "G", color: "#ffffff", logoColor: "#4285F4", company: "Google", title: "Frontend Engineer", location: "Mountain View, CA • Remote", salary: "$160k – $200k", tags: ["Remote", "Full-time"], desc: "Build and scale user-facing features for Google products used by billions of people..." },
  { id: 2, initials: "aws", color: "#ffffff", logoColor: "#FF9900", company: "Amazon", title: "Software Development Engineer", location: "Seattle, WA • Hybrid", salary: "$150k – $180k", tags: ["Hybrid", "Full-time"], desc: "Work on distributed systems and cloud infrastructure that power Amazon services..." },
  { id: 3, initials: "MS", color: "#ffffff", logoColor: "#00A4EF", company: "Microsoft", title: "Product Manager", location: "Redmond, WA • Remote", salary: "$135k – $165k", tags: ["Remote", "Full-time"], desc: "Define product strategy and work cross-functionally to deliver impactful solutions..." },
  { id: 4, initials: "AI", color: "#ffffff", logoColor: "#10A37F", company: "OpenAI", title: "ML Engineer", location: "San Francisco, CA • Remote", salary: "$170k – $220k", tags: ["Remote", "Full-time"], desc: "Build and improve machine learning models that advance AI capabilities..." },
  { id: 5, initials: "S", color: "#ffffff", logoColor: "#1DB954", company: "Spotify", title: "Backend Engineer", location: "Stockholm, Sweden • Hybrid", salary: "€70k – €90k", tags: ["Hybrid", "Full-time"], desc: "Develop scalable backend services that power music experiences worldwide..." },
  { id: 6, initials: "N", color: "#ffffff", logoColor: "#000000", company: "Notion", title: "Software Engineer", location: "San Francisco, CA • Remote", salary: "$130k – $160k", tags: ["Remote", "Full-time"], desc: "Help build the tools that millions of people use to organize their work..." },
];

const ApiJobs = () => {
  return (
    <div className="api-jobs-page">
      {/* Filter bar */}
      <div className="jobs-filter-bar">
        <div className="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search jobs, titles, companies..." />
        </div>

        <select>
          <option>All Categories</option>
          <option>Engineering</option>
          <option>Product</option>
          <option>Design</option>
        </select>

        <select>
          <option>All Locations</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>On-site</option>
        </select>

        <button className="btn-refresh">↻ Refresh Jobs</button>
      </div>

      {/* Result count + sort */}
      <div className="jobs-meta">
        <span>Showing 18 jobs</span>
        <div className="sort-by">
          <span>Sort by:</span>
          <select>
            <option>Newest</option>
            <option>Salary: High to Low</option>
            <option>Salary: Low to High</option>
          </select>
        </div>
      </div>

      {/* Job cards grid */}
      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="job-card-header">
              <div className="job-logo" style={{ backgroundColor: job.logoColor === "#ffffff" ? "#f1f5f9" : "#ffffff" }}>
                {job.initials}
              </div>
              <div>
                <h3>{job.title}</h3>
                <p className="job-company">{job.company}</p>
                <p className="job-location">📍 {job.location}</p>
              </div>
            </div>

            <p className="job-salary">{job.salary}</p>

            <div className="job-tags">
              {job.tags.map((tag) => (
                <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
              ))}
            </div>

            <p className="job-desc">{job.desc}</p>

            <div className="job-actions">
              <button className="btn-save">🔖 Save</button>
              <button className="btn-apply">↗ Apply</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination + per-page selector */}
      <div className="jobs-footer">
        <div className="pagination">
          <button className="page-btn">‹</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">›</button>
        </div>

        <div className="per-page">
          <span>Show</span>
          <select>
            <option>6 per page</option>
            <option>12 per page</option>
            <option>24 per page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ApiJobs;