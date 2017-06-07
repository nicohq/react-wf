const GET_FORECAST = 'GET_FORECAST';
const SET_MENU_STATE = 'SET_MENU_STATE';
const SET_GEOLOCATION = 'SET_GEOLACATION';

export function getForecast(period) {
    return {
        type: GET_FORECAST,
        period
    }
}

export function setMenuState(state) {
    return {
        type: SET_MENU_STATE,
        state
    }
}

export function setGeolocation(location) {
    return {
        type: SET_GEOLOCATION,
        location
    }
}
