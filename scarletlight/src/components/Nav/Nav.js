import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from "./images/logo.jpg"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import ResponsiveImgMaterialUi from 'responsive-img-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 180,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  logo: {
      backgroundImage: `url(${logo})`,
      backgroundRepeat: 'no-repeat',
    //   backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundColor: 'white',
    //   backgroundPosition: "center center",
    // backgroundSize: "cover",


  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar  className={classes.logo}>
          {/* <ResponsiveImgMaterialUi xs="/img/logo-small.jpg" md="/img/logo-medium.jpg" lg="/img/logo-large.jpg" /> */}
        <Toolbar className={classes.toolbar} >
            
          <IconButton
            edge="start"
            className={classes.menuButton}
            // color="inherit"
            aria-label="open drawer"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            
          </Typography>

          <IconButton 
            aria-label="display more actions" 
            edge="end" 
            // color="inherit"
            >
            <MoreIcon />
          </IconButton>

          <div>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                <MenuItem onClick={handleClose}>Investment</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
