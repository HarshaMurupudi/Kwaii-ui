import React from 'react';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

interface PropsType {
  isDrawerOpen: boolean,
  children: any
}

const drawerWidth = 240;


const Layout = ({ children, isDrawerOpen }: PropsType) => {

  const classes = useStyles();

  return (
    <>
      <main>{children}</main>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    shiftTextLeft: {
      // understand close width
      marginLeft: drawerWidth
    },
    shiftTextLeftMini: {
      // open width + mini width
      marginLeft: 240 + 73
    },
  }),
);

export default Layout;