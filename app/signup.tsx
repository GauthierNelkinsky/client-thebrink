import styles from './page.module.css'
import React, { useState } from "react"

export default function SignUp() {
  
const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
    });

    /**
     * TODO
     * All this part can be in a Module and avoid repeting code
     */

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
    
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
      }

    const signUp = (e) => {
        // We don't want the page to refresh
        e.preventDefault()

        const formURL = "http://localhost:3000/users?";
        const data = new URLSearchParams()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })
        

        // GET the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
                'accept': 'application/json',
            },
        }).then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            if (res.data){
                console.log("User created");
            }
            else {
                console.log("User not created")
            }
        }));
    }

  return (
    <div id={styles.signup}>
        <h2>Sign up</h2>
        <form method="POST" onSubmit={signUp}>
            <input placeholder='First Name' name="first_name" onChange={handleInput} value={formData.first_name}></input>
            <input placeholder='Last Name' name="last_name" onChange={handleInput} value={formData.last_name}></input>
            <input placeholder='Email' name="email" onChange={handleInput} value={formData.email}></input>
            <input placeholder='Password' name="password" onChange={handleInput} value={formData.password}></input>
            <button type="submit">Sign up</button>
        </form>
    </div>
  )
}
