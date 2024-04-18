import * as React from 'react';
import { TestimonialsContainer, TestimonialsTypography } from './Testimonials.styled.tsx';

const TestimonialsPortafolio = () => {   

    return (
        <TestimonialsContainer>
            <TestimonialsTypography fontSize={"46px"} fontWeight={"bold"}>TESTIMONIALS</TestimonialsTypography>
            <TestimonialsTypography fontSize={"16px"} paddingBottom={"15px"}>People I've worked with have said some nice things...</TestimonialsTypography>
        </TestimonialsContainer>
      );
} 

export { TestimonialsPortafolio }