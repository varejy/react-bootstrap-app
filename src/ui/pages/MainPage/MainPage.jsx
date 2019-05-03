import React, { Component } from 'react';

import Header from '../../components/Header/Header.jsx';
import Content from '../../components/Content/Content.jsx';

import styles from './MainPage.css';

class MainPage extends Component {
    render (props) {
        return (
            <div className={styles.MainPage}>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default MainPage;
