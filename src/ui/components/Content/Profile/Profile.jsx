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

        this.SubscribeClick = this.SubscribeClick.bind(this);
    }

    SubscribeClick () {
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
                                onClick={this.SubscribeClick}
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
                        <ul>
                            <li><span>{ publication }</span> публикаций</li>
                            <li><span>{ subscribers }</span> подписчиков</li>
                            <li>Подписки: <span>{ subscriptions }</span></li>
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
