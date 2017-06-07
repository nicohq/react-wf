import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store/createStore';
import TopBar from './components/TopBar';
import MainMenu from './components/SideMenu';
import './styles/main.scss';

injectTapEventPlugin();

const UI = () => (
    <section>
        <MainMenu />
        <TopBar />
    </section>
)

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <UI />
        </MuiThemeProvider>
    </Provider>
)

console.log(store.getState());

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
