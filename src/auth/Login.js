import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountInfo, setAccountInfo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                username: username, 
                password: password
            }}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            if(data.error){ console.log(data.error); }
            else{
                props.updateToken(data.sessionToken);
                props.fetchInfo(data.user.username);
            }
        })
     }

    return (
        <div>
            <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
          <FormGroup>
                    <Label htmlFor="username">Username</Label>
                   <Input onChange={(e) => setUsername(e.target.value)} name="username" type="text" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form> 
         </div>
     )
    };

export default Login;