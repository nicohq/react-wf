import { getForecast } from '../../actions';

export default (state = [], action) => {
    switch (action.type) {
        case 'GET_FORECAST':
            return [...state, ...action.payload]
        default:
            return state;
    }
}
