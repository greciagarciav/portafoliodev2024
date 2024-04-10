import styled from "@emotion/styled";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography,  Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from "@mui/material";

export const ProjectsContainer = styled(Box)(() => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
}))

export const ProjectsCard = styled(Card)(() => ({
    width: '200px',
}))

export const ProjectsCardActionArea = styled(CardActionArea)(() => ({
    width: '100%',
}))

export const ProjectsCardContent = styled(CardContent)(() => ({
    width: '100%',
}))

export const ProjectsCardMedia = styled(CardMedia)(() => ({
    width: '100%',
}))

export const ProjectsCardTypography = styled(Typography)(() => ({    
    fontFamily: 'Roboto',
    fontStyle: 'normal',
}))

export const ProjectsCardDialog = styled(Dialog)(() => ({
    width: '100%',
}))

export const ProjectsCardDialogContent = styled(DialogContent)(() => ({
    width: '100%',
}))

export const ProjectsCardDialogTitle = styled(DialogTitle)(() => ({
    width: '100%',
}))

export const ProjectsCardDialogContentText = styled(DialogContentText)(() => ({
    width: '100%',
}))

export const ProjectsCardDialogActions = styled(DialogActions)(() => ({
    width: '100%',
}))

export const ProjectsCardDialogButton = styled(Button)(() => ({
    width: '100%',
}))