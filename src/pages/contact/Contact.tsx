import * as React from 'react';
import emailjs from '@emailjs/browser';
import { ContactContainer, ContactTitle, ContactBody } from './Contact.styled.tsx';
import { ProjectsButton } from "../about/About.styled.tsx"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ContactPortafolio = () => {  
    
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [stateMessage, setStateMessage] = React.useState('');

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
          .sendForm(
            'service_yovqf0r',
            'template_3tdox3m',
            e.target,
            'yhKK2azgt3Xr1nqYo'
          )
          .then(
            (result) => {
              setStateMessage('Message sent!');
              setIsSubmitting(false);
              setTimeout(() => {
                setStateMessage('');
              }, 5000); // hide message after 5 seconds
            },
            (error) => {
              setStateMessage('Something went wrong, please try again later');
              setIsSubmitting(false);
              setTimeout(() => {
                setStateMessage('');
              }, 5000); // hide message after 5 seconds
            }
          );
        
        // Clears the form after sending the email
        e.target.reset();
      };

    return (
        <ContactContainer sx={{textAlign: "center"}}>
            <ContactTitle>CONTACT</ContactTitle>
            <ContactBody>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</ContactBody>
            <Box onSubmit={sendEmail} component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                    display: "flex", flexDirection: "column", width: "100%", margin: "0px 10px"
                }}
                noValidate
                autoComplete="off">
                   
                    <TextField fullWidth
                        required
                        type="text"
                        id="name"
                        label="Name"
                        name="to_name"                        
                    />
                    <TextField fullWidth
                        required
                        type="email"
                        id="email"
                        label="Email"
                        name="from_name"                        
                    />                                      
                    <TextField fullWidth
                            required                           
                            id="message"
                            label="Message"
                            name="message"
                            multiline
                            rows={5}                            
                    />
                    <ProjectsButton type="submit" variant="contained" disabled={isSubmitting}>SUBMIT</ProjectsButton>
                    {stateMessage && <p>{stateMessage}</p>}
            </Box>
        </ContactContainer>
      );
} 

export { ContactPortafolio }