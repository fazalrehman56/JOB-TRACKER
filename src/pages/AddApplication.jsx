

const AddApplication = () => {
  return (
    <div className="add-app-page">
      <div className="add-app-card">
        {/* LEFT: form */}
        <form className="add-app-form">
          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input id="company" type="text" placeholder="Enter company name" />
          </div>

          <div className="form-group">
            <label htmlFor="role">Job Role / Position</label>
            <input id="role" type="text" placeholder="Enter job role" />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status">
              <option value="">Select status</option>
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="source">Source</label>
            <input id="source" type="text" placeholder="Where did you find this job?" />
          </div>

          <div className="form-group">
            <label htmlFor="date">Application Date</label>
            <input id="date" type="date" />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes (Optional)</label>
            <textarea id="notes" placeholder="Add any notes about this application..."></textarea>
          </div>

          <div className="form-buttons">
            <button type="button" className="btn-cancel">Cancel</button>
            <button type="submit" className="btn-submit">Add Application</button>
          </div>
        </form>

        {/* RIGHT: illustration panel */}
        <div className="illustration-panel">
          <div className="illustration-icon">📥</div>
          <h3>Keep Track</h3>
          <p>Adding applications helps you stay organized and never miss an opportunity.</p>
        </div>
      </div>
    </div>
  );
};

export default AddApplication;