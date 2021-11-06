import React from "react";
import { Form, FormGroup, Label, Input, textarea } from "reactstrap";
import "../styles/ContactUs.css";

const ContactUs = (props) => {
  return (
    <div className="contactForm">
      <h2> - Contact Us -</h2>
      <div className="centerMe">
        <Form
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/xnqovbrl"
          method="post"
        >
          <FormGroup id="fs-frm-inputs">
            <Label for="full-name" className="formLabels">
              Full Name
            </Label>
            <Input
              type="text"
              name="name"
              id="full-name"
              placeholder="First and Last"
              required=""
            />
            <Label for="email-address" className="formLabels">
              Email Address
            </Label>
            <Input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.tld"
              required=""
            />
            <Label for="message" className="formLabels">
              Message
            </Label>
            <br />
            <textarea
              rows="5"
              cols="60"
              name="message"
              id="message"
              placeholder="Thoughts, Questions, Suggestions or Concerns?"
              required=""
            />
            <Input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />
          </FormGroup>
          <Input type="submit" value="Submit" id="inputButton" />
        </Form>
      </div>
    </div>
  );
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
