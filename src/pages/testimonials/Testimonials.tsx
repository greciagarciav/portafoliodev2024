import * as React from 'react';
import { TestimonialsContainer, TestimonialsTypography } from './Testimonials.styled.tsx';
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

    return (
        <TestimonialsContainer>
            <TestimonialsTypography fontSize={"46px"} fontWeight={"bold"}>TESTIMONIALS</TestimonialsTypography>
            <TestimonialsTypography fontSize={"16px"} paddingBottom={"15px"}>People I've worked with have said some nice things...</TestimonialsTypography>

            <List sx={{ width: '100%', maxWidth: "55%", bgcolor: 'background.paper' }}>
                {testimonials.map((testimonial, index) => (
                    
                    <ListItem key={testimonial.id} sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center' }}>
                        <ListItemAvatar>
                            <Avatar alt={testimonial.name} src={testimonial.imageUrl} sx={{ width: 100, height: 100, marginRight: "15px" }} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary={testimonial.name}
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {testimonial.role}
                                </Typography>
                                {testimonial.description}
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
