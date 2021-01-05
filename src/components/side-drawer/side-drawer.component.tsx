import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";

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
type PathParamsType = {
  param1: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
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

function Drawer({ handleDrawerClick, isDrawerOpen }: PropsType) {
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
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                </List>
              </Collapse>
            </div>

          ))}
        </List>

      </MUIDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

export default withRouter(Drawer);