import { fetchForecast, getGeodata } from '../api';
import store from '../store';

const FETCH_FORECAST = 'FETCH_FORECAST';
const SET_GEOLOCATION = 'SET_GEOLACATION';

export function getForecast(period, location) {
    return {
        type: FETCH_FORECAST,
        payload: fetchForecast(period, {lat:location.latitude, lon:location.longitude})
    }
}

export function getGeolocation() {
    return {
        type: SET_GEOLOCATION,
        payload: getGeodata()
    }
}
