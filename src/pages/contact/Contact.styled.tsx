import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ContactContainer = styled(Box)(() => ({
    width: 'auto',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '100px'
}))

export const ContactTypography = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro"
}))