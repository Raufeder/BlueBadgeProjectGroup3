import React, {useState} from "react";
import DeleteAccount from "../components/DeleteAccount";
import UpdateProfileImage from "../components/UpdateProfileImage";

import ChangePasswordModal from "../components/ChangePasswordModal";

const Account = (props) => {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    return (
        <div>Account Comp
            <DeleteAccount />
            <UpdateProfileImage />
           <ChangePasswordModal />
        </div>
    );
};

export default Account;