import { useState } from "react";

export default function MainForm() {
  const [personalInfo, setPersonalInfo] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    university: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [workExperience, setWorkexp] = useState({
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
  });

  const [summary, setSummary] = useState('');

  return (
    <div>
      <PersonalForm 
        personalInfo={personalInfo} 
        setPersonalInfo={setPersonalInfo}
      />
      <Test personalInfo={personalInfo} />
    </div>
  );
}

function PersonalForm({ personalInfo, setPersonalInfo }) {
  const handleOnChange = function(event) {
    const { id, value } = event.target;
    
    // Convert id to camelCase property names
    const fieldMap = {
      'job-title': 'jobTitle',
      'first-name': 'firstName',
      'last-name': 'lastName',
      'email': 'email',
      'phone': 'phone',
      'address': 'address',
      'city': 'city',
      'country': 'country'
    };
    
    const fieldName = fieldMap[id];
    if (fieldName) {
      setPersonalInfo({ ...personalInfo, [fieldName]: value });
    }
  };

  return (
    <div className="" id="form-container">
      <form className="" id="personal-form">
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          maxLength={50}
          className=""
          id="job-title"
          value={personalInfo.jobTitle}
          onChange={handleOnChange}
          required
        />
        
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          maxLength={30}
          className=""
          id="first-name"
          value={personalInfo.firstName}
          onChange={handleOnChange}
          required
        />
        
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          maxLength={30}
          className=""
          id="last-name"
          value={personalInfo.lastName}
          onChange={handleOnChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          className="" 
          id="email" 
          value={personalInfo.email}
          onChange={handleOnChange}
          required
        />
        
        <label htmlFor="phone">Phone</label>
        <input 
          type="tel" 
          className="" 
          id="phone" 
          value={personalInfo.phone}
          onChange={handleOnChange}
        />
        
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className=""
          maxLength={100}
          id="address"
          value={personalInfo.address}
          onChange={handleOnChange}
          required
        />
        
        <label htmlFor="city">City</label>
        <input
          type="text"
          className=""
          maxLength={60}
          id="city"
          value={personalInfo.city}
          onChange={handleOnChange}
          required
        />
        
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className=""
          maxLength={60}
          id="country"
          value={personalInfo.country}
          onChange={handleOnChange}
          required
        />
      </form>
    </div>
  );
}

function Test({ personalInfo }) {
  return (
    <>
      <h1 className="text-green-500">
        Testing: {personalInfo.jobTitle}
      </h1>
    </>
  );
}