import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const SideMenu = ({isOpened}) => (
    <Router>
    <Drawer open={true} docked={false}>
        <MenuItem linkButton children={<Link to="/">Current</Link>} />
        <MenuItem linkButton children={<Link to="/forecast/5">5 days</Link>} />
        <MenuItem linkButton children={<Link to="/forecast/10">10 days</Link>} />
    </Drawer>
    </Router>
)

SideMenu.propTypes = {
    isOpened: PropTypes.bool
}

export default SideMenu;
