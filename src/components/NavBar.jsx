import React, { useEffect, useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, MenuItem, Menu, Button } from '@material-ui/core';
import { Store as StoreIcon, Search as SearchIcon, More as MoreIcon} from "@material-ui/icons";
import MenuSimple from './MenuSimple';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    color: 'inherit', textDecoration: 'none'
  }
}));

const NavBar = (props) => {

  const [items, setItems] = useState([]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const getMenuItems = async () => {
    const itemsSnapshot = await getDocs(collection(db, 'categories'));
    const itemsObj = itemsSnapshot.docs.map(item => {
      return {idRef: item.id, ...item.data()};
    })

    const asyncItem = {
      id: 1,
      name: 'Categorias',
      tipo: 'dropdown',
      elementos: itemsObj
    }

    const initialItems = [
      {id: 2, name: 'Productos', route: 'items'},
      {id: 3, name: 'Ayuda'}
    ];

    setItems([asyncItem, ...initialItems])

    console.log(items);

  }

  useEffect(() => {
    getMenuItems();
  }, [])

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (items = []) => (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        <MenuItems/>
        <MenuItem>
          <CartWidget />
          Carrito
        </MenuItem>
    </Menu>
  );

const MenuItems = () => {
    let mobile = false;
    let menuItems = items.map((item, index) => {
        let menuItem;
        switch (item.tipo) {
            case 'dropdown':
                menuItem = <MenuSimple key={index} item={item}></MenuSimple>
            break;
            default:
                menuItem = <MenuItem key={index}><Link className={classes.link} to={`/${item.route}`}><Button style={{color: mobile ? "inherit" : "white"}}>{item.name}</Button></Link></MenuItem>
        }
        return menuItem;
    })
    return menuItems;
}
    
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <StoreIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to='/' className={classes.link}>ElComercio</Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItems items={props} />
            <CartWidget color="white" />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu(props)}
      {renderMenu}
    </div>
  );
}

export default NavBar;