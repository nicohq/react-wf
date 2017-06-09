const initalState = { //Default location = Kiev
    latitude: 50.4,
    longitude: 30.5
}

export default (state = initalState, action) => {
    switch (action.type) {
        case 'SET_GEOLACATION_FULFILLED':
            return action.payload;
        default:
            return state;
    }
}
