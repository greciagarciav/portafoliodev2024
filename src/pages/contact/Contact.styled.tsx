import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ContactContainer = styled(Box)(() => ({
    width: 'auto',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '100px',
    padding: "20px"
}))

export const ContactTitle = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontSize: "46px",
    fontWeight:"bold"
}))

export const ContactBody = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    paddingBottom: "20px"
}))