import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MailIcon from '@material-ui/icons/Mail';

//ASSETS
import analitic from "../../assets/icons/analitic.svg";
import clients from "../../assets/icons/clients.svg";
import desing from "../../assets/icons/desing.svg";
import marketing from "../../assets/icons/marketing.svg";
import program from "../../assets/icons/program.svg";
import view from "../../assets/icons/view.svg";
import avatar from "../../assets/icons/avatar.png";
import setting from "../../assets/icons/setting.svg";

//STYLES
import './index.scss'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  appBar: {
    backgroundColor: 'white',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  navbarContent:{
    width: '100%',
      display: 'flex',
      flexDirection: 'colunm',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginRight: theme.spacing(2)
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'colunm',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
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
  },
  profileContent:{
    display: 'flex',
  },
  inputRoot: {
    color: '#8395A7',
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
  logo:{
    display: 'block',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
        
      },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
        <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
                [classes.hide]: open,
            })}
            >
                <MenuIcon  style={{color: '#8395A7'}}/>
            </IconButton>
            <div className={classes.navbarContent}>
                <div className={classes.searchContainer}>
                    <Typography  className={classes.logo} variant="h4" noWrap style={{color: '#222F3E', fontWeight: '800', marginLeft: '3.5rem'}}> Prendo </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon style={{color: '#8395A7'}}/>
                        </div>
                        <InputBase
                            placeholder="Buscar…"
                            classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </div>
                
                <div className={classes.profileContent}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={3} color="secondary">
                            <MailIcon style={{color: '#8395A7'}}/>
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={3} color="secondary">
                            <NotificationsIcon style={{color: '#8395A7'}}/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                    <Avatar src={avatar} />
                    </IconButton>
                </div>
            </div>
        </Toolbar>
        
        </AppBar>
        
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
        }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>

            <br/><br/>
            
            <List>   
                <ListItem button selected style={{backgroundColor: '#6c5dd3', color: 'white'}}>
                    <ListItemIcon>
                        <img src={view} alt="icons"/>
                    </ListItemIcon>
                    <ListItemText>Vista general</ListItemText>
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                            <img src={program} alt="icons"/>
                    </ListItemIcon>
                    <ListItemText>Programas y Cursos</ListItemText>
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                            <img src={desing} alt="icons"/>
                    </ListItemIcon>
                    <ListItemText>Diseña tu sitio</ListItemText>
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                            <img src={clients} alt="icons"/>
                    </ListItemIcon>
                    <ListItemText>Estudiantes / Clientes</ListItemText>
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                            <img src={marketing} alt="icons"/>
                    </ListItemIcon>
                    <ListItemText>Marketing y ventas</ListItemText>
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                            <img src={analitic} alt="icons"/>
                    </ListItemIcon>
                    <ListItemText>Analítica y reporte</ListItemText>
                </ListItem>
                <br/><br/><br/><br/>
                <Divider/>
                
                <ListItem button>
                    <ListItemIcon>
                            <img src={setting} alt="icons"/>
                    </ListItemIcon>
                    <ListItemText>Configuración</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    </div>
  );
}