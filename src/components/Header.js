import * as React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Link,
  Container,
  Hidden,
  IconButton,
  Paper,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Tabs,
  Tab,
  Button


} from "@mui/material";


import { Link as L } from "react-scroll"
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink } from 'react-router-dom';

const navLink = [

  { name: "Snippets", herf: "/pages" },
  { name: "About-Us", herf: "/aboutus" },
]

const MyComponent = styled(Link)({
  marginRight: 20
});
const MyAvatar = styled(Avatar)({

  marginRight: 10,
  color: "black",
  backgroundColor: "#e8e113"

});
const MyTypography = styled(Typography)({

  marginRight: 'auto',

})


const navLinkStyles = () => {
  return {
    fontWeight: 'none',
    textDecoration: 'none',
    color: 'black'
  }
}

//{ backgroundColor: '#e8e113' }

function Header() {

  const [open, setOpen] = React.useState(false)





  return (



    <AppBar
      position='sticky'
      color='default'
      sx={{
        boxShadow: 'none',

      }}>
      <Container maxWidth="md" sx={{ my: "8px" }} >
        <Toolbar color="secondary" disableGutters>

          <MyAvatar className='avatar'><NavLink to='/' style={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'black'
          }}>Ss</NavLink></MyAvatar>
          <MyTypography > SnippScript </MyTypography>


          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLink.map((item) => (
              <MyComponent
                color='textPrimary'
                variant='button'
                underline='none'
                href={item.herf}
              >

                <NavLink to={item.herf} style={navLinkStyles}>{item.name}</NavLink>
              </MyComponent>
            ))}

            <Button
              variant="contained"

              color="primary"
              style={{ backgroundColor: '#FFD700' }}
            >
              <L
                to='subscribe'
                smooth={true}
                duration={1000}
                offset={-200}>
                Subscribe
              </L>
            </Button>

          </Box>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>

            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Box>

        </Toolbar>
      </Container>


      <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <div>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLink.map((item) => (
            <ListItem>
              <MyComponent
                color='textPrimary'
                variant='button'
                underline='none'
                href={item.herf}
              >

                {item.name}
              </MyComponent>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}

export default Header
