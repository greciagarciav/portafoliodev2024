import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ProjectsContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '100px'
}))

export const ProjectsTypography = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
}))

export const ProjectsCardsContainer = styled(Box)(() => ({
    width: '100%',
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    justifyContent: "center"
}))