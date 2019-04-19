import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class MainPage extends Component {
    render () {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/description">Description</Link></li>
                <li><Link to="/points">Points</Link></li>
                <li><Link to="/test">Test</Link></li>
            </ul>
        );
    }
}

export default MainPage;
