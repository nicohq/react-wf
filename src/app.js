import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from './components/appBar';
import './styles/main.scss';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <AppBar />
    </MuiThemeProvider>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

