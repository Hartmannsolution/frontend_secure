import React, { useState } from "react"
function LogIn({ login, logout, loggedIn}) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
  
    const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
  
    return (
      <>
        
        {
          loggedIn? <button onClick={logout}>Logout</button>:
          <form onChange={onChange} className="form">
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
        </form>
        }
      </>
    )
  }
export default LogIn;  