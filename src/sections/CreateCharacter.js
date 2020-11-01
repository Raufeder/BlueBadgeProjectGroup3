import React, {useState} from "react";
import EditFieldInput from "../components/EditFieldInput";

import userImg from "../assets/userimg.png";

const CreateCharacter = (props) => {
    const [mode, setMode] = useState("Edit");
    return (
        <div style={{ marginLeft: "auto", marginRight: "auto", width: "90%"}}>
            <h1 style={{}}>Create New Character</h1>
            <div class="characterBody" style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "5px" }} >
                <div class="characterTopContainer" style={{overflow: "auto" }}>
                    <div class="leftOfPicText" style={{ float: "left" }}>
                        <EditFieldInput inMode={mode} />
                        <EditFieldInput inMode={mode} />
                        <EditFieldInput inMode={mode} />
                        <EditFieldInput inMode={mode} />
                    </div>
                    <div class="picContainer" style={{ float:"right"}}><img src={userImg} alt="User Profile Picture" /></div>
                </div>
                <div class="underPicText">
                    <EditFieldInput inMode={mode} />
                    <EditFieldInput inMode={mode} />
                    <EditFieldInput inMode={mode} />
                    <EditFieldInput inMode={mode} />
                </div>
            </div>
        </div>
    )
};

export default CreateCharacter;