import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TestimonialsContainer, TestimonialsTitle, TestimonialsBody } from './Testimonials.styled.tsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Testimonial } from "../../models/interfaces/testimonial.interface"

type TestimonialsListProps = {
    testimonials: Testimonial[]
}

const TestimonialsPortafolio: React.FC<TestimonialsListProps> = ({ testimonials }) => {   

    const matches = useMediaQuery('(max-width:700px)');
    const dynamicStyles = {
        ...matches && {maxWidth: "90%"}
    }

    return (
        <TestimonialsContainer>
            <TestimonialsTitle >TESTIMONIALS</TestimonialsTitle>
            <TestimonialsBody>People I've worked with have said some nice things...</TestimonialsBody>

            <List sx={{ width: '100%', maxWidth: "55%", bgcolor: 'background.paper', ...dynamicStyles }}>
                {testimonials.map((testimonial, index) => (
                    
                    <ListItem key={testimonial.id} sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center', paddingBottom: "50px" }}>
                        <ListItemAvatar>
                            <Avatar alt={testimonial.name} src={testimonial.imageUrl} sx={{ width: 100, height: 100, marginRight: "15px" }} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary={
                                <Typography sx={{ fontWeight: "bold",  fontSize: "16px",  fontFamily: "Source Sans Pro"}}>{testimonial.name}</Typography>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline', fontSize: "16px" , fontFamily: "Source Sans Pro" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {testimonial.role}
                                    </Typography>
                                    <Typography component="span" sx={{ fontSize: "16px", fontFamily: "Source Sans Pro" }} >
                                        {testimonial.description}
                                    </Typography>
                                    
                                </React.Fragment>
                            }
                        />                            
                    </ListItem> 
                             
                ))}
                
            </List>

        </TestimonialsContainer>
      );
} 

export { TestimonialsPortafolio }
