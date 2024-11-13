
function CV({ formData, handleEdit }) {
  return (
    <div className="cv-container">
      <h1>My CV</h1>
      <h2>Personal Information</h2>
      <div className="cv">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>About Me:</strong> {formData.about}</p>
      </div>
      <h2>Education</h2>
      <div className="cv">
        <p><strong>School:</strong> {formData.schoolName}</p>
        <p><strong>Degree:</strong> {formData.degree}</p>
        <p><strong>Start Date:</strong> {formData.start}</p>
        <p><strong>End Date:</strong> {formData.end}</p>
      </div>
      <h2>Work Experience</h2>
      <div className="cv">
        <p><strong>Company:</strong> {formData.company}</p>
        <p><strong>Job Title/Position:</strong> {formData.jobTitle}</p>
        <p><strong>Job Description:</strong> {formData.jobDescription}</p>
        <p><strong>Start Date:</strong> {formData.jobStart}</p>
        <p><strong>End Date:</strong> {formData.jobEnd}</p>
      </div>
      <button onClick={handleEdit} className="edit-btn">Edit</button>
    </div>
  );
};

export default CV;
