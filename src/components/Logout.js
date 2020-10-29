import React from "react";
import {Button} from "reactstrap";

const Logout = (props) => {

    return (
        <div style={{position: "absolute", top: "50px", right: "50px"}}>
            <Button color="secondary" size="lg">Logout Comp</Button>
        </div>
    )
};

export default Logout;