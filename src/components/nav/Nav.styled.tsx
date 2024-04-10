import styled from "@emotion/styled";
import { Box, Tab } from "@mui/material";
import { colors } from "../../constants/colors.ts"
import { TabContext, TabList, TabPanel } from "@mui/lab";

export const TabsMainContainer = styled(Box)(()=> ({ 
    width: '100%', 
    typography: 'body1'
 }))

 export const TabsListContainer = styled(Box)(()=> ({ 
    borderBottom: 1, 
    borderColor: 'divider',
    display: "flex",
    justifyContent: "end"
 }))

 export const TabsListEventContainer = styled(TabList)(()=> ({ 
    background: colors.white,
 }))

 export const TabsListTab = styled(Tab)(()=> ({ 
    background: colors.white, 
 }))

 export const TabsListPanelsContainer = styled(TabContext)(()=> ({ 
    background: colors.white, 
 }))

 export const TabsPanelContent = styled(TabPanel)(()=> ({ 
    background: colors.white, 
 }))








  
