import styled from "@emotion/styled";
import { Box, Tab, Typography } from "@mui/material";
import { colors } from "../../constants/colors.ts"
import { TabContext, TabList, TabPanel } from "@mui/lab";

export const TabsMainContainer = styled(Box)(()=> ({ 
    width: '100%',
    typography: 'body1'
 }))

 export const LogoNameContainer = styled(Box)(()=> ({ 
   marginRight: "30px", 
   display: "flex",
   
   alignItems: "center"
}))

export const LogoName = styled(Typography)(() => ({    
   fontFamily: "Source Sans Pro",
   color: "rgba(0, 0, 0, 0.6)",
   fontWeight: "bold"
}))

export const LogoContainer = styled(Box)(()=> ({ 
   width: "45px",
    height: "45px",
    borderRadius: "50px",
    overflow: "hidden",
    marginRight: "1.5rem",
    
}))

export const Logo = styled.img(() => ({
   width: '101%',
   height: "100%"
}))

 export const TabsListContainer = styled(Box)(()=> ({ 
    borderBottom: 1,
    padding: "19px",
    borderColor: 'divider',
    display: "flex",
    justifyContent: "space-between"
 }))

 export const TabsListEventContainer = styled(TabList)(()=> ({ 
    background: colors.white,
 }))

 export const TabsListTab = styled(Tab)(()=> ({ 
    fontFamily: "Source Sans Pro",
    background: colors.white,
    fontWeight: "bold"
 }))

 export const TabsListPanelsContainer = styled(TabContext)(()=> ({ 
    background: colors.white, 
 }))

 export const TabsPanelContent = styled(TabPanel)(()=> ({ 
    background: colors.white, 
 }))








  
