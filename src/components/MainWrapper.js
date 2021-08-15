import React from 'react';
import Burger from '../img/icons/burger_icon.svg';
import '../css/MainWrapper.scss';
import Sidebar from './Sidebar.js';
import Sportsmen from './sportsmen/Sportsmen.js'

class MainWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sidebarActive: false,
        };
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar = () => {
        this.setState({sidebarActive: !this.state.sidebarActive})
    };

    render() {
        
        return (
        <div>
            <Sidebar toggleSidebar={this.toggleSidebar} active={this.state.sidebarActive}/>
            <div className="content">
                <div className="sidebar-close" onClick={this.toggleSidebar}>
                    <img src={Burger} alt="Burger" />
                </div>
                <Sportsmen sportsmen={this.props.appState.sportsmen} dispatch={this.props.dispatch}/>
            </div>
        </div>
        );
    }
}

export default MainWrapper;