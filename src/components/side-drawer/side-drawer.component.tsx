import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer as MUIDrawer,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  IconButton,
  Collapse,
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const drawerWidth = 240;

// interface Props {
//   handleDrawerClick: (clickState: boolean) => void,
//   isDrawerOpen: boolean
// }

// Type whatever you expect in 'this.props.match.params.*'
// type PathParamsType = {
//   param1: string,
// }

// Your component own properties
interface PropsType extends RouteComponentProps<any> {
  handleDrawerClick: (clickState: boolean) => void,
  isDrawerOpen: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing(4),
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
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Drawer({ handleDrawerClick, isDrawerOpen, history }: PropsType) {

  console.log(history);

  // const menuItems = [
  //   {
  //     text: "Components",
  //     icon: 
  //   }
  // ];

  const classes = useStyles();
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  const [sideMenuItemOpen, setSideMenuItemOpen] = React.useState(true);

  const handleClick = () => {
    setSideMenuItemOpen(!sideMenuItemOpen);
  };

  const handleDrawerClose = () => {
    handleDrawerClick(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <MUIDrawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isDrawerOpen,
          [classes.drawerClose]: !isDrawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Components'].map((text, index) => (
            <div key={index}>

              <ListItem button onClick={handleClick}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                {sideMenuItemOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={sideMenuItemOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested} onClick={() => history.push('/toggle')} >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Toggle" />
                  </ListItem>
                </List>
              </Collapse>
            </div>

          ))}
        </List>

      </MUIDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

      </main>
    </div>
  );
}

export default withRouter(Drawer);