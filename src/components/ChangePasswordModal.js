import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import APIURL from "../helpers/environment";

import "../styles/ChangePassword.css";

const ChangePasswordModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  // const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  // const changeUnmountOnClose = e => {
  //     let value = e.target.value;
  //     setUnmountOnClose(JSON.parse(value));
  // }

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setPasswordConfirm] = useState("");

  const triggerPasswordInputChange = (event) =>
    setOldPassword(event.target.value);
  const triggerNewPasswordInputChange = (event) =>
    setNewPassword(event.target.value);
  const triggerNewPasswordConfirmInputChange = (event) =>
    setPasswordConfirm(event.target.value);

  const handleClick = (event) => {
    toggle();
    if (oldPassword && newPassword) {
      if (newPassword === newPasswordConfirm) {
        fetch(`${APIURL}user/changepassword`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: props.username,
              oldPassword: oldPassword,
              newPassword: newPassword,
            },
          }),
        })
          .then((response) => response.json())
          .then((msg) => {
            console.log(msg);
          })
          .catch((error) => console.log(error));
      } else {
        alert("Passwords MUST match!");
      }
    }
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <h6 className="changePasswordText" onClick={toggle}>
          Change Password
        </h6>

        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className}
          //   unmountOnClose={unmountOnClose}
        >
          <ModalHeader toggle={toggle}>Change Password</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label htmlFor="oldPassword">Old Password: </Label>
              <Input
                onChange={triggerPasswordInputChange}
                value={oldPassword}
                id="oldPassword"
                type="password"
                name="oldPassword"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="newPassword">New Password: </Label>
              <Input
                onChange={triggerNewPasswordInputChange}
                value={newPassword}
                id="newPassword"
                type="password"
                name="newPassword"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="newPasswordConfirm">Confirm New Password: </Label>
              <Input
                onChange={triggerNewPasswordConfirmInputChange}
                value={newPasswordConfirm}
                id="newPasswordConfirm"
                type="password"
                name="newPasswordConfirm"
              />
            </FormGroup>{" "}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleClick}>
              Update Password
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
};

export default ChangePasswordModal;
