import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../constants/colors.ts";

export const HomeContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    textAlign: "center" as const,
    maxWidth: "90rem",
}))

export const Title = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    fontSize: '4rem',
    color: colors.black,
    letterSpacing: "3px",
    margin: "50px 0px"  
}))

export const Body = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontSize: '2.2rem',
    color: colors.black,
    lineHeight: '1.6',
    margin: "30px 50px 0px"
}))

export const ProjectsButton = styled(Button)(() => ({
    fontFamily: "Source Sans Pro",
    marginTop: "50px",
    padding: "15px 80px",
    fontSize: "1rem",
    fontWeight: "bold"
}))