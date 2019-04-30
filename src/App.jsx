import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import media from './ui/hocs/media/media.jsx';

import '../client/vendor';
import './css/main.css';

import MainPage from "./ui/pages/MainPage/MainPage.jsx"

@media
class App extends Component {
    render () {
        return <main>
            <MainPage/>
        </main>;
    }
}

export default withRouter(App);
