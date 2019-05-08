import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Profile.css';

class Profile extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: {
                subscribers: 123,
                publication: 23,
                subscriptions: 31
            },
            isSubscribed: false
        };

        this.handleSubscribeClick = this.handleSubscribeClick.bind(this);
    }

    handleSubscribeClick () {
        if (!this.state.isSubscribed) {
            this.setState({
                user: {
                    subscribers: this.state.user.subscribers += 1,
                    publication: this.state.user.publication,
                    subscriptions: this.state.user.subscriptions
                },
                isSubscribed: !this.state.isSubscribed
            });
        } else if (this.state.isSubscribed) {
            this.setState({
                user: {
                    subscribers: this.state.user.subscribers - 1,
                    publication: this.state.user.publication,
                    subscriptions: this.state.user.subscriptions
                },
                isSubscribed: !this.state.isSubscribed
            });
        }
    }
    render () {
        const { subscribers, publication, subscriptions } = this.state.user;
        const { isSubscribed } = this.state;
        return <div className={style.Profile}>
            <div className={style.ProfileWrapp}>
                <div className={style.avatar}>
                    <div className={style.img}></div>
                </div>
                <div className={style.info}>
                    <div className={style.header}>
                        <h1 className={style.nickname}>leonardodicaprio</h1>
                        <span className={classNames(style.confirmationLogo, style.imageLog)}></span>
                        <div className={style.buttons}>
                            <button
                                className={classNames(style.NotSubscribe, { [style.subscribe]: isSubscribed })}
                                onClick={this.handleSubscribeClick}
                            >
                                { isSubscribed === true ? 'Подписки' : 'Подписаться'}
                            </button>

                            <button
                                className={classNames(style.showRecommended, { [style.subscribeBtnRecom]: isSubscribed })}>
                                <span
                                    className={classNames(style.buttonIcon, style.imageLog, { [style.subscribeBtnRecomIcon]: isSubscribed })}>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={style.subscriptionsInfo}>
                        <ul className={style.subsInfo}>
                            <li className={style.ProfileInfoItem}><span className={style.subscriptInfo}>{ publication }</span> публикаций</li>
                            <li className={style.ProfileInfoItem}><span className={style.subscriptInfo}>{ subscribers }</span> подписчиков</li>
                            <li className={style.ProfileInfoItem}>Подписки: <span className={style.subscriptInfo}>{ subscriptions }</span></li>
                        </ul>
                    </div>
                    <div className={style.description}>
                        <h1 className={style.descriptionChild}>Leonardo DiCaprio</h1>
                        <span className={style.descriptionChild}>Actor and Environmentalist</span>
                        <a className={style.descriptionChild} href="https://www.globaldealfornature.org/">globaldealfornature.org</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Profile;
