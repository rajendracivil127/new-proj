import React, {useState} from 'react'
const App = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    designation: '',
    company: '',
    workEmail: '',
    workPhoneNumber: ''
    role: '',
    compensation: '',
    yearsOfExperience: '',
    onsite/remote: '',
    numberOfPositions: '',
    location: '',
    timeLine: ''

  })
  const{firstName, lastName, designation, company, workEmail, workPhoneNumber, role, compensation, yearsOfExperience, onsite/remote, numberOfPositions, location, timeLine} = data;
  const changeHandler = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

    return (
      <div>
        <form onSubmit={submitHandler}>
        <input type= "text" name = "firstName" value = {firstName} onChange = {changeHandler} /> <br />
        <input type= "text" name = "lastName" value = {lastName} onChange = {changeHandler} /> <br />
        <input type= "text" name = "designation" value = {designation} onChange = {changeHandler} /> <br />
        <input type= "text" name = "company" value = {company} onChange = {changeHandler} /> <br />
        <input type= "text" name = "workEmail" value = {workEmail} onChange = {changeHandler} /> <br />
        <input type= "text" name = "workPhoneNumber" value = {workPhoneNumber} onChange = {changeHandler} /> <br />
        <input type= "text" name = "role" value = {role} onChange = {changeHandler} /> <br />
        <input type= "number" name = "compensation" value = {compensation} onChange = {changeHandler} /> <br />
        <select name = 'yearsOfExperience'  onChange = {changeHandler} />
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <select name = 'onsite/remote'  onChange = {changeHandler} />
        <option value = "onsite">onsite</option>
        <option value = "remote">remote</option>
     
        
        <input type= "number" name = "numberOfPositions" value = {numberOfPositions} onChange = {changeHandler} /> <br />
        <input type= "text" name = "location" value = {location} onChange = {changeHandler} /> <br />
        <input type= "text" name = "timeline" value = {timeLine} onChange = {changeHandler} /> <br />
        <input type= "get a callback" name = "get a callback" /><br />
        

        </form>
        const submitHandler = e => {
          e.preventDefault ();
          alert(your hiring requirements submitted successfully);
          console.log(data);
        }

      </div>



export default App;