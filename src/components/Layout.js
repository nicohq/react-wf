import React from 'react';
import { bindActionCreators } from 'redux';
import { getGeolocation, getForecast } from '../actions';
import SideMenu from './SideMenu';
import TopBar from './TopBar';
import WeatherList from './WeatherList';
import { connect } from 'react-redux';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false,
            period: 1,
            location: null
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened
        })
    }

    componentWillMount() {
        this.props.getGeolocation();
    }

    componentWillReceiveProps(nextProps) {
        const previuos = this.state.location;
        const current = nextProps.location;
        if (!Object.is(previuos, current)) {
            this.props.getForecast();
            this.setState({
                location: current
            })
        }
    }

    render () {
        return (
            <section>
                <SideMenu isOpened={ this.state.isMenuOpened } handleClick={ this.handleMenuClick }/>
                <TopBar onMenuClick={ this.handleMenuClick } />
                <WeatherList data={ this.props.forecast }/>
            </section>
        )
    }
}

export default connect(
    (state) => ({ forecast: state.forecast, location: state.geolocation }),
    (dispatch) => bindActionCreators({ getGeolocation, getForecast }, dispatch)
)(Layout)
