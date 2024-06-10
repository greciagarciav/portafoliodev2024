import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../constants/colors.ts";

export const AboutContainer = styled(Box)(() => ({
    width: '100%',
    marginTop: '70px',
    
}))

export const FirstContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    padding: '20px 20px 0px'
}))

export const SecondContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex"
}))

export const SideContainer = styled(Box)(() => ({
    width: '100%',
    padding: '20px 20px'
}))

export const Title = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontWeight: 'bold',
    color: colors.black,
    lineHeight: '56px',
    paddingLeft: '20px'
}))

export const Body = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontWeight: '400',
    fontSize: '16px',
    color: colors.black,
    lineHeight: '23px',
    
}))

export const SkillsButton = styled(Button)(() => ({
    fontFamily: "Source Sans Pro",
    fontWeight: 'bold',
    fontSize: '12px',
    color: "darkslategray!important",
    lineHeight: '18px',
    margin: "5px",
    padding: '15px 15px'
}))

export const ProjectsButton = styled(Button)(() => ({
    fontFamily: "Source Sans Pro",
    fontWeight: 'bold',
    fontSize: '16px',
    color: colors.white,
    lineHeight: '18px',
    marginTop: "15px",
    padding: "15px 80px",
}))