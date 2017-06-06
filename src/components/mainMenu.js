import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default (state) => (
    <Drawer open={state}>
        <MenuItem>Current</MenuItem>
        <MenuItem>5 days</MenuItem>
        <MenuItem>10 days</MenuItem>
    </Drawer>
)
