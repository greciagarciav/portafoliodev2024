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
        textAlign: 'center', display:" flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >      
      <LogoContainer sx={{marginTop: "15px"}}>
          <Logo src='https://media.licdn.com/dms/image/D5603AQEjqzSkpXzWYQ/profile-displayphoto-shrink_800_800/0/1712675994978?e=1718841600&v=beta&t=sdmMdvAoEx6-YcLaQj-wpLg-5bvDdZiqWjegCwAg_fk'/>
      </LogoContainer>                        
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Source Sans Pro" }}>
        GRECIA GARCIA
      </Typography>
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <LogoContainer  sx={{ marginRight: "1.5rem" , display: { xs: 'none', md: 'block' } }}>
              <Logo src='https://media.licdn.com/dms/image/D5603AQEjqzSkpXzWYQ/profile-displayphoto-shrink_800_800/0/1712675994978?e=1718841600&v=beta&t=sdmMdvAoEx6-YcLaQj-wpLg-5bvDdZiqWjegCwAg_fk'/>
          </LogoContainer> 
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
          >
            GRECIA GARCIA
          </Typography>
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