import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ExperienceContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '100px'
}))

export const ExperienceTypography = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
}))