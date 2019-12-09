import React from 'react';
import Footer from './Footer';
import Media from './Media';
import {ContactSection, ContactTitle, ContactSpan, ContactForm, FormInput, InputText, InputEmail, InputSub, TextArea, InputSubmit} from './ContactStyle.js'

const Contact = () => {
    return(
        <React.Fragment>
            <ContactSection>
                <div className="container">
                    <ContactTitle><ContactSpan>Drop </ContactSpan>Me A line</ContactTitle>
                    <ContactForm action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>
                        <InputSub type="text" placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message" />
                    </ContactForm>
                </div>
            </ContactSection>
            <Media />
            <Footer />
        </React.Fragment>
    )
}
export default Contact;