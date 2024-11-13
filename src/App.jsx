import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import CV from './components/CV';

function App () {
  // State to hold the input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    about: '',
    schoolName: '',
    degree: '',
    start: '',
    end: '',
    company: '',
    jobTitle: '',
    jobDescription: '',
    jobStart: '',
    jobEnd: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true)
  }

  const handleEdit = () => {
    setSubmitted(false)
  }

  return (
    <div className="app">
      {!submitted ? (
        <Form formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      ):
      (
      <CV formData={formData} handleEdit={handleEdit}/>
      )}
    
    </div>
  );
};

export default App;
