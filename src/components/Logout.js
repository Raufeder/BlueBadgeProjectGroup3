import React, { Component } from "react";
import {Button} from "reactstrap";

class Logout extends Component {
    logout = () => { localStorage.clear("sessionToken"); this.props.setIsLoggedIn(false); };

    render() {
        return (
            <div style={{position: "fixed", top: "50px", right: "50px", zIndex: "100"}}>
                <Button id="logoutButtonColor" size="lg" onClick={this.logout}>Logout</Button>
            </div>
        );
    }
};

export default Logout;