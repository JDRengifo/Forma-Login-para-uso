import React from "react";
import { useState } from "react";
import './form.css'
import validate from "../validate/Validate";


function Form(){
    const [input, setInput] = useState({
      email:'',
      password: ''
    })
    
    const [errors, setErrors] = useState({
      email:'',
      password: ''
    })

    const handleChange = (event) => {
      setInput({
        ...input,
        [event.target.name]: event.target.value
      })

      setErrors(validate(input))
    }
    
    const onSubmit = (event) => {
      event.preventDefault();
      setInput({
      email:'',
      password: ''
      })
    }
    
    
    return(
     
        <form onSubmit={onSubmit}>
            <div className="imagenDiv">
            <img src="https://th.bing.com/th?id=OIP.gS0sLM8mRFXS_WzQmDMY5QHaLQ&w=202&h=308&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
            </div>

            <div className="inputDiv">
              <label htmlFor="email">EMAIL: </label>
              <br />
              <input 
              size={40}
                  className="input"
                  type="text"
                  name='email'
                  value={input.email}
                  onChange = {handleChange}
                  />
                  {errors.name !== '' && <h2 className="ventanaError">{errors.email}</h2>}
                        
              <hr style={{borderStyle: "none"}}/>
              <label htmlFor="password">PASSWORD: </label>
              <br />
              <input 
                  size={40}
                  className="input"
                  type="text" 
                  name='password'
                  value={input.password}
                  onChange = {handleChange}
                />
              {errors.name !== '' && <h2 className="ventanaError">{errors.password}</h2>}

              <hr style={{borderStyle: "none"}}/>
              <button type="submit" disabled={!input.email || !input.password || errors.email || errors.password}>INGRESAR</button>
            </div>
        </form>
     
    )
}
export default Form;