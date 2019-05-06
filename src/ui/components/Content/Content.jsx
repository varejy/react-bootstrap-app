import React, { Component } from 'react';

import Profile from './Profile/Profile.jsx';

import style from './Content.css';

class Content extends Component {
    render () {
        return <div className={style.Content}>
            <div className={style.ContentWrapp}>
                <Profile />
            </div>
        </div>;
    }
}

export default Content;
