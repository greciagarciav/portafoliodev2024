import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CollabsContainer, CollabsTitle, CollabsBody, CollabsImagesContainer, CollabsImage } from './Collabs.styled.tsx';

const CollabsPortafolio = () => { 

    const matches = useMediaQuery('(max-width:700px)');
    const dynamicStyles = {
        ...matches && {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"}
    }

    return(
        <CollabsContainer>
            <CollabsTitle>COLLABORATIONS</CollabsTitle>
            <CollabsBody>I'm proud to have collaborated with some awesome companies.</CollabsBody>
            <CollabsImagesContainer sx={{ display: { xs: 'flex', sm: 'grid' }, ...dynamicStyles }}>
                <CollabsImage src="https://www.latinka.com.pe/p/layer-view-image/v2/logo-tinka.svg"/>
                <CollabsImage src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"/>
                <CollabsImage src="https://www.encora.com/hubfs/Website%20v2%20Assets/Homepage/Nav/Encora%20Nav.svg"/>
                <CollabsImage style={{marginTop: "50px"}} src="https://www.toyotaperu.com.pe/sites/all/themes/toyota/images/toyota-logo-peru.svg"/>
                <CollabsImage src="https://avinkape.vtexassets.com/arquivos/logo.png"/>
                <CollabsImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEBrlG8efCMfYQd5zt5DZNgMpr0w9NKR9-XxUmnEK3shg7vrEJ6Mpwgwf0BUYXdLKyLU&usqp=CAU"/>                
            </CollabsImagesContainer>
        </CollabsContainer>
    )
}

export { CollabsPortafolio }