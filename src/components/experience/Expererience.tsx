import * as React from 'react';
import { ExperienceContainer, ExperienceTypography } from './Experience.styled.tsx';

const ExperiencePortafolio = () => {   

    return (
        <ExperienceContainer>
            <ExperienceTypography fontSize={"46px"} fontWeight={"bold"}>EXPERIENCE</ExperienceTypography>
            <ExperienceTypography fontSize={"16px"} paddingBottom={"15px"}>Here you will find my relevant experience as a frontend developer.</ExperienceTypography>
        </ExperienceContainer>
      );
} 

export { ExperiencePortafolio }