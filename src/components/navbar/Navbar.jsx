// REACT STUFF
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

// MATERIAL-UI STUFF
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// IMPORTING IMAGES 
import logo from '../../assets/images/navbar/logo.png'

// MATERIAL-UI ICONS
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

// STYLES FILES
import classes from './navbar.module.scss'

const Navbar = () => {

  // MATERIAL MOBILE LIST HANDLERS
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.navbar}>
      <AppBar position="static" className={classes.nav}>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography className={classes.logoSide} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="" className={classes.logo} />
              VLPRO
            </Typography>
            <div className={classes.deviceList}>
              <List className={classes.insideList}>
                <NavLink to='/'>
                  PROJECTS
                </NavLink>
                <NavLink to='/staking'>
                  STAKING
                </NavLink>
                <ListItem>
                  <a href="https://www.coinbase.com/learn/crypto-basics/what-is-staking" target="_blank" >BRIDGE</a>
                  
                </ListItem>
              </List>
              <Button color="inherit">
                <span className={classes.insideButton}></span>
                <span className={classes.text}>
                  CONNECT WALLET
                </span>
              </Button>
            </div>
            <div className={classes.mobileList}>
              <WidgetsOutlinedIcon
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
              </WidgetsOutlinedIcon>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                className="menu"
                PaperProps={{
                  style: {
                    backgroundColor: '#001831',
                    color: '#fff',
                    padding: '10px 30px',
                    margin: '10px 50px 0 0',
                  }
                }}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink to='/'>
                    Projects
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to='/staking'>
                    Staking
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="https://www.coinbase.com/learn/crypto-basics/what-is-staking" target='_blank' >Bridge</a>
                </MenuItem>
                <MenuItem>
                  <button className={classes.insideBtn}><span className='insideButton'></span> <span className='text'>CONNECT WALLET</span></button>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Navbar;