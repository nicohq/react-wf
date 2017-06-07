import { setGeolocation } from '../../actions';

const initalState = {
    lat: 50.4,
    lng: 30
}

export default (state = initalState, action) => {
    switch (action.type) {
        case 'SET_GEOLACATION':
            return state = action.payload
        default:
            return state;
    }
}
