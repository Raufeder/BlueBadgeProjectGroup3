import React, {useState, useEffect, useCallback} from "react";
import "../styles/createCharacter.css"
import {useParams, useHistory} from "react-router-dom";
import APIURL from "../helpers/environment";

import EditFieldInput from "../components/EditFieldInput";
import charImg from "../assets/userimg.png";
import IndividualCharacter from "../components/IndividualCharacter";
import exportObject from "../components/RndGeneratorTables";


import {Form, Container, Row, Col, Tooltip, Button} from "reactstrap";

const CreateCharacter = (props) => {
    const [mode, setMode] = useState(props.mode); //Create Mode (No Buttons), View Mode (Edit Button), Edit Mode (Generate/Save Buttons)
    const [editTooltip, setEditTooltipOpen] = useState(false);
    const [generateTooltip, setGenerateTooltipOpen] = useState(false);
    const [saveTooltip, setSaveTooltipOpen] = useState(false);
    const [charData, setCharData] = useState(null);
    let {id} = useParams();
    const [charId, setCharId] = useState(id);
    const history = useHistory();
    const navigateHome = useCallback(() => { history.push('/') }, [history]);
    
    const getCharData = () => {
        let char = (props.characterList.filter( (character) => { return character.id == charId; } ))[0];
        console.log("View Character Loaded Object: ");
        console.log(char);

        let charModel = {
            charName: char["CharName"],
            charImageURL: char["CharImageURL"],
            charBodyType: char["CharBodyType"],
            charHair: char["CharHair"],
            charEyeColor: char["CharEyeColor"],
            charGender: char["CharGender"],
            charAge: char["CharAge"],
            charRelationshipStatus: char["CharRelationshipStatus"],
            charChildren: char["CharChildren"],
            charOccupation: char["CharOccupation"],
            charDescription: char["CharDescription"],
            charHistory: char["CharHistory"],
            charPersonalityType: char["CharPersonalityType"],
            charPersonalityPolarOpp: char["CharPersonalityPolarOpp"],
            charPersonalityDescription: char["CharPersonalityDescription"],
            charPersonalityQuirk: char["CharPersonalityQuirk"],
        };

        return charModel;
    }

    useEffect( () => {
        if(id) { setCharData( getCharData() ) }
        else{ console.log("id is falsey"); }

        switch(props.mode) {
            case "Create":
                //TODO: run generators for all the fields
                let charModel = {
                    charName: exportObject.getRandomName(),
                    charImageURL: "",
                    charBodyType: exportObject.getRandomBodyType(),
                    charHair: exportObject.getRandomHairColor(),
                    charEyeColor: exportObject.getRandomEyeColor(),
                    charGender: " - add gender -",
                    charAge: exportObject.getRandomAge(),
                    charRelationshipStatus: exportObject.getRandomRelationshipStatus(),
                    charChildren: exportObject.getRandomNumberOfChildren(),
                    charOccupation: " - edit add an occupation -",
                    charDescription: " - edit to add a description -",
                    charHistory: " - edit to add a character history -",
                    charPersonalityType: exportObject.getRandomPersonalityType(),
                    charPersonalityPolarOpp: exportObject.randomPersonalityPolarOpposite(),
                    charPersonalityDescription: exportObject.getRandomPersonalityDescription(),
                    charPersonalityQuirk: exportObject.getRandomPersonalityQuirk(),
                };

                setCharData(charModel);
                break;
            default:
                break;
        }
    }, [])

    function createJSONData(elementArr){
        console.log("Create Char Data: ");
        let keys = Object.keys(charData);
        console.log(keys);
        console.log("Element Array: ");
        console.log(elementArr);
        let tObj = { Character: {} };
        let charKeyMod = 0;
        for(let i = 0; i < keys.length; i++){
            if( elementArr[i].type === "text" ){ tObj.Character[keys[i - charKeyMod]] = elementArr[i].value; }
            else{ charKeyMod++; } // this is to skip all form elements that aren't text
            console.log( i + " " + keys[i] + " = " + elementArr[i].value);
        }
        return tObj;
    }

    const createCharacter = (e) => {
        // call the create route here and send up the data from all of the inputs
        e.preventDefault();

        fetch(`${APIURL}character/create`, {
            method: "POST",
            body: JSON.stringify(createJSONData(e.target)),
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("sessionToken")
            })
        }).then( (res) => { return res.json(); } )
        .then( (data) => {
            //console.log(data);
        })
    };

    const onSaveInput = (e) => {
        console.log("OnSaveInput: ");
        console.log(charData);
        fetch(`${APIURL}character/edit/${charId}`, {
            method: "PUT",
            body: JSON.stringify( { Character: charData } ),
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("sessionToken")
            })
        }).then( (res) => { return res.json(); } )
        .then( (data) => {
            //console.log(data);
        })
    };

    const onChangeInput = (e) => {
        console.log(e);
        let charModel = {
            charName: charData["charName"],
            charImageURL: charData["charImageURL"],
            charBodyType: charData["charBodyType"],
            charHair: charData["charHair"],
            charEyeColor: charData["charEyeColor"],
            charGender: charData["charGender"],
            charAge: charData["charAge"],
            charRelationshipStatus: charData["charRelationshipStatus"],
            charChildren: charData["charChildren"],
            charOccupation: charData["charOccupation"],
            charDescription: charData["charDescription"],
            charHistory: charData["charHistory"],
            charPersonalityType: charData["charPersonalityType"],
            charPersonalityPolarOpp: charData["charPersonalityPolarOpp"],
            charPersonalityDescription: charData["charPersonalityDescription"],
            charPersonalityQuirk: charData["charPersonalityQuirk"],
        };
        
        charModel[e.target.placeholder] = e.target.value;

        setCharData(charModel);
    };

    const deleteCharacter = (e) => {
        fetch(`${APIURL}character/delete/${charId}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("sessionToken")
            })
        }).then( (res) => { 
            console.log(res);  
            navigateHome();
        })
    }

    const getGeneratorFunc = (key) => {
        let charModel = {
            charName: exportObject.getRandomName,
            charImageURL: null,
            charBodyType: exportObject.getRandomBodyType,
            charHair: exportObject.getRandomHairColor,
            charEyeColor: exportObject.getRandomEyeColor,
            charGender: null,
            charAge: exportObject.getRandomAge,
            charRelationshipStatus: exportObject.getRandomRelationshipStatus,
            charChildren: exportObject.getRandomNumberOfChildren,
            charOccupation: null,
            charDescription: null,
            charHistory: null,
            charPersonalityType: exportObject.getRandomPersonalityType,
            charPersonalityPolarOpp: exportObject.randomPersonalityPolarOpposite,
            charPersonalityDescription: exportObject.getRandomPersonalityDescription,
            charPersonalityQuirk: exportObject.getRandomPersonalityQuirk,
        };
        return charModel[key];
    };

    const generatorClick = (key) => {
        let charModel = {
            charName: charData["charName"],
            charImageURL: charData["charImageURL"],
            charBodyType: charData["charBodyType"],
            charHair: charData["charHair"],
            charEyeColor: charData["charEyeColor"],
            charGender: charData["charGender"],
            charAge: charData["charAge"],
            charRelationshipStatus: charData["charRelationshipStatus"],
            charChildren: charData["charChildren"],
            charOccupation: charData["charOccupation"],
            charDescription: charData["charDescription"],
            charHistory: charData["charHistory"],
            charPersonalityType: charData["charPersonalityType"],
            charPersonalityPolarOpp: charData["charPersonalityPolarOpp"],
            charPersonalityDescription: charData["charPersonalityDescription"],
            charPersonalityQuirk: charData["charPersonalityQuirk"],
        };
        
        charModel[key] = getGeneratorFunc(key)();

        setCharData(charModel);
    };
    
    const splitData = () => {
        let parts = [{},{}];
        if(charData != null){
            Object.keys(charData).map( (k, i) => {
                if(i < 7) { parts[0][k] = charData[k]; }
                else{ parts[1][k] = charData[k]; }
            });
        }
        return parts;
    };
    
    return (
        <>
        <h1 class="characterHeader" >{mode} Character</h1>
        <div class="centerDiv">
            <div class="characterBody" >
                <Form onSubmit={ (e) => { createCharacter(e) } }>
                    <div class="characterTopContainer" >
                        <div class="leftOfPicText" >
                            <Container fluid={true}><Row >
                                    { charData ? 
                                        Object.keys(splitData()[0]).map( (oneKey, i) => {
                                            return (
                                            <Col md="12" lg="12" xl="12">
                                                <EditFieldInput genFunc={ generatorClick } changeFunc={onChangeInput} saveFunc={onSaveInput} value={charData[oneKey]} ph={oneKey} inMode={mode} />
                                            </Col>
                                            );
                                        })
                                        : <></>
                                    }
                            </Row></Container>
                        </div>
                        <div class="picContainer" >
                            <Button onClick={deleteCharacter} color="danger" >Delete Character</Button>
                            <IndividualCharacter charImg={charImg} alt="Character Image" />
                        </div>
                    </div>
                    <div class="underPicText">
                        <Container fluid={true}><Row >
                        { charData ? 
                            Object.keys(splitData()[1]).map( (oneKey, i) => {
                                return (
                                <Col md="12" lg="12" xl="12">
                                    <EditFieldInput genFunc={ generatorClick } changeFunc={onChangeInput} saveFunc={onSaveInput} value={charData[oneKey]} ph={oneKey} inMode={mode} />
                                </Col>
                                )
                            })
                            : <></>
                        }
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
                    { mode === "Create" ? <Button type="submit" size="lg" color="success">Create Character</Button> : <></>}
                </Form>
            </div>
        </div>
        </>
    )
};

export default CreateCharacter;
