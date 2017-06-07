import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const TopBar = ({ onChange }) => (
        <AppBar title = "React forecast"
            iconElementLeft = { <IconButton><MenuIcon /></IconButton>} />
);

TopBar.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default TopBar;
