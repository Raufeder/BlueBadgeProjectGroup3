import React from "react";

const UpdateProfileImage = (props) => {

    return (
        
        <div><img className="profilePic" src={props.userimg} alt="user profile image"/></div>
    )
};

export default UpdateProfileImage;