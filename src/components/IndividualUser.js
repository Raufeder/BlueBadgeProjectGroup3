import React, { useEffect } from "react";
import ChangePasswordModal from "./ChangePasswordModal";
import Sidebar from "../sections/Sidebar";

const IndividualUser = (props) => {
const [ accountInfo, setAccountInfo ] = useState([]);   

    const fetchAccountInfo = () => {
    fetch('http://localhost:8080/user/view', {
        method: 'GET',
        headers: new Headers({
            "Content-Type": 'application/json',
            "Authorization": props.token
        })
    })
    .then(()

    const accountInfo = () => {
        return SpeechRecognitionResultList.map( (results, index) => {
            return(

            )
        })
    }

    return (
        <div><h1>{data.username}</h1></div>
    )
}  
    

export default IndividualUser;