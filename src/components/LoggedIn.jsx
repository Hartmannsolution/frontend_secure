import React, { useState,useEffect } from "react"
import facade from "../apiFacade";
function LoggedIn({user}){
    // const [dataFromServer, setDataFromServer] = useState("Loading...")
    useEffect(() => { 
      const url = user.roles.split(',').includes('user') ? '/api/info/user' : '/api/info/admin';
      facade.fetchData(url).then(res => {
        console.log(res);
        setDataFromServer(res.msg)});
    },[])
  
    return (
      <span className="loggedin">
        {/* <h3>{dataFromServer}</h3> */}
Logged in as {user.username} with roles: {user.roles}
      </span>
    )
  }
export default LoggedIn;