import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Profile.css';

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            subscribers: 123,
            subscribersClick: false,
            subscriberValue: 'Подписаться'
        }

        this.SubscribeClick = this.SubscribeClick.bind(this);
    }

    SubscribeClick(){
        if(!this.state.subscribersClick){
            this.setState({
                subscribers: this.state.subscribers += 1,
                subscribersClick: !this.state.subscribersClick,
                subscriberValue: 'Подписки'
            })
        }else if(this.state.subscribersClick){
            this.setState({
                subscribers: this.state.subscribers - 1,
                subscribersClick: !this.state.subscribersClick,
                subscriberValue: 'Подписаться'
            })
        }
        
    }
    render () {
        return <main className={style.Profile}>
            <div className={style.ProfileWrapp}>
                <div className={style.avatar}>
                    <div className={style.img}></div>                 
                </div>
                <div className={style.info}>
                    <div className={style.header}>
                        <h1 className={style.nickname}>leonardodicaprio</h1>
                        <span className={classNames(style.confirmationLogo, style.imageLog)}></span>
                        <div className={style.buttons}>
                            <button className={classNames(style.NotSubscribe, { [style.subscribe]: this.state.subscribersClick })} onClick={this.SubscribeClick}>{ this.state.subscriberValue }</button>

                            <button className={classNames(style.showRecommended, { [style.subscribeBtnRecom]: this.state.subscribersClick })}><span className={classNames(style.buttonIcon, style.imageLog, { [style.subscribeBtnRecomIcon]: this.state.subscribersClick })}></span></button>
                        </div>
                    </div>
                    <div className={style.subscriptionsInfo}>
                        <ul>
                            <li><span>23</span> публикаций</li>
                            <li><span>{this.state.subscribers}</span> подписчиков</li>
                            <li>Подписки: <span>31</span></li>
                        </ul>
                    </div>
                    <div className={style.description}>
                        <h1 className={style.descriptionChild}>Leonardo DiCaprio</h1>
                        <span className={style.descriptionChild}>Actor and Environmentalist</span>
                        <a className={style.descriptionChild} href="https://www.globaldealfornature.org/">globaldealfornature.org</a>
                    </div>
                </div>
            </div>
        </main>;
    }
}

export default Profile;