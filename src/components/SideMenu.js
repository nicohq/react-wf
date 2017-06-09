import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const items = [
    {id: 1, title: 'Current', period: 1},
    {id: 2, title: 'Weekly', period: 7},
    {id: 3, title: '2 Weeks', period: 14}
]

const SideMenu = ({ isOpened, handleClick, onItemClick }) => (
    <Drawer open={ isOpened } docked={ false } onRequestChange={ handleClick }>
        { items.map(item =>
            <MenuItem key={ item.id } children={ item.title } onTouchTap={ onItemClick }/>
        )}
    </Drawer>
)

SideMenu.propTypes = {
    isOpened: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired
}

export default SideMenu;
