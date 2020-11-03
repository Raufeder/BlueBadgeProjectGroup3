import React from "react";
import { Button, Form, FormGroup, Label, Input, textarea } from 'reactstrap';

const ContactUs = (props) => {

    return (
        <div>
            <Form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xnqovbrl" method="post">
                <FormGroup id="fs-frm-inputs">
                    <Label for="full-name">Full Name</Label>
                    <Input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                    <Label for="email-address">Email Address</Label>
                    <Input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" />
                    <Label for="message">Message</Label>
                    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required="" />
                    <Input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                </FormGroup>
                <Input type="submit" value="Submit" />
            </Form>
        </div>
    )
};


export default ContactUs;


/*





// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class myform extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xnqovbrl"
        method="POST"
      >

        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
};

*/

