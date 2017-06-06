import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return {...state, ...{geolocation: action.payload}}
        case 'UPDATE_FORECAST':
            return {...state, ...{forecast: action.payload}}
        default:
            return state;
    }
};

export default createStore(reducer, {
    location: {
        lat: 50.4,
        lng: 30
    },
    weather: {},
    forecast: []
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
