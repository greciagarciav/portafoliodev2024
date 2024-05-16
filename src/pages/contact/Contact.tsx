import * as React from 'react';
import { ContactContainer, ContactTypography } from './Contact.styled.tsx';
import { ProjectsButton } from "../about/About.styled.tsx"


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ContactPortafolio = () => {   

    return (
        <ContactContainer>
            <ContactTypography fontSize={"46px"} fontWeight={"bold"}>CONTACT</ContactTypography>
            <ContactTypography fontSize={"16px"} paddingBottom={"15px"}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</ContactTypography>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '70ch' },
                    display: "flex", flexDirection: "column"
                }}
                noValidate
                autoComplete="off">
                   
                    <TextField
                        required
                        id="name"
                        label="Name"
                        
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        
                    />                                      
                    <TextField
                            required                           
                            id="message"
                            label="Message"
                            multiline
                            rows={5}
                            
                    />
                    <ProjectsButton variant="contained">SUBMIT</ProjectsButton>
            </Box>
        </ContactContainer>
      );
} 

export { ContactPortafolio }