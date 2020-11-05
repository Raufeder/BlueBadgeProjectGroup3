import React, { useState } from "react";
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';
import '../styles/Register.css'
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
                    console.log("User Registered Successfully!")
                    // fetch(`${APIURL}user/login`, {
                    //     method: 'POST',
                    //     headers: {
                    //         "Content-Type": "application/json"
                    //     },
                    //     body: JSON.stringify({
                    //         username: username,
                    //         password: password
                    //     })
                    // })
                    // .then(response => response.json())
                    // .then((body) => {
                    //     props.updateToken(data.sessionToken);
                    // })
                })
                .catch(error => console.log(error));

            } else {
                alert("Passwords MUST match!");
            }
        }
    };



    return (
        <div className='authForm' id='registerForm'>
            <Form className="mainLogin" onSubmit={registerSubmit}>
                <FormGroup>
                    <Label htmlFor="registerUsername"></Label>
                    <Input className="Input" placeholder="Username" onChange={triggerUsernameInputChange} value={username} id="registerUsername" type="text" name="regsterUsername" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registerPassword"></Label>
                    <Input className="Input" placeholder="Password" onChange={triggerPasswordInputChange} value={password} id="registerPassword" type="password" name="registerPassword" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registerConfirmPassword"></Label>
                    <Input className="Input" placeholder="Confirm Password" onChange={triggerPasswordConfirmInputChange} value={passwordConfirm} id="registerConfirmPassword" type="password" name="registerConfirmPassword" />
                </FormGroup>
                <Button className="Button">Register</Button>
            </Form>          
        </div>
    );
};

export default Register;