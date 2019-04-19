import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainPage from '../MainPage/MainPage.jsx';
import Description from '../../components/Description/Description.jsx';
import Points from '../../components/Points/Points.jsx';
import Test from '../../components/Test/Test.jsx';

class Routs extends Component {
    render () {
        return <main>
            <ul>
                <li><Route exact path='/' component={MainPage} /></li>
                <li><Route path='/description' component={Description} /></li>
                <li><Route path='/test' component={Test} /></li>
                <li><Route path='/points' component={Points}/></li>
            </ul>
        </main>;
    }
}

export default Routs;