import InputField from './InputField';

function Form ({ formData, handleInputChange, handleSubmit }) {
  return (
    <div className="form-container">
      <h1>CV Creator</h1>
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          handleInputChange={handleInputChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          handleInputChange={handleInputChange}
        />
        <InputField
          label="Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          handleInputChange={handleInputChange}
        />
        <div className="input-group">
          <label>About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleInputChange}
          />
        </div>
        <h2>Education</h2>
        <InputField
          label="School"
          type="text"
          name="schoolName"
          value={formData.schoolName}
          handleInputChange={handleInputChange}
        />
        <InputField
          label="Major"
          type="text"
          name="degree"
          value={formData.degree}
          handleInputChange={handleInputChange}
        />
        <div className="date flex">
          <label>Start Date</label>
          <input
            type ="date"
            name="start"
            value={formData.start}
            onChange={handleInputChange}
          />
        </div>
        <div className="date flex">
          <label>End Date</label>
          <input
            type ="date"
            name="end"
            value={formData.end}
            onChange={handleInputChange}
          />
        </div>
        <h2>Work Experience</h2>
        <InputField
          label="Company"
          type="text"
          name="company"
          value={formData.company}
          handleInputChange={handleInputChange}
        />
        <InputField
          label="Job Title"
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          handleInputChange={handleInputChange}
        />
        <div className="input-group">
          <label>Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="date flex">
          <label>Start Date</label>
          <input
            type ="date"
            name="jobStart"
            value={formData.jobStart}
            onChange={handleInputChange}
          />
        </div>
        <div className="date flex">
          <label>End Date</label>
          <input
            type ="date"
            name="jobEnd"
            value={formData.jobEnd}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
