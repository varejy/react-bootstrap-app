import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Header.css';

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            InputState: true,
            headerScrolls: false
        };

        this.InputHandleClick = this.InputHandleClick.bind(this);
    }

    InputHandleClick (elem) {
        elem.preventDefault();
        if (this.state.InputState) {
            this.setState({ InputState: !this.state.InputState });
        }
    }

    componentDidMount () {
        document.addEventListener('scroll', (evt) => {
            if (evt.path[1].scrollY > 0 && this.state.headerScrolls === false) {
                this.setState({ headerScrolls: !this.state.headerScrolls });
            } else if (evt.path[1].scrollY === 0 && this.state.headerScrolls === true) {
                this.setState({ headerScrolls: !this.state.headerScrolls });
            }
        });
    }
    render (props) {
        return <main>
            <div className={classNames(style.header, this.state.headerScrolls ? style.headerMin : style.headerMax)}>
                <div className={style.headerContent}>
                    <div className={style.logs}>
                        <a href="/" className={style.logsElements}>
                            <div className={classNames(style.logo, style.imageLog)}></div>
                            <div className={classNames(style.break, this.state.headerScrolls ? style.displayNone : style.display)}></div>
                            <div className={classNames(style.headerTitle, style.imageLog, this.state.headerScrolls ? style.displayNone : style.display)}></div>
                        </a>
                    </div>
                    <div className={style.headerInputWrapp}>
                        <div className={style.headerInputWrapper}>
                            <input className={classNames(style.headerInput, style.imageLog, { [style.headerInputActive]: this.state.InputState })} onClick={this.InputHandleClick} type="text" placeholder="Поиск" required/>
                            <span className={classNames(style.searchImg, style.imageLog, { [style.headerInputIconActive]: this.state.InputState })}></span>
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
        </main>;
    }
}

export default Header;
