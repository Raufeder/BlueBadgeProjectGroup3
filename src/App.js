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
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="App">
      <Router >
       {isLoggedIn ? <><SideBar /><Logout /></> : <TabSwitcher /> }
       <Switch>
          { isLoggedIn ? <Route exact path="/"><MyCharacters /></Route> : <></> }
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/mycharacters">
            <MyCharacters />
          </Route>
          <Route exact path="/createnewcharacter">
            <CreateCharacter />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contactus">
            <ContactUs />
          </Route>
          <Route exact path="/privacypolicy">
            <PrivacyPolicy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;