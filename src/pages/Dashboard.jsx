import { useOutletContext } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import jobinterview from "../icons/job-interview.png";
import joboffer from "../icons/job-offer.png";
import rejected from "../icons/restriction.png";
import pending from "../icons/pending.png";
import application from "../icons/website.png";

const Dashboard = () => {
  const { applications } = useOutletContext();

  // Piece 1: stat calculations yahan
  const totalApplications = applications.length;
  const appliedCount = applications.filter(app=>app.status === "applied").length;
  const interviewCount = applications.filter(app=>app.status.toLowerCase() === "interview").length;
  const offerCount = applications.filter(app=>app.status.toLowerCase() === "offer").length;
  const rejectedCount = applications.filter(app=>app.status.toLowerCase() === "rejected").length;
  const pendingCount = applications.filter(app=>app.status.toLowerCase() === "pending").length;
  const appliedPercent = totalApplications > 0 ? Math.round((appliedCount / totalApplications) * 100) : 0;
  const interviewPercent = totalApplications > 0 ? Math.round((interviewCount / totalApplications) * 100) : 0;
  const offerPercent = totalApplications > 0 ? Math.round((offerCount / totalApplications) * 100) : 0;
  const rejectedPercent = totalApplications > 0 ? Math.round((rejectedCount / totalApplications) * 100) : 0;
  const pendingPercent = totalApplications > 0 ? Math.round((pendingCount / totalApplications) * 100) : 0;
 
  // Piece 2: chart data yahan
  const chartData = [
    { name: "Applied", value: appliedCount, color: "#3b82f6" },
    { name: "In Interview", value: interviewCount, color: "#f59e0b" },
    { name: "Offer", value: offerCount, color: "#10b981" },
    {name: "Rejected", value: rejectedCount, color: "#ef4444" },
    {name: "Pending", value: pendingCount, color: "#9ca3af" },
  ];

  // Piece 3: recent applications yahan
  const recentApplications = [...applications].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  // Piece 4: upcoming interviews yahan
  const upcomingInterviews = applications.filter((app) => app.status === "Interview");

  return (
    <div className="dashboard-page">
      <div className="dashboard-stats">
        {applications.length === 0 ? (
          <p>No applications yet. Start by adding some!</p>
        ) : (
          <div className="stat-cards">
            <div className="stat-card">
                <div className="stat-icon">
  <img src={application} alt="Total Applications" />
</div>
              <h3>{totalApplications}</h3>
              <p>Total Applications</p>
            </div>
            
            <div className="stat-card">
                <div className="stat-icon">
  <img src={jobinterview} alt="In Interview" />
</div>
              <h3>{interviewCount}</h3>
              <p>In Interview</p>
              <p className="stat-percent">{interviewPercent}% of total</p>
            </div>
            <div className="stat-card">
                <div className="stat-icon">
  <img src={joboffer} alt="Offer" />
</div>
              <h3>{offerCount}</h3>
              <p>Offer</p>
              <p className="stat-percent">{offerPercent}% of total</p>
            </div>
            <div className="stat-card">
                <div className="stat-icon">
  <img src={rejected} alt="Rejected" />
</div>
              <h3>{rejectedCount}</h3>
              <p>Rejected</p>
              <p className="stat-percent">{rejectedPercent}% of total</p>
            </div>
            <div className="stat-card">
                <div className="stat-icon">
  <img src={pending} alt="Pending" />
</div>
              <h3>{pendingCount}</h3>
              <p>Pending</p>
              <p className="stat-percent">{pendingPercent}% of total</p>
            </div>
          </div>
        )}
      </div>

      <div className="dashboard-grid">
        <div className="chart-card">
          <h3>Applications by Status</h3>
          <PieChart width={250} height={250}>
            <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="recent-card">
          <h3>Recent Applications</h3>
         {recentApplications.map((app) => (
            <div key={app.id} className="recent-item">
              <div className="recent-item-info">
                <h4>{app.companyName}</h4>
                <p>{app.role}</p>
              </div>
              <span className={`recent-status ${app.status.toLowerCase().replace(" ", "-")}`}>
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="interviews-card">
        <h3>Upcoming Interviews</h3>
        
      </div>
    </div>
  );
};

export default Dashboard;