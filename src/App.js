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
  const [characterList, setCharacterList] = useState(null);

 const updateToken = (token) => { localStorage.setItem("sessionToken", token); };

  const fetchCharacters = () => {
    fetch("http://localhost:8080/character/", {
            method: "GET",
            headers: new Headers({
                authorization: "Bearer " + localStorage.getItem("sessionToken")
            }),
        })
        .then(response => response.json())
        .then(body => {
            setCharacterList(body.results);
            setIsLoggedIn(true)
        })
        .catch((error) => console.log(error));
  }

  const fetchAccountInfo = (userName) => {
    fetch(`http://localhost:8080/user/view/${userName}`, {
        method: 'GET',
        headers: new Headers({
            "Content-Type": 'application/json',
            "authorization": "Bearer " + localStorage.getItem('sessionToken')
        })
    }).then((res) => res.json())
    .then((logData) => {
        setAccountInfo(logData)
        fetchCharacters();
        console.log("accountInfoLogged " + logData)
    })
  }

  let pageContainerStyle = {position: "fixed", left: "350px", right: "0px", height: "100%", overflow: "auto"};
  return (
    <div className="App">
      <div></div>
      <Router >
       {isLoggedIn ? <><SideBar accountInfo={accountInfo} userimg={accountInfo.url_userimage}/><Logout setIsLoggedIn={setIsLoggedIn} /></> : <TabSwitcher fetchInfo={fetchAccountInfo} updateToken={updateToken} setIsLoggedIn={setIsLoggedIn} /> }
       <Switch>
          { isLoggedIn ? 
            <Route exact path="/">
              <div style={pageContainerStyle}><MyCharacters fetchCharacters={fetchCharacters} characterList={characterList} /></div>
            </Route> : <></> 
          }
          <Route exact path="/account">
            <div style={pageContainerStyle}><Account accountInfo={accountInfo} userimg={accountInfo.url_userimage}/></div>
          </Route>
          <Route exact path="/mycharacters">
            <div style={pageContainerStyle}><MyCharacters fetchCharacters={fetchCharacters} characterList={characterList} /></div>
          </Route>
          <Route exact path="/createnewcharacter" key="createRoute" >
            <div style={pageContainerStyle}><CreateCharacter mode={"Create"}/></div>
          </Route>
          <Route path="/viewcharacter/:id" key="viewRoute">
            <div style={pageContainerStyle}><CreateCharacter mode={"View"} characterList={characterList} /></div>
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