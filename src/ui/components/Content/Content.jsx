import React, { Component } from 'react';

import Profile from '../Profile/Profile.jsx';
import Ad from '../Ad/Ad.jsx';

import style from './Content.css';

class Content extends Component {
    render () {
        return <div className={style.Content}>
            <div className={style.ContentWrapp}>
                <Profile />
                <Ad />
            </div>
        </div>;
    }
}

export default Content;
