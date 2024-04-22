import * as React from 'react';
import { TestimonialsContainer, TestimonialsTypography } from './Testimonials.styled.tsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const TestimonialsPortafolio = () => {   

    return (
        <TestimonialsContainer>
            <TestimonialsTypography fontSize={"46px"} fontWeight={"bold"}>TESTIMONIALS</TestimonialsTypography>
            <TestimonialsTypography fontSize={"16px"} paddingBottom={"15px"}>People I've worked with have said some nice things...</TestimonialsTypography>

            <List sx={{ width: '100%', maxWidth: "55%", bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start" sx={{ padding: "20px 20px" }}>
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://anniebombanie.com/assets/profile-dylan.jpg" sx={{ width: 100, height: 100, marginRight: "15px" }} />
                    </ListItemAvatar>
                    <ListItemText 
                    primary="Dylan McGuinty Jr.,"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Lawyer, McGuin
                        </Typography>
                        {" — We hired Annie to rework the content and design of our website. She has been terrific- collaborative, diligent, honest and professional, offering solutions we had not thought about. We have found that she delivers efficiently and in a timely manner. Her work on our website successfully communicates to prospective clients the kind of people and law firm that we are and has brought innumerable clients to our firm through a streamlined and attractive website. I would recommend Annie in a heartbeat."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" sx={{ marginLeft: "0px"}} />
                <ListItem alignItems="flex-start" sx={{ padding: "20px 20px" }}>
                    <ListItemText 
                    primary="Dylan McGuinty Jr.,"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Lawyer, McGuin
                        </Typography>
                        {" — We hired Annie to rework the content and design of our website. She has been terrific- collaborative, diligent, honest and professional, offering solutions we had not thought about. We have found that she delivers efficiently and in a timely manner. Her work on our website successfully communicates to prospective clients the kind of people and law firm that we are and has brought innumerable clients to our firm through a streamlined and attractive website. I would recommend Annie in a heartbeat."}
                        </React.Fragment>
                    }
                    />
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://anniebombanie.com/assets/profile-dylan.jpg" sx={{ width: 100, height: 100, marginLeft: "15px" }} />
                    </ListItemAvatar>
                </ListItem>
                <Divider variant="inset" component="li" sx={{ marginLeft: "0px"}} />
                <ListItem alignItems="flex-start" sx={{ padding: "20px 20px" }}>
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://anniebombanie.com/assets/profile-dylan.jpg" sx={{ width: 100, height: 100, marginRight: "15px" }} />
                    </ListItemAvatar>
                    <ListItemText 
                    primary="Dylan McGuinty Jr.,"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Lawyer, McGuin
                        </Typography>
                        {" — We hired Annie to rework the content and design of our website. She has been terrific- collaborative, diligent, honest and professional, offering solutions we had not thought about. We have found that she delivers efficiently and in a timely manner. Her work on our website successfully communicates to prospective clients the kind of people and law firm that we are and has brought innumerable clients to our firm through a streamlined and attractive website. I would recommend Annie in a heartbeat."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>

        </TestimonialsContainer>
      );
} 

export { TestimonialsPortafolio }