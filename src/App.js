import './App.css';
import React, {useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

import TabSwitcher from "./auth/TabSwitcher";
import SideBar from "./sections/Sidebar";
import Logout from "./components/Logout";

import Account from "./sections/Account";
import About from "./sections/About";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import ContactUs from "./sections/ContactUs";

import CreateCharacter from "./sections/CreateCharacter";
import MyCharacters from "./sections/MyCharacters";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});

 const updateToken = (token) => { localStorage.setItem("sessionToken", token); };


  const fetchAccountInfo = () => {
    fetch('http://localhost:8080/user/view', {
        method: 'GET',
        headers: new Headers({
            "Content-Type": 'application/json',
            "authorization": "Bearer " + localStorage.getItem('sessionToken')
        })
    }).then((res) => res.json())
    .then((logData) => {
        setAccountInfo(logData)
        console.log(logData)
    })
  }

  let pageContainerStyle = {position: "fixed", left: "350px", right: "0px", height: "100%", overflow: "auto"};
  return (
    <div className="App">
      <Router >
       {isLoggedIn ? <><SideBar userimg={accountInfo.url_userimage}/><Logout setIsLoggedIn={setIsLoggedIn} /></> : <TabSwitcher fetchInfo={fetchAccountInfo} updateToken={updateToken} setIsLoggedIn={setIsLoggedIn} /> }
       <Switch>
          { isLoggedIn ? <Route exact path="/"><MyCharacters /></Route> : <></> }
          <Route exact path="/account">
            <div style={pageContainerStyle}><Account accountInfo={accountInfo} userimg={accountInfo.url_userimage}/></div>
          </Route>
          <Route exact path="/mycharacters">
            <div style={pageContainerStyle}><MyCharacters /></div>
          </Route>
          <Route exact path="/createnewcharacter">
            <div style={pageContainerStyle}><CreateCharacter mode={"Edit"}/></div>
          </Route>
          <Route exact path="/about">
            <div style={pageContainerStyle}><About /></div>
          </Route>
          <Route exact path="/contactus">
            <div style={pageContainerStyle}><ContactUs /></div>
          </Route>
          <Route exact path="/privacypolicy">
            <div style={pageContainerStyle}><PrivacyPolicy /></div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;