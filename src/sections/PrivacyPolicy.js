import React from "react";
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = (props) => {

    return (
        <div className="privacyPolicy">
            <h3 className="title">Privacy Policy of https://personary-client.herokuapp.com/</h3>
            <p>At Personary, we collect and manage user data according to the following Privacy Policy.</p>
            
            <h4>Data Collected</h4>
            <p>We only collect information you provide directly to us. The types of information we may collect include your name, email address and other identifying information you choose to provide.</p>

            <h4>Use of the Data</h4>
            <p>We only use your personal information to provide you the Personary services or to communicate with you about the Website.</p>

            <p>We employ industry standard techniques to protect against unauthorized access of data about you that we store, including personal information.</p>

            <p>We do not share personal information you have provided to us without your consent, unless:</p>

            <ul>
                <li>Doing so is appropriate to carry out your own request</li>
                <li>We believe it's needed to enforce our legal agreements or that is legally required</li>
                <li>We believe it's needed to detect, prevent or address fraud, security or technical issues</li>
            </ul>

            <h4>Sharing of Data</h4>
            <p>We do not share your personal information with third parties.</p>
        
            <h4>Cookies</h4>
            <p>We do not use cookies on our site to remember your preferences.</p>

            <h4>Opt-Out, Communication Preferences</h4>
            <p>You may not modify your communication preferences and/or opt-out from specific communcations as we will only communicate with you under one of the circumstances as outlined in 'Use of the Data'.</p>
        
            <h4>Security</h4>
            <p>We take reasonable steps to protect personally identifiable information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. But, you should keep in mind that no Internet transmission is ever completely secure or error-free. In particular, email sent to or from the Sites may not be secure.</p>
        
            <h4>About Children</h4>
            <p>The Website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information via the Website from visitors in this age group.</p>
        
            <h4>Changes to the Privacy Policy</h4>
            <p>We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used.</p>

            <p>If we make major changes in the way we collect or use information, we will notify you by posting an announcement on the Website or sending you an email.</p>      

            <br/>
        
        </div>
    )
};

export default PrivacyPolicy;