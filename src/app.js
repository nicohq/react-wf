import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import { getGeolocation, getForecast } from './actions';

import Layout from './components/Layout';
import './styles/main.scss';

injectTapEventPlugin();

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Layout />
        </MuiThemeProvider>
    </Provider>
)

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/serviceworker.js');
// }

// store.dispatch(getGeolocation())
// store.dispatch(getForecast(4))

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
