import React, { useState, useEffect } from "react";

import IndividualCharacter from "../components/IndividualCharacter";

const MyCharacters = (props) => {

    const [ characterList, setCharacterList ] = useState([]);
    // const [ modalOpen, setModalOpen ] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/character/", {
            headers: {
                Authorization: props.token
            },
        })
        .then(response => response.json())
        .then(body => {
            setCharacterList(body.results);
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <div id="listView">
           <div id="listViewHeader"> 
               <h1>My Characters</h1>
               <div id="characterSection">
            <IndividualCharacter />
            <IndividualCharacter />
            <IndividualCharacter />
            <IndividualCharacter />
            <IndividualCharacter />
            <IndividualCharacter />
            </div>
            </div>
        </div>
    )
};

export default MyCharacters;