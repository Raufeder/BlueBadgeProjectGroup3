import React, {useState} from "react";
import DeleteAccount from "../components/DeleteAccount";
import UpdateProfileImage from "../components/UpdateProfileImage";

import ChangePasswordModal from "../components/ChangePasswordModal";
import '../styles/Account.css';

const Account = (props) => {

    const [showPasswordModal, setShowPasswordModal] = useState(true);
    const [accountInfo, setAccountInfo ] = useState(props.accountInfo) 


    
    return (
        <div>
        
            <div className="profilePicture"><UpdateProfileImage  userimg={accountInfo.url_userimage}/><br/></div>
                <div className="mainAcctDiv">
                <div className="accountHeader">- My Account -</div>
                <div className="userName">{accountInfo.username}</div>
                <div className="password">Password:   ****************</div>
                <div className="changePassword">{ showPasswordModal ? <ChangePasswordModal /> : <></> }</div>
                <div className="dateJoined">Date Joined: {accountInfo.createdAt}</div>
                <div className="deleteAcct"><DeleteAccount /></div>
            </div>

        </div> 
    )

};

export default Account;