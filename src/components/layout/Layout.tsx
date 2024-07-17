import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LogoContainer, Logo } from "./Layout.styled.tsx";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Collaborations', 'Testimonials', 'Experience', 'Contact'];

function Layout(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center', 
        display:" flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Link to={"/"} style={{ textDecoration: 'none', display: 'flex', flexDirection: "column" , alignItems: 'center' }}>
        <LogoContainer sx={{marginTop: "15px"}}>
            <Logo src='https://raw.githubusercontent.com/greciagarciav/portafolio-greciagarciav/master/assets/gre.jpg'/>
        </LogoContainer>                        
        <Typography variant="h6" sx={{ my: 2, fontFamily: "Source Sans Pro", color: "black" }}>
          GRECIA GARCIA
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
            <Link key={item} to={item === "Home" ? ("/") : ("/" + item.toLowerCase()) }>
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText sx={{fontFamily: "Source Sans Pro"}} primary={item} />
                    </ListItemButton>
                </ListItem>
            </Link>
          
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={"/"} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <LogoContainer  sx={{ marginRight: "10px" , display: { xs: 'none', md: 'block' } }}>
                <Logo src='https://raw.githubusercontent.com/greciagarciav/portafolio-greciagarciav/master/assets/gre.jpg'/>
            </LogoContainer> 
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white", display: { xs: 'none', md: 'block', fontFamily: "Source Sans Pro" } }}
            >
              GRECIA GARCIA
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Link key={item} to={ item === "Home" ? ("/") : ("/" + item.toLowerCase()) }>
                    <Button key={item} sx={{ color: '#fff', fontFamily: "Source Sans Pro" }}>
                        {item}
                    </Button>
                </Link>     
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Outlet/>
    </Box>
  );
}

export default Layout;