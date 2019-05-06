import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Header.css';

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            InputState: true,
            InputValue: '',
            headerScrolls: false,
            InputExt: false
        };

        this.InputHandleClick = this.InputHandleClick.bind(this);
        this.SearchExtHandleClick = this.SearchExtHandleClick.bind(this);
        this.InputHandleChange = this.InputHandleChange.bind(this);
    }

    InputHandleClick (elem) {
        elem.preventDefault();
        if (this.state.InputState && !this.state.InputExt) {
            this.setState({
                InputState: !this.state.InputState,
                InputExt: !this.state.InputExt
            });
        }
    }

    InputHandleChange (elem) {
        this.setState({ InputValue: elem.target.value });
    }

    SearchExtHandleClick (elem) {
        this.setState({
            InputExt: !this.state.InputExt,
            InputState: !this.state.InputState,
            InputValue: ''
        });
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
        const { InputState, InputExt, InputValue, headerScrolls } = this.state;
        return <div className={style.Header}>
            <div className={classNames(style.header, headerScrolls ? style.headerMin : style.headerMax)}>
                <div className={style.headerContent}>
                    <div className={style.logs}>
                        <a href="/" className={style.logsElements}>
                            <div className={classNames(style.logo, style.imageLog)}></div>
                            <div className={classNames(style.break, headerScrolls ? style.displayNone : style.display)}></div>
                            <div className={classNames(style.headerTitle, style.imageLog, headerScrolls ? style.displayNone : style.display)}></div>
                        </a>
                    </div>
                    <div className={style.headerInputWrapp}>
                        <div className={style.headerInputWrapper}>
                            <input
                                className={classNames(style.headerInput, style.imageLog, { [style.headerInputActive]: !InputExt })}
                                onClick={this.InputHandleClick}
                                onChange={this.InputHandleChange}
                                type="text"
                                placeholder="Поиск"
                                value={InputValue}
                                required
                            />
                            <span
                                className={classNames(style.searchImg, style.imageLog, { [style.headerInputIconActive]: !InputExt })}
                            >
                            </span>
                            <span
                                className={classNames(style.searchImgExtShow, style.imageLog, { [style.searchImgExt]: InputState })}
                                onClick={this.SearchExtHandleClick}
                            >
                            </span>
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
        </div>;
    }
}

export default Header;
