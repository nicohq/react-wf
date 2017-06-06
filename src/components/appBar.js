import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MainMenu from './mainMenu';

export default () => (
    <div>
        <MainMenu open="true"/>
        <AppBar title = "React forecast"
            iconElementLeft = { <IconButton>
                <MenuIcon />
                </IconButton>} />
    </div>
);
