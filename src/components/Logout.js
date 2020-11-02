import React, { Component } from "react";
import {Button} from "reactstrap";

class Logout extends Component {
    logout = () => { localStorage.clear("sessionToken"); this.props.setIsLoggedIn(false); };

    render() {
        return (
            <div style={{position: "absolute", top: "50px", right: "50px", zIndex: "100"}}>
                <Button color="secondary" size="lg" onClick={this.logout}>Logout Comp</Button>
            </div>
        );
    }
};

export default Logout;