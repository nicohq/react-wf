import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const SideMenu = ({ isOpened, handleClick, onItemClick }) => (
    <Drawer open={ isOpened } docked={ false } onRequestChange={ handleClick }>
        <MenuItem children='Current' />
        <MenuItem children='5 days' />
    </Drawer>
)

SideMenu.propTypes = {
    isOpened: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired
}

export default SideMenu;
