import React, {useState, useEffect, useRef} from "react";
import "../styles/createCharacter.css"
import {useParams} from "react-router-dom";

import EditFieldInput from "../components/EditFieldInput";
import charImg from "../assets/userimg.png";
import IndividualCharacter from "../components/IndividualCharacter";

import {Form, Container, Row, Col, Tooltip, Button} from "reactstrap";

const CreateCharacter = (props) => {
    const [mode, setMode] = useState(props.mode); //Create Mode (No Buttons), View Mode (Edit Button), Edit Mode (Generate/Save Buttons)
    const [editTooltip, setEditTooltipOpen] = useState(false);
    const [generateTooltip, setGenerateTooltipOpen] = useState(false);
    const [saveTooltip, setSaveTooltipOpen] = useState(false);
    const [charData, setCharData] = useState(null);

    let charModel = {
        charName: "",
        charImageURL: "",
        charBodyType: "",
        charHair: "",
        charEyeColor: "",
    };

    let {id} = useParams();
    const getCharData = () => {
        console.log("id: ", id);
        console.log(props.characterList);
        let char = (props.characterList.filter( (character) => { return character.id == id; } ))[0];
        console.log(char);
        delete char.id;
        delete char.owner_id;
        delete char.createdBy;
        delete char.userId;
        delete char.createdAt;
        delete char.updatedAt;
        return char;
    }

    useEffect( () => {
        if(id) { setCharData( getCharData() ) }
        else{ console.log("id is falsey"); }

        switch(props.mode) {
            case "Create":
                //run generators for all the fields
                break;
            default:
                break;
        }
    }, [])

    function createJSONData(elementArr){
        let keys = Object.keys(charModel);
        let tObj = { Character: {} };
        for(let i = 0; i < keys.length; i++){
            tObj.Character[keys[i]] = elementArr[i].value;
        }
        return tObj;
    }

    const createCharacter = (e) => {
        // call the create route here and send up the data from all of the inputs
        e.preventDefault();

        fetch("http://localhost:8080/character/create", {
            method: "POST",
            body: JSON.stringify(createJSONData(e.target)),
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("sessionToken")
            })
        }).then( (res) => { return res.json(); } )
        .then( (data) => {
            console.log(data);
        })
    };

    return (
        <>
        <h1 class="characterHeader" >{mode} Character</h1>
        <div class="centerDiv">
            <div class="characterBody" >
                <div class="characterTopContainer" >
                    <div class="leftOfPicText" >
                        <Form onSubmit={ (e) => { createCharacter(e) } }>
                        <Container fluid={true}><Row >
                                { charData ? 
                                    Object.keys(charData).map( (oneKey, i) => {
                                        return (
                                        <Col md="12" lg="12" xl="12">
                                            <EditFieldInput value={charData[oneKey]} ph={oneKey} inMode={mode} />
                                        </Col>
                                        )
                                    })
                                    : <></>
                                }
                        </Row></Container>
                        <Button type="submit" size="lg" color="success">Create Character</Button>
                        </Form>
                    </div>
                    <div class="picContainer" >
                        <IndividualCharacter charImg={charImg} alt="Character Image" />
                    </div>
                </div>
                <div class="underPicText">
                    <Container fluid={true}><Row >
                    </Row></Container>
                    { mode === "View" && charData ?
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
