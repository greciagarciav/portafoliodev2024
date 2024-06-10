import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ExperienceContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '70px',
    padding: "20px"
}))

export const ExperienceTitle = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontSize: "46px",
    fontWeight: "bold"
}))

export const ExperienceBody = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    paddingBottom: "20px",
    textAlign: "center" as const
}))