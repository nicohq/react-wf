export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FORECAST_FULFILLED':
            return action.payload.list;
        default:
            return state;
    }
}
