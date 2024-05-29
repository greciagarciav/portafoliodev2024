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
    maxWidth: "80%",
    marginTop: '100px',
    padding: "20px",

    "@media (max-width: 600px)": {
        maxWidth: "100%"
      }
}))

export const Title = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    fontSize: '4rem',
    color: colors.black,
    letterSpacing: "3px",
    margin: "50px 0px",

    "@media (max-width: 600px)": {
        margin: "0px",
        letterSpacing: "0px",
        fontSize: '2.5rem',
      }
}))

export const Body = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontSize: '2.2rem',
    color: colors.black,
    lineHeight: '1.6',
    marginTop: "30px",
    textAlign: "center" as const,

    "@media (max-width: 600px)": {
        fontSize: '2rem',
        lineHeight: '1.2',
      }
}))

export const ProjectsButton = styled(Button)(() => ({
    fontFamily: "Source Sans Pro",
    marginTop: "50px",
    padding: "15px 80px",
    fontSize: "1rem",
    fontWeight: "bold"
}))