import styles from './page.module.css'
import React, { useState } from "react"

export default function LogIn() {
  
    const [formData, setFormData] = useState({
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

    const LogUser = (res) => {
        if (res.data){
            console.log("user connected : " + res.data.id);
        }
        else {
            console.log("No user found");
        }
        
    }

    const Login = (e) => {
        // We don't want the page to refresh
        e.preventDefault()

        const formURL = "http://localhost:3000/users?";
        const data = new URLSearchParams()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })
        

        // GET the data to the URL of the form
        fetch(formURL + data.toString(), {
            method: "GET",
            headers: {
                'accept': 'application/json',
            },
        }).then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            LogUser(res.data)
        }));
    }

  return (
    <div id={styles.login}>
        <h2>Login</h2>
        <form method="POST" onSubmit={Login}>
            <input placeholder='Email' name="email" onChange={handleInput} value={formData.email}></input>
            <input placeholder='Password' name="password" onChange={handleInput} value={formData.password}></input>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
