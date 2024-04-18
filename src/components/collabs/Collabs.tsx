import * as React from 'react';
import { CollabsContainer, CollabsTypography, CollabsImagesContainer, CollabsImage } from './Collabs.styled.tsx';

const CollabsPortafolio = () => { 
    return(
        <CollabsContainer>
            <CollabsTypography fontSize={"46px"} fontWeight={"bold"}>COLLABORATIONS</CollabsTypography>
            <CollabsTypography fontSize={"16px"} padding={"20px"}>I'm proud to have collaborated with some awesome companies.</CollabsTypography>
            <CollabsImagesContainer>
                <CollabsImage src="https://mattfarley.ca/img/logos/briteweb.svg"/>
                <CollabsImage src="https://mattfarley.ca/img/logos/domain7.svg"/>
                <CollabsImage src="https://mattfarley.ca/img/logos/redstamp.svg"/>
                <CollabsImage src="https://mattfarley.ca/img/logos/goodkind.svg"/>
                <CollabsImage src="https://mattfarley.ca/img/logos/briteweb.svg"/>
                <CollabsImage src="https://mattfarley.ca/img/logos/domain7.svg"/>
                <CollabsImage src="https://mattfarley.ca/img/logos/redstamp.svg"/>
                <CollabsImage src="https://mattfarley.ca/img/logos/goodkind.svg"/>
            </CollabsImagesContainer>
        </CollabsContainer>
    )
}

export { CollabsPortafolio }