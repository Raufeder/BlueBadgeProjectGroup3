import React from "react";

const IndividualCharacter = (props) => {

    return (
        <div>
            <img class="characterPic" src="https://ih1.redbubble.net/image.1096215820.0456/ur,shower_curtain_closed,square,600x600.1.jpg" alt={props.alt} />
            <p>{props.charName}</p>
        </div>
    )
};

export default IndividualCharacter;