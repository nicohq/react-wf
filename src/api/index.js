//http://api.openweathermap.org/data/2.5/forecast/daily?q=London&appid=f892969403e42aece011a1c1c8853423&units=metric&cnt=3

const URL_PARAMS = {
    appid: 'f892969403e42aece011a1c1c8853423',
    units: 'metric',
    q: 'London',
    cnt: 1
}
const API_ROOT = 'http://api.openweathermap.org/data/2.5/forecast/daily?';

function getUrlParams(params) {
    const extended = {... URL_PARAMS, ...params};
    return Object.keys(extended)
        .map(key => (encodeURIComponent(key) + '=' + encodeURIComponent(extended[key])))
        .join('&')
}

export function fetchForecast(period = 1) {
    return fetch(API_ROOT + getUrlParams({cnt: period}));
}

export function getGeodata() {
    return new Promise((resolve, reject) => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position.coords);
            }, () => {
                reject(new Error('Unable to retrieve your location'));
            })
        } else {
            reject(new Error('Not Supported'));
        }
    })
}
