import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Button
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

interface PropsType extends RouteComponentProps<any> {
  handleDrawerClick: (clickState: boolean) => void,
  isDrawerOpen: boolean
}

const useStyles = makeStyles((theme) => ({
  appBar: {
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
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },

  root: {
    color: 'white',

  },

}));

function NavBar({ handleDrawerClick, isDrawerOpen, history }: PropsType) {
  const classes = useStyles();
  const handleDrawerOpen = (): void => {
    handleDrawerClick(true)
  };

  return (
    <AppBar position="fixed" className={clsx(classes.appBar, {
      [classes.appBarShift]: isDrawerOpen,
    })}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: isDrawerOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Button size="large" className={classes.root} onClick={() => history.push('/')}>
          Kawaii UI
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(NavBar);