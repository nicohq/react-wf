import { fetchForecast, getGeodata } from '../api';

const FETCH_FORECAST = 'FETCH_FORECAST';
const SET_GEOLOCATION = 'SET_GEOLACATION';

export function getForecast(period) {
    return {
        type: FETCH_FORECAST,
        payload: fetchForecast(period)
    }
}

export function getGeolocation() {
    return {
        type: SET_GEOLOCATION,
        payload: getGeodata()
    }
}
