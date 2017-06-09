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
            period: 1
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleItemMenuClick = this.handleItemMenuClick.bind(this);
        this.fetchWeatherData = this.fetchWeatherData.bind(this);
    }

    fetchWeatherData() {
        return this.props.getForecast(this.state.period, this.props.location)
    }

    handleMenuClick() {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened
        })
    }

    handleItemMenuClick() {
        //  TODO: Update forecast
        // Make this work
    }

    componentWillMount() {
        this.props.getGeolocation()
            .then(this.fetchWeatherData)
    }

    componentWillReceiveProps(nextProps) {
        const previuos = this.props.location;
        const current = nextProps.location;
        if (previuos && !Object.is(previuos, current)) {
            this.fetchWeatherData()
        }
    }

    render () {
        return (
            <section>
                <SideMenu isOpened={ this.state.isMenuOpened } handleClick={ this.handleMenuClick } onItemClick={ this.handleItemMenuClick } />
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
