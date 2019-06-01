import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './descriptionMobile.css';

class DescriptionMobile extends Component {
    static propTypes = {
        user: PropTypes.object
    };

    static defaultProps = {
        user: {}
    };
    render () {
        const { user } = this.props;
        return (
            <div className={styles.subscriptionsInfo}>
                <ul className={styles.subsInfo}>
                    <li className={styles.ProfileInfoItem}><span className={styles.subscriptInfo}>{user.publication}</span> публикаций</li>
                    <li className={styles.ProfileInfoItem}><span className={styles.subscriptInfo}>{user.subscribers}</span> подписчиков</li>
                    <li className={styles.ProfileInfoItem}>Подписки: <span className={styles.subscriptInfo}>{user.subscriptions}</span></li>
                </ul>
            </div>
        );
    }
}

export default DescriptionMobile;
