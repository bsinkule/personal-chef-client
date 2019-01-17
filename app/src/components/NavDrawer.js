import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleTwoTone from '@material-ui/icons/AccountCircleTwoTone';
import Info from '@material-ui/icons/Info';
import Home from '@material-ui/icons/Home';
import CameraAlt from '@material-ui/icons/CameraAlt';

import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-left: 10px;

  @media (min-width: 600px) {
    display: none;
  }

  .IconButton {
    padding: 5px;
  }
`;

const DrawerWrapper = styled.div`
  width: 200px;
`;

const ListWrapper = styled.div`
  display: flex;
`;

const NavDrawer = (props) => {
  
  const [nav, setNav] = useState({
    left: false,
  });

  const toggleDrawer = (side, open) => () => {
    setNav({ ...nav, [side]: open });
  };

  const sideList = (
    <DrawerWrapper > 
      <List>
          <ListItem button>
            <Link style={{ display: 'flex', textDecoration: 'none', color: 'black' }} to="/Home">
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="home" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link style={{ display: 'flex', textDecoration: 'none', color: 'black' }} to="/Pics">
              <ListItemIcon><CameraAlt /></ListItemIcon>
              <ListItemText primary="pics" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link style={{ display: 'flex', textDecoration: 'none', color: 'black' }} to="/About">
              <ListItemIcon><Info /></ListItemIcon>
              <ListItemText primary="about" />
            </Link>
          </ListItem>
          <ListItem button>
            {props.checkAuth ? 
              <ListWrapper onClick={props.auth.logout}>
                <ListItemIcon><AccountCircleTwoTone /></ListItemIcon>
                <ListItemText primary="logout" /> 
              </ListWrapper> 
              :
              <ListWrapper onClick={props.auth.login}> 
                <ListItemIcon><AccountCircleTwoTone /></ListItemIcon>
                <ListItemText primary="login" /> 
              </ListWrapper>
              }
          </ListItem> 
        <Divider />  
      </List>
    </DrawerWrapper>
  );
  console.log("drawer auth redux: ", props.checkAuth)
  return (
    <MainWrapper>
      <IconButton className="IconButton" onClick={toggleDrawer('left', true)}><Menu /></IconButton>
      <SwipeableDrawer
        open={nav.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </MainWrapper>
  );
}

const mapStateToProps = (state) => ({
  checkAuth: state.checkAuth.authenticated,
});

export default connect(mapStateToProps, null)(NavDrawer);
