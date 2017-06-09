import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const TopBar = ({ onMenuClick }) => (
        <AppBar title = "React forecast"
            iconElementLeft = { <IconButton onTouchTap={ onMenuClick }><MenuIcon /></IconButton>} />
);

TopBar.propTypes = {
    onMenuClick: PropTypes.func.isRequired
}

export default TopBar;
