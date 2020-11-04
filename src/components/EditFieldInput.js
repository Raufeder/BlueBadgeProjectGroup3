import React, {useState} from "react";
import { InputGroup, Input, InputGroupAddon, Button, InputGroupText } from "reactstrap";
import { setGlobalCssModule } from "reactstrap/lib/utils";

import { FaEdit, FaDice, FaSave } from 'react-icons/fa';
const EditFieldInput = (props) => {
    const [mode, setMode] = useState(props.inMode);
    return (
        <div style={{color:"black"}}>
            <InputGroup>
                { mode === "View" ?
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>{props.ph}</InputGroupText>
                </InputGroupAddon>
                : <></>
                }
                <Input size="lg" placeholder={props.ph} value={props.value} />
                { mode === "View" ?
                <InputGroupAddon addonType="append">
                    <Button color="secondary" id="editBtn" onClick={ (e)=> { setMode("Edit") } }><FaEdit /></Button>
                </InputGroupAddon>
                :<></>
                }
                { mode === "Edit" ?
                <>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" id="generateBtn" ><FaDice /></Button>
                    </InputGroupAddon>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" id="saveBtn" onClick={ () => { setMode("View"); } }><FaSave /></Button>
                    </InputGroupAddon>
                </> 
                : <></>
                }
            </InputGroup>
        </div>
    )
};

export default EditFieldInput;