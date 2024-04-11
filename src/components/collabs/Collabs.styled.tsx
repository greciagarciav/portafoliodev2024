import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { colors } from "../../constants/colors.ts";

export const CollabsContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center", 
    flexDirection: "column" as const,
}))

export const CollabsTypography = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    fontWeight: '400',
    fontSize: '2rem',
    color: colors.black,
    lineHeight: '56px',
    padding: '20px 20px',
}))

export const CollabsImagesContainer = styled(Box)(() => ({
    width: '100%',
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    justifyContent: "center",
    paddingTop: "25px"
}))

export const CollabsImage = styled.img(() => ({
    width: '200px',
    margin: "10px"
}))