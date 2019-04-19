import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import media from './ui/hocs/media/media.jsx';

import '../client/vendor';
import './css/main.css';

import Routs from './ui/pages/Routers/Routs.jsx';

@media
class App extends Component {
    render () {
        return <main>
            <Routs/>
        </main>;
    }
}

export default App;
