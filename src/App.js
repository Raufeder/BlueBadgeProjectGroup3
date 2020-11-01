import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  let pageContainerStyle = {position: "fixed", left: "350px", right: "0px"};
  return (
    <div className="App">
      <Router >
       {isLoggedIn ? <><SideBar /><Logout /></> : <TabSwitcher setIsLoggedIn={setIsLoggedIn} /> }
       <Switch>
          { isLoggedIn ? <Route exact path="/"><MyCharacters /></Route> : <></> }
          <Route exact path="/account">
            <div style={pageContainerStyle}><Account /></div>
          </Route>
          <Route exact path="/mycharacters">
            <div style={pageContainerStyle}><MyCharacters /></div>
          </Route>
          <Route exact path="/createnewcharacter">
            <div style={pageContainerStyle}><CreateCharacter /></div>
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