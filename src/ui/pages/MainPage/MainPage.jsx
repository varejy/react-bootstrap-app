import React, { Component } from 'react';

import Description from '../../components/Description/Description.jsx';
import Points from '../../components/Points/Points.jsx';

class MainPage extends Component {
    render () {
        return <section>
            <Description />
            <Points />
        </section>;
    }
}

export default MainPage;
