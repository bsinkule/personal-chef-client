import React, { useState, useEffect } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import styled from 'styled-components';

const Contact = () => {

  const [ date, setDate ] = useState("")
  const [ fields, setFields ] = useState({})
  const [ errors, setErrors ] = useState({})
  const [ submitted, setSubmitted ] = useState(1)

  console.log("fields->", fields, " errors->", Object.keys(errors).length, " date->", date)

  const handleChange = (e) => {
    let input = fields;
    input[e.target.name] = e.target.value;

    setFields(input)
  }

  const submitForm = (e) => {
    if (!validateForm()) {
      e.preventDefault()
      return setSubmitted(3)
    }  
  }

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "* Name is required";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "* Email is required";
    }

    if (typeof fields["email"] !== undefined) {
      var pattern = new RegExp(/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/i)
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "* Please enter a valid email"
      }
    }

    if (!fields["people"]) {
      formIsValid = false;
      errors["people"] = "* Number of guests is a required field";
    }

    // if (!fields["date"]) {
    if (date === "") {
      formIsValid = false;
      errors["date"] = "* Please choose a date";
    }

    if (!fields["dinner"]) {
      formIsValid = false;
      errors["dinner"] = "* This field is required";
    }

    if (!fields["allergies"]) {
      formIsValid = false;
      errors["allergies"] = "* This is a required field.";
    }

    setErrors(errors)
    return formIsValid
  }
  
  return (
    <MainWrapper>
      <div className="formWrapper">
        <div>
          <form onSubmit={submitForm} className="contact" name="contact" method="post">
            <input className="input" type="hidden" name="form-name" value="contact" />
            <div className="divInput">
              <label>Name</label> <br/>
              <div className="red">* required</div>
              <input className="input" type="text" name="name" onChange={handleChange}/>
              <div className="errorMsg">{errors.name}</div>
            </div>
            <div className="divInput">
              <label>Email</label> <br/>
              <div className="red">* required</div>
              <input className="input" type="text" name="email" onChange={handleChange}/>
              <div className="errorMsg">{errors.email}</div>
            </div>
            <div className="divInput">
              <label>Phone number</label> <br/>
              <input className="input" type="tel" name="phone" onChange={handleChange}/>
            </div>
            <div className="divInput">
              <label>Number of people</label><br/>
              <div className="red">* required</div>
              <input className="input" type="number" name="people" onChange={handleChange}/>
              <div className="errorMsg">{errors.people}</div>
            </div>
            <div className="divInput">
              <label>Date you are interested in</label> <br/>
              <div className="red">* required</div>
              <DayPickerInput
                onDayChange={day => setDate(day)} 
                dayPickerProps={{
                  disabledDays: [
                    new Date(2019, 2, 27),
                    new Date(2019, 2, 28),
                    {
                      after: new Date(2019, 2, 11),
                      before: new Date(2019, 2, 17),
                    }
                  ]
                }}
              />
              <input className="none input" type="text" name="date" defaultValue={date}  onChange={handleChange}/>
              <div className="errorMsg">{errors.date}</div>
            </div>
            <div className="divInput">
              <label>What do you have in mind for dinner?</label> <br/> 
              <div className="red">* required</div>
              <textarea className="input" name="dinner" rows="10" onChange={handleChange}></textarea>
              <div className="errorMsg">{errors.dinner}</div>
            </div>
            <div className="divInput">
              <label>What do you have in mind for drinks?</label> <br/> 
              <textarea className="input" name="drinks" rows="10" onChange={handleChange}></textarea>
            </div>
            <div className="divInput">
              <label>Any allergies?</label> <br/> 
              <div className="red">* required</div>
              <textarea className="input" name="allergies" onChange={handleChange}></textarea>
              <div className="errorMsg">{errors.allergies}</div>
            </div>
            <div className="alignButton">
              <button className="button" type="submit">Submit</button>
            </div>
            {submitted === 3 ? <div className="fail">Please Resolve the Form Errors</div> : 
            submitted === 2 ? <div className="success">Form Submitted Successfully!!!</div> : 
            null}
          </form>
          <h4>We'll get back to you within 24hrs of the form being submitted</h4>

        </div>
      </div>
    </MainWrapper>
  )
}

export default Contact;


const MainWrapper = styled.div`
  background-image: url("https://agc.creativelive.com/agc/courses/5138-1.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 75px;
  padding-bottom: 100px; 

  .formWrapper {
    width: 90%;
    max-width: 800px;
    background-color: rgba(224,224,224, .9);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    border-radius: 10px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
  }

  .contact {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .none {
    display: none;
  }

  .divInput {
    margin-bottom: 10px;
  }

  .input {
    width: 100%;
    border-radius: 5px;
  }

  .red {
    color: red;
    font-size: 8px;
  }

  .alignButton {
    align-self: center;
  }

  .button {
    font-size: 20px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid white;
    margin: 20px;
    padding: 10px;
    cursor: pointer;

      :hover {
        background-color: transparent;
      }
  }

  .errorMsg {
    margin: 5px 0px;
    background-color: rgba(255, 0, 0, .6);
    border-radius: 3px;
    line-height: 1.5;
  }

  .fail {
    background-color: rgba(255, 0, 0, .6);
    border-radius: 3px;
    text-align: center;
    padding: 10px;
  }

  .success {
    background-color: rgba(102, 255, 102, .6);
    border-radius: 3px;
    text-align: center;
    padding: 10px;
  }

  h4 {
    text-align: center;
    padding: 0px 10px;
  }
`;