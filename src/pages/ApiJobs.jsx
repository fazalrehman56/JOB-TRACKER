import  { useState, useEffect } from "react";

const ApiJobs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const reponse = await fetch("https://api.joinrise.io/api/v1/jobs/public?page=1&limit=500&sort=asc&sortedBy=createdAt&includeDescription=true&isTrending=true");
        const jsonData = await reponse.json();
        setData(jsonData.result.jobs);
        console.log("Fetched API data:", jsonData.result.jobs);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rating, setRating] = useState("All Categories");
    const [locationFilter, setLocationFilter] = useState("All Locations");
    const filteredData = data.filter((job)=>{
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.owner.companyName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = rating==="All Categories" || job.owner.rating === rating;
     const matchesLocation = locationFilter==="All Locations" || job.locationAddress.toLowerCase().includes(locationFilter.toLowerCase());
      return matchesSearch && matchesRating && matchesLocation;
    });
    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex+itemsPerPage;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(startIndex, endIndex);
    useEffect(() => {
      setCurrentPage(1);
    }, [searchTerm, rating, locationFilter]);
    
  return (
    <div className="api-jobs-page">
      {/* Filter bar */}
      <div className="jobs-filter-bar">
        <div className="search-box">
          <span>🔍</span>
          <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} type="text" placeholder="Search jobs, titles, companies..." />
        </div>

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option>All Categories</option>
          <option>4.0</option>
          <option>4.3</option>
          <option>3.6</option>
          <option>0</option>
        </select>

        <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
          <option >All Locations</option>
          <option>Remote</option>
          <option>Singapore</option>
          <option>New York</option>
          <option>London</option>
          <option>Tokyo</option>
         
        </select>

        <button className="btn-refresh">↻ Refresh Jobs</button>
      </div>

      {/* Result count + sort */}
      <div className="jobs-meta">
        <span>Showing jobs</span>
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
        {paginatedData.map((job) => (
          <div className="job-card" key={job._id}>
            <div className="job-card-header">
              <img
                src={job.owner.photo}
                alt={job.owner.companyName}
                className="job-logo"
                onError={(e) => { e.target.src = "/avatar.jpg"; }}
              />
              <div>
                <h3>{job.title}</h3>
                <p className="job-company">{job.owner.companyName}</p>
                <p className="job-location">📍 {job.locationAddress}</p>
              </div>
              </div>

            <div className="job-tags">
              <span className="tag tag-hybrid">{job.type}</span>
              {job.owner.sector && (
                <span className="tag tag-full-time">{job.owner.sector}</span>
              )}
            </div>

            <p className="job-desc">
              {job.owner.rating !== "unknown"
                ? `⭐ ${job.owner.rating} rating • `
                : ""}
              Posted on {new Date(job.createdAt).toLocaleDateString()}
                </p>

            <div className="job-actions">
              <button className="btn-save">🔖 Save</button>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apply"
              >
                ↗ Apply
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination + per-page selector */}
      <div className="jobs-footer">
        <div className="pagination">
           <button
              className="page-btn"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              ›
            </button>
          {Array.from({length : totalPages}, (_,index)=>index+1).map((pageNum)=>(
            <button
              key={pageNum}
              className={`page-btn ${currentPage === pageNum ? "active" : ""}`}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}
          <button
              className="page-btn"
             onClick={()=> setCurrentPage((prev)=>Math.max(prev - 1 ,1))}
            >
              ‹
            </button>
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