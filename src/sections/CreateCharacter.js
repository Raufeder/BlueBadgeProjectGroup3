import React, {useState, useEffect} from "react";
import "../styles/createCharacter.css"

import EditFieldInput from "../components/EditFieldInput";
import charImg from "../assets/userimg.png";
import IndividualCharacter from "../components/IndividualCharacter";

import {Tooltip} from "reactstrap";

const CreateCharacter = (props) => {
    const [mode, setMode] = useState(props.mode); //Create Mode (No Buttons), View Mode (Edit Button), Edit Mode (Generate/Save Buttons)
    const [editTooltip, setEditTooltipOpen] = useState(false);
    const [generateTooltip, setGenerateTooltipOpen] = useState(false);
    const [saveTooltip, setSaveTooltipOpen] = useState(false);

    useEffect( () => {
        switch(props.mode) {
            case "Create":
                //run generators for all the fields
                break;
            case "Edit":
                //get the passed in character from the verver
                break;
            case "View":
                //get the passed in character by id from the server
                break;
            default:
                console.log(`You probably passed a bad mode into CreateCharacter component. mode = ${mode}`);
        }
    }, [])

    return (
        <>
        <h1 class="characterHeader" >{mode} Character</h1>
        <div class="centerDiv">
            <div class="characterBody" >
                <div class="characterTopContainer" >
                    <div class="leftOfPicText" >
                        <EditFieldInput ph="fieldType" inMode={mode} />
                        <EditFieldInput ph="fieldType" inMode={mode} />
                        <EditFieldInput ph="fieldType" inMode={mode} />
                        <EditFieldInput ph="fieldType" inMode={mode} />
                    </div>
                    <div class="picContainer" >
                        <IndividualCharacter charImg={charImg} alt={"Character Image"} />
                    </div>
                </div>
                <div class="underPicText">
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    <EditFieldInput ph="fieldType" inMode={mode} />
                    { mode === "View" ?
                    <Tooltip placement="top" isOpen={editTooltip} target="editBtn" toggle={() => { setEditTooltipOpen(!editTooltip) }}>
                        Edit Field
                    </Tooltip> : <></>
                    }
                    { mode === "Edit" ?
                    <><Tooltip placement="top" isOpen={generateTooltip} target="generateBtn" toggle={() => { setGenerateTooltipOpen(!generateTooltip) }}>
                        Generate Field
                    </Tooltip>
                    <Tooltip placement="top" isOpen={saveTooltip} target="saveBtn" toggle={() => { setSaveTooltipOpen(!saveTooltip) }}>
                        Save Field
                    </Tooltip></> : <></>
                    }
                </div>
            </div>
        </div>
        </>
    )
};

export default CreateCharacter;