import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const TestimonialsContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '100px'
}))

export const TestimonialsTypography = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
}))