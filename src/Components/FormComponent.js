import React from 'react';
function FormComponent(props){
  
        return(
            <form>
             <h1>Text Box</h1>
  <input type="text" name="firstName"  placeholder="First Name" onChange={props.handleChange} />
  <br/>
  <input type="text" name="lastName" placeholder="Last Name"  onChange={props.handleChange} />
  <h1>{props.data.firstName} {props.data.lastName}</h1>
  <br/>
  <h1>Text Area</h1>
  <textarea>{"Some Default value"}</textarea>
  <br/>
  <h1>Checkbox</h1>
  <input type="checkbox" checked={props.data.isFriendly} />isFriendly?
  <br/>
  <h1>Gender</h1>
  <input type="radio" onChange={props.handleChange} name="gender" value="male" checked={props.data.gender === 'male'}/>Male
  <br/>
  <input type="radio" onChange={props.handleChange} name="gender" value="female" checked={props.data.gender === 'female'}/>Female
  <br/>
  <h2>You are a {props.data.gender}</h2>
  <br/>
  <h1>Colors</h1>
  <select value={props.data.favColor} onChange={props.handleChange} name="favColor">
     <option value="Blue">Blue</option>
     <option value="Red">Red</option>
     <option value="Green">Green</option>
     <option value="Yellow">Yellow</option>
  </select>
  <h2>Your Favourite Colour is {props.data.favColor}</h2>
  </form>
        )
    }


export default FormComponent;