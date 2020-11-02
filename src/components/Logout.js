import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Button} from "reactstrap";

class Logout extends Component {
    state = {
        navigate: false
    };

   logout = () => {
        localStorage.clear("token");
        this.setState({ navigate: true });
    };

    render() {
        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to="/" push={true} />;
        }

    return (
        <div style={{position: "absolute", top: "50px", right: "50px"}}>
            <Button color="secondary" size="lg">Logout Comp</Button>
        </div>
    )
    }
};

export default Logout;