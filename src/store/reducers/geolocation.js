import { setGeolocation } from '../../actions';

const initalState = { //Default location = Kiev
    lat: 50.4,
    lng: 30.5
}

export default (state = initalState, action) => {
    switch (action.type) {
        case 'SET_GEOLACATION':
            return state = action.payload
        default:
            return state;
    }
}
