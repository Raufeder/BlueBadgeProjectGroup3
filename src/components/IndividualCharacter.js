import React from "react";

const IndividualCharacter = (props) => {

    return (
        <img class="characterPic" src={props.charImg} alt={props.alt} />
    )
};

export default IndividualCharacter;