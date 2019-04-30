import React, { Component } from "react";
import classNames from 'classnames';

import style from './Header.css';

class Header extends Component {
    render(){
        return <main>
            <div className={style.header}>
                <div className={style.headerContent}>
                    <div className={style.logs}>
                        <a href="/" className={style.logsElements}>
                            <div className={classNames(style.logo, style.imageLog)}></div>
                            <div className={style.break}></div>
                            <div className={classNames(style.headerTitle, style.imageLog)}></div>
                        </a>
                    </div>
                    <div className={style.headerInputWrapp}>
                        <div>
                            <input className={classNames(style.headerInput, style.imageLog)} type="text" placeholder="Поиск...!" required/>
                        </div>
                    </div>
                    <div className={style.headerIcon}>
                        <div className={style.explore}>
                            <a href="/">
                                <span className={classNames(style.icon, style.exploreImg, style.imageLog)}></span>
                            </a>
                        </div>
                        <div className={style.activity}>
                            <a href="/">
                                <span className={classNames(style.icon, style.activityImg, style.imageLog)}></span>
                            </a>
                        </div>
                        <div className={style.profile}>
                            <a href="/">
                                <span className={classNames(style.icon, style.profileImg, style.imageLog)}></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    }
}

export default Header;