import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../constants/colors.ts";

export const HomeContainer = styled(Box)(() => ({
    width: '100%',
    textAlign: 'center'
}))

export const Title = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '56px',
    color: colors.black,
    lineHeight: '56px',
    padding: '20px 20px'
}))

export const Body = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    color: colors.black,
    lineHeight: '18px',
    padding: '20px 20px'
}))

export const ProjectsButton = styled(Button)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    color: colors.black,
    lineHeight: '18px',
    padding: '20px 20px'
}))