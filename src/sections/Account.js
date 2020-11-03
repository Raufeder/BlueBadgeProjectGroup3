import React, {useState, useEffect} from "react";
import DeleteAccount from "../components/DeleteAccount";
import UpdateProfileImage from "../components/UpdateProfileImage";
import IndividualUser from "../components/IndividualUser";
import ChangePasswordModal from "../components/ChangePasswordModal";

const Account = (props) => {

    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [accountInfo, setAccountInfo ] = useState(props.accountInfo) 

    
    return (

    <div>
         <p>{accountInfo.username ? accountInfo.username : ''}</p>
        <div>Account Comp
            <DeleteAccount />
            <UpdateProfileImage  userimg={accountInfo.url_userimage}/>
            <IndividualUser userimg={accountInfo.url_userimage}/>
            { showPasswordModal ? <ChangePasswordModal /> : <></> }
        </div>
        </div>
    )
};
export default Account;