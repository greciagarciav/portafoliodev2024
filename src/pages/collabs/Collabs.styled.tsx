import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { colors } from "../../constants/colors.ts";

export const CollabsContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '100px',
    padding: "20px"
}))

export const CollabsTitle = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    color: colors.black,
    fontSize: "46px",
    fontWeight: "bold",

    "@media (max-width: 600px)": {
        fontSize: "40px"
    }
}))

export const CollabsBody = styled(Typography)(() => ({
    fontFamily: "Source Sans Pro",
    color: colors.black,
    fontSize: "16px",
    textAlign:"center" as const
}))

export const CollabsImagesContainer = styled(Box)(() => ({
    width: '100%',
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    justifyContent: "center",
    paddingTop: "25px"
}))

export const CollabsImage = styled.img(() => ({
    width: '200px',
    margin: "30px"
}))