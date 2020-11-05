import React, {useState} from "react";
import { InputGroup, Input, InputGroupAddon, Button, InputGroupText } from "reactstrap";
import { setGlobalCssModule } from "reactstrap/lib/utils";

import { FaEdit, FaDice, FaSave } from 'react-icons/fa';
const EditFieldInput = (props) => {
    const [mode, setMode] = useState(props.inMode);

    return (
        <div style={{color:"black"}}>
            <InputGroup>
                { mode === "View" || mode === "Create" ?
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>{(props.ph).substring(4)}</InputGroupText>
                </InputGroupAddon>
                : <></>
                }
                <Input size="lg" placeholder={props.ph} value={props.value} onChange={props.changeFunc} disabled={mode === "View"? true:false}/>
                { mode === "View" ?
                <InputGroupAddon addonType="append">
                    <Button color="secondary" id="editBtn" onClick={ (e)=> { setMode("Edit") } }><FaEdit /></Button>
                </InputGroupAddon>
                :<></>
                }
                { mode === "Edit" ?
                <>
                    { props.genBtnVisible ? <InputGroupAddon addonType="append">
                        <Button onClick={ (e) => { props.genFunc(props.ph); } } color="secondary" id="generateBtn" ><FaDice /></Button>
                    </InputGroupAddon> : <></>}
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" id="saveBtn" onClick={ (e) => { setMode("View"); props.saveFunc(e); } }><FaSave /></Button>
                    </InputGroupAddon>
                </> 
                : <></>
                }
            </InputGroup>
        </div>
    )
};

export default EditFieldInput;