import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Profile.css';

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            subscribers: 123
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
                            <button className={style.subscribe}>Подписаться</button>

                            <button className={style.showRecommended}><span className={classNames(style.buttonIcon, style.imageLog)}></span></button>
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
                        <h1>Leonardo DiCaprio</h1>
                        <span>Actor and Environmentalist</span>
                        <a href="https://l.instagram.com/?u=http%3A%2F%2Fglobaldealfornature.org%2F&e=ATNEsVorl35ZgIdQGRxB5kd7rB6WNyemG54jvCA8j9L2HgNPAv1Y0an5enQJF8JZGYGwbt_Aek7YzR21">globaldealfornature.org</a>
                    </div>
                </div>
            </div>
        </main>;
    }
}

export default Profile;