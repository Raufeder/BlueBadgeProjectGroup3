import React, { useState } from "react";
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';

import APIURL from "../helpers/environment";
// TODO import styles here

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const triggerUsernameInputChange = (event) => setUsername(event.target.value);
    const triggerPasswordInputChange = (event) => setPassword(event.target.value);
    const triggerPasswordConfirmInputChange = (event) => setPasswordConfirm(event.target.value);

    const registerSubmit = (event) => {
        event.preventDefault();

        if(username && password){
            if(password === passwordConfirm) {
                fetch(`${APIURL}user/register`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ user: {
                        username: username,
                        password: password
                    }})
                })
                .then(response => response.json())
                .then(() => {
                    alert ("User registered Successfully. Login to begin your journey!");
                })
                .catch(error => console.log(error));

            } else {
                alert("Passwords MUST match!");
            }
        }
    };



    return (
        <div className='authForm' id='registerForm'>
            <Form onSubmit={registerSubmit}>
                <h3>Register</h3>
                <FormGroup>
                    <Label htmlFor="registerUsername">Username: </Label>
                    <Input onChange={triggerUsernameInputChange} value={username} id="registerUsername" type="text" name="regsterUsername" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registerPassword">Password: </Label>
                    <Input onChange={triggerPasswordInputChange} value={password} id="registerPassword" type="password" name="registerPassword" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registerConfirmPassword">Confirm Password: </Label>
                    <Input onChange={triggerPasswordConfirmInputChange} value={passwordConfirm} id="registerConfirmPassword" type="password" name="registerConfirmPassword" />
                </FormGroup>
                <Button>Register</Button>
            </Form>          
        </div>
    );
};

export default Register;