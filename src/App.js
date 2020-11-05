import './App.css';
import React, {useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import APIURL from "./helpers/environment";

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
import logo from './assets/personarylogo.png'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});
  const [characterList, setCharacterList] = useState(null);

 const updateToken = (token) => { localStorage.setItem("sessionToken", token); };

  const fetchCharacters = () => {
    fetch(`${APIURL}character/`, {
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
    fetch(`${APIURL}user/view/${userName}`, {
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

  return (
    
    <div className="App">
    { isLoggedIn == false ? 
      <><div className="logo"><img className="logoPic" src={logo} alt="personary logo"/></div>
      <div className="headline"><h1 className="mainHeadline">Create Characters. Plan Personas.</h1></div>
      <div className="subHead"><p>Create, edit, and save all of your character's personas in one easy-to-use tool.</p></div></> : <></>
    }
      <Router >
       {isLoggedIn ? <><SideBar accountInfo={accountInfo} userimg={accountInfo.url_userimage}/><Logout setIsLoggedIn={setIsLoggedIn} /></> : <TabSwitcher fetchInfo={fetchAccountInfo} updateToken={updateToken} setIsLoggedIn={setIsLoggedIn} /> }
       <Switch>
          { isLoggedIn ? 
            <Route exact path="/">
              <div className="pageContainer"><MyCharacters fetchCharacters={fetchCharacters} characterList={characterList} /></div>
            </Route> : <></> 
          }
          <Route exact path="/account">
            <div className="pageContainer"><Account setIsLoggedIn={setIsLoggedIn} accountInfo={accountInfo} userimg={accountInfo.url_userimage}/></div>
          </Route>
          <Route exact path="/mycharacters">
            <div className="pageContainer"><MyCharacters fetchCharacters={fetchCharacters} characterList={characterList} /></div>
          </Route>
          <Route exact path="/createnewcharacter" key="createRoute" >
            <div className="pageContainer"><CreateCharacter mode={"Create"}/></div>
          </Route>
          <Route path="/viewcharacter/:id" key="viewRoute">
            <div className="pageContainer"><CreateCharacter mode={"View"} characterList={characterList} /></div>
          </Route>
          <Route exact path="/about">
            <div className="pageContainer"><About /></div>
          </Route>
          <Route exact path="/contactus">
            <div className="pageContainer"><ContactUs /></div>
          </Route>
          <Route exact path="/privacypolicy">
            <div className="pageContainer"><PrivacyPolicy /></div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;