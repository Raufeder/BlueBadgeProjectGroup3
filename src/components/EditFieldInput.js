import React, {useState} from "react";
import { InputGroup, Input, InputGroupAddon, Button, InputGroupText } from "reactstrap";

const EditFieldInput = (props) => {
    
    return (
        <div style={{color:"black"}}>
            <InputGroup>
                { props.inMode === "View" ?
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>{props.ph}</InputGroupText>
                </InputGroupAddon>
                : <></>
                }
                <Input size="lg" placeholder={props.ph}/>
                { props.inMode === "View" ?
                <InputGroupAddon addonType="append">
                    <Button color="secondary" id="editBtn">Edit</Button>
                </InputGroupAddon>
                :<></>
                }
                { props.inMode === "Edit" ?
                <>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" id="generateBtn" >Generate</Button>
                    </InputGroupAddon>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" id="saveBtn" >Save</Button>
                    </InputGroupAddon>
                </> 
                : <></>
                }
            </InputGroup>
        </div>
    )
};

export default EditFieldInput;