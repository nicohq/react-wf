import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store/createStore';
import AppBar from './components/appBar';
import './styles/main.scss';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <AppBar />
    </MuiThemeProvider>
)

store.subscribe(() => {
    console.log(store.getState());
});

console.log(store.getState());

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

