import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Profile.css';

class Profile extends Component {
    state = {
        userLogin: '',
        userAvatar: '',
        subscribers: 0,
        publication: 0,
        subscriptions: 0,
        isSubscribe: false,
        descriptionUserName: '',
        descriptionAboutYourself: '',
        descriptionLink: {}
    };

    handleSubscribeClick = () => {
        if (!this.state.isSubscribe) {
            this.setState((state, props) => {
                return ({
                    isSubscribe: true,
                    subscribers: props.user.subscribers + 1
                });
            });
        } else if (this.state.isSubscribe) {
            this.setState((state, props) => {
                return {
                    isSubscribe: false,
                    subscribers: props.user.subscribers - 0
                };
            });
        }
    }
    componentDidMount = () => {
        this.setState((state, props) => {
            return {
                userLogin: props.user.userLogin,
                userAvatar: props.user.userAvatar,
                subscribers: props.user.subscribers,
                publication: props.user.publication,
                subscriptions: props.user.subscriptions,
                isSubscribe: props.user.isSubscribe,
                descriptionUserName: props.user.descriptionUserName,
                descriptionAboutYourself: props.user.descriptionAboutYourself,
                descriptionLink: props.user.descriptionLink
            };
        });
    };
    render () {
        const {
            userLogin,
            userAvatar,
            subscribers,
            publication,
            subscriptions,
            isSubscribe,
            descriptionUserName,
            descriptionAboutYourself,
            descriptionLink
        } = this.state;
        return <div className={style.Profile}>
            <div className={style.ProfileWrapp}>
                <div className={style.avatar}>
                    <img className={style.img} src={ userAvatar }></img>
                </div>
                <div className={style.info}>
                    <div className={style.header}>
                        <h1 className={style.nickname}>{ userLogin }</h1>
                        <span className={classNames(style.confirmationLogo, style.imageLog)}></span>
                        <div className={style.buttons}>
                            <button
                                className={classNames(style.NotSubscribe, { [style.subscribe]: isSubscribe })}
                                onClick={this.handleSubscribeClick}
                            >
                                { isSubscribe === true ? 'Подписки' : 'Подписаться' }
                            </button>

                            <button
                                className={classNames(style.showRecommended, { [style.subscribeBtnRecom]: isSubscribe })}>
                                <span
                                    className={classNames(style.buttonIcon, style.imageLog, { [style.subscribeBtnRecomIcon]: isSubscribe })}>
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
                        <h1 className={style.descriptionChild}>{ descriptionUserName }</h1>
                        <span className={style.descriptionChild}>{ descriptionAboutYourself }</span>
                        <a className={style.descriptionChild} href={ descriptionLink.descriptionLinkUrl }>{ descriptionLink.descriptionLinkTxt }</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Profile;
