import geolocation from './geolocation';
import forecast from './forecast';

const menuOpened = (state = false, action) => {
    switch (action.type) {
        case 'SET_MENU_STATE':
            return action.payload
        default:
            return state;
    }
}

export { geolocation, forecast, menuOpened }
