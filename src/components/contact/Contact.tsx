import * as React from 'react';
import { ContactContainer, ContactTypography } from './Contact.styled.tsx';

const ContactPortafolio = () => {   

    return (
        <ContactContainer>
            <ContactTypography fontSize={"46px"} fontWeight={"bold"}>CONTACT</ContactTypography>
            <ContactTypography fontSize={"16px"} paddingBottom={"15px"}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</ContactTypography>
        </ContactContainer>
      );
} 

export { ContactPortafolio }