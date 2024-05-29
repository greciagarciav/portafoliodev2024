import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ProjectsContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '100px',
    padding: "20px",    
}))

export const ProjectsTitle = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    textAlign: "center" as const,
    fontSize: "46px",
     fontWeight: "bold"
}))

export const ProjectsBody = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    textAlign: "center" as const,
    fontSize: "16px",
    paddingBottom: "20px"
}))

export const ProjectsCardsContainer = styled(Box)(() => ({
    width: '100%',
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    justifyContent: "center"
}))