import * as React from 'react';
import { ContactContainer, ContactTypography } from './Contact.styled.tsx';
import { ProjectsButton } from "../about/About.styled.tsx"


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ContactPortafolio = () => {   

    return (
        <ContactContainer sx={{textAlign: "center"}}>
            <ContactTypography fontSize={"46px"} fontWeight={"bold"}>CONTACT</ContactTypography>
            <ContactTypography fontSize={"16px"} paddingBottom={"15px"}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</ContactTypography>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                    display: "flex", flexDirection: "column", width: "100%", margin: "0px 10px"
                }}
                noValidate
                autoComplete="off">
                   
                    <TextField fullWidth
                        required
                        id="name"
                        label="Name"
                        
                    />
                    <TextField fullWidth
                        required
                        id="email"
                        label="Email"
                        
                    />                                      
                    <TextField fullWidth
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