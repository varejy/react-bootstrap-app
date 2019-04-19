import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Description.css';

class Description extends Component {
    render () {
        return <section>
            <h1 className={styles.title}>react-bootstrap-app</h1>
            <div className={styles.description}>Сделай форк и начинай кодить</div>
            <hr/>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </section>;
    }
}

export default Description;
