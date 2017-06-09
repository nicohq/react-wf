import React from 'react';
import PropTypes from 'prop-types';
import { GridTile } from 'material-ui/GridList';

const style = {
    margin: '20px',
    height: '30vh',
    textTransform: 'capitalize',
    backgroundColor: 'cyan'
}

function parseTime(UTCTime) {
    const date = new Date(UTCTime * 1000);
    return date.toDateString();
}

const WeatherItem = ({ item }) => (
    <GridTile
        title={ item.weather[0].description + ' at ' + parseTime(item.dt)}
        style= { style }
        className={ 'background-' + item.weather[0].icon }
        subtitle={ <span><b>{ item.temp.day }℃</b></span> }
        >
    </GridTile>
);

WeatherItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default WeatherItem;
