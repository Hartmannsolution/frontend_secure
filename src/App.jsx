import React, { useState, useEffect } from "react"
import facade from "./apiFacade";
import LogIn from "./components/LoginForm";
import LoggedIn from "./components/LoggedIn";
import {
  Routes,
  Route,
  Link,
  useParams,
  NavLink,
  Outlet,
} from "react-router-dom";

const Header = ({children}) => {
  return (
    <>
    <ul className="header">
      <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
      <li><NavLink to="/products" activeclassname="active">Products</NavLink></li>
      <li><NavLink to="/company" activeclassname="active">Company</NavLink></li>
    <li>{children}</li>
    </ul>
    </>

  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Products = () => {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then(res => setDataFromServer(res.msg));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
};

const Company = () => {
  // const [dataFromServer, setDataFromServer] = useState("Loading...");

  // useEffect(() => {
  //   facade.fetchData().then(res => setDataFromServer(res.msg));
  // }, []);

  return (
    <div>
      <h2>Company</h2>
    </div>
  );
};


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({ username: "", roles: "" });

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setUser({ name: "", roles: "" })
  }
  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      const token = facade.readJwtToken(facade.getToken());
      setUser({ username: token.username, roles: token.roles });
      setLoggedIn(true);
    });
  }

  return (
    <div>
      
      <div>
        <Header >
        {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn user={user} logout={logout} loggedIn={loggedIn}/>
        </div>)}

        </Header>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
        </Routes>
      </div>

    </div>
  )
}

export default App;