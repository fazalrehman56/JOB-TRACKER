import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const AddApplication = () => {
  const { addApplication , editingApplication,setEditingApplication,editApplication } = useOutletContext(); // Access the addApplication function from context;
   

  useEffect(() => {
    if (editingApplication) {
      setFormData({
        companyName: editingApplication.companyName,
        role: editingApplication.role,
        status: editingApplication.status,
        source: editingApplication.source,
        date: editingApplication.date,
      });
    }
  }, [editingApplication]);

  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    status: "",
    source: "",
    date: "",
    
  });
  

  const handleChange = (e) => {

    setFormData({...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit= (e)=>{
     e.preventDefault();
      console.log("editingApplication is:", editingApplication);
    if(editingApplication){
        
      editApplication(editingApplication.id, formData);
      setEditingApplication(null);
    }
    else{
   
      const newApplication = {
    ...formData,
    id: Date.now(),  // simple unique id using timestamp
    initials: formData.companyName.slice(0, 2).toUpperCase(), // first 2 letters
    color: "#0ea5e9", // or randomly pick from a preset array
  };
    addApplication(newApplication);
    setFormData({
      companyName: "",
      role: "",
      status: "",
      source: "",
      date: "",
      
    });
  }
  }
       
  return (
    <div className="add-app-page">
      <div className="add-app-card">
        {/* LEFT: form */}
        <form  onSubmit={handleSubmit}  className="add-app-form">
          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input name="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="Enter company name" />
          </div>

          <div className="form-group">
            <label htmlFor="role">Job Role / Position</label>
            <input name = "role" value={formData.role} onChange={handleChange} type="text" placeholder="Enter job role" />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} id="status">
              <option value="">Select status</option>
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="source">Source</label>
            <input name="source" value={formData.source} onChange={handleChange} type="text" placeholder="Where did you find this job?" />
          </div>

          <div className="form-group">
            <label htmlFor="date">Application Date</label>
            <input name="date" value={formData.date} onChange={handleChange} type="date" />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes (Optional)</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Add any notes about this application..."></textarea>
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