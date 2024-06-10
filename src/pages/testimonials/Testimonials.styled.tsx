import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const TestimonialsContainer = styled(Box)(() => ({
    fontFamily: "Source Sans Pro",
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '70px',
    padding: "20px",
}))

export const TestimonialsTitle = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontSize: "46px",
    fontWeight: "bold",
}))

export const TestimonialsBody = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    paddingBottom: "4px",
    textAlign: "center" as const,
    paddingLeft: "20px",
    paddingRight: "20px"
}))