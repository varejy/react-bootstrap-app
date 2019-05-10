import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Profile.css';

import user from '../shared/user';

class Profile extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isSubscribe: user.isSubscribe,
            subscribers: user.subscribers
        };

        this.handleSubscribeClick = this.handleSubscribeClick.bind(this);
    }

    handleSubscribeClick () {
        if (!this.state.isSubscribe) {
            this.setState({
                isSubscribe: true,
                subscribers: user.subscribers += 1
            });
        } else if (this.state.isSubscribe) {
            this.setState({
                isSubscribe: false,
                subscribers: user.subscribers -= 1
            });
        }
    }
    render () {
        const {
            userAvatar,
            userLogin,
            publication,
            subscriptions,
            descriptionUserName,
            descriptionAboutYourself,
            descriptionLink
        } = user;
        const { subscribers, isSubscribe } = this.state;
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
