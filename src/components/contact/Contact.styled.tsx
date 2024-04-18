import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ContactContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
}))

export const ContactTypography = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
}))