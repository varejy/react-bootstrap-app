import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../MainPage/MainPage.jsx';
import Description from '../../components/Description/Description.jsx';
import Points from '../../components/Points/Points.jsx';
import Test from '../../components/Test/Test.jsx';

class Routs extends Component {
    render () {
        return <main>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/description' component={Description} />
                    <Route path='/test' component={Test} />
                    <Route path='/points' component={Points} />
                </Switch>
        </main>;
    }
}

export default Routs;