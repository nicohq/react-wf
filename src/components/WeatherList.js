import React from 'react';
import PropTypes from 'prop-types';
import { GridList } from 'material-ui/GridList';
import WeatherItem from './WeatherItem';

const style = {
    padding: '20px 0'
}

const WeatherList = ({ data }) => (
    <GridList
        style={ style }
        cellHeight='auto'>
            { data.map((weather, idx) => (
                <WeatherItem key={ idx }item={ weather }/>
            )) }
    </GridList>
);

WeatherList.propTypes = {
    data: PropTypes.array.isRequired
}

export default WeatherList;
