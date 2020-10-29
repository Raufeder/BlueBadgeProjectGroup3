import React, {useState} from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import classnames from 'classnames';

import Login from "./Login";
import Register from "./Register";

const TabSwitcher = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div style={{width: "60%", height: "40%", marginLeft: "auto", marginRight: "auto"}}>
            <Nav tabs>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                >
                    Login
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                >
                    Register
                </NavLink>
                </NavItem>
            </Nav>
            <TabContent style={{border: "1px solid black"}} activeTab={activeTab}>
                <TabPane tabId="1">
                    <Login />
                </TabPane>
                <TabPane tabId="2">
                    <Register />
                </TabPane>
            </TabContent>
        </div>
    )
};

export default TabSwitcher;