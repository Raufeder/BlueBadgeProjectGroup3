import React from "react";
import { Link } from "react-router-dom";

import IndividualUser from "../components/IndividualUser";

const Sidebar = (props) => {

    return (
        <div style={/*Hack in some sidebar style real quick*/
                {position: "fixed", zIndex: "1", top: 0, left: 0, height: "100%", 
                width: "15%",float: "left", border: "2px solid black"}
            } >Sidebar Comp
            <IndividualUser />
            <div>
                <ul>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                    <li>
                        <Link to="/mycharacters">My Characters</Link>
                    </li>
                    <li>
                        <Link to="/createnewcharacter">Create A Character</Link>
                    </li>
                </ul>
                <footer>
                    <ul>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/privacypolicy">Privacy Policy</Link>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    )
};

export default Sidebar;