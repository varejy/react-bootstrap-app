import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import style from './Profile.css';
import setUser from '../../../../actions/setUser';

class Profile extends Component {
    state = {
        user: {}
    };

    handleSubscribeClick = () => {
        if (!this.state.user.isSubscribe) {
            this.setState((state, props) => {
                return {
                    user: {
                        ...state.user,
                        isSubscribe: true,
                        subscribers: state.user.subscribers + 1
                    }
                };
            }, () => {
                this.props.setUser(this.state.user);
            });
        } else if (this.state.user.isSubscribe) {
            this.setState((state, props) => {
                return {
                    user: {
                        ...state.user,
                        isSubscribe: false,
                        subscribers: state.user.subscribers - 1
                    }
                };
            }, () => {
                this.props.setUser(this.state.user);
            });
        }
    }

    static propTypes = {
        user: PropTypes.object,
        setUser: PropTypes.func.isRequired
    };

    static defaultProps = {
        user: {}
    };

    componentWillMount = () => {
        this.setState((state, props) => {
            return {
                user: props.user
            };
        });
    }
    render () {
        const { user } = this.state;
        const { descriptionLinkUrl, descriptionLinkTxt } = this.state.user.descriptionLink;
        return <div className={style.Profile}>
            <div className={style.ProfileWrapp}>
                <div className={style.avatar}>
                    <img className={style.img} src={ user.userAvatar }></img>
                </div>
                <div className={style.info}>
                    <div className={style.header}>
                        <h1 className={style.nickname}>{ user.userLogin }</h1>
                        <span className={classNames(style.confirmationLogo, style.imageLog)}></span>
                        <div className={style.buttons}>
                            <button
                                className={classNames(style.NotSubscribe, { [style.subscribe]: user.isSubscribe })}
                                onClick={this.handleSubscribeClick}
                            >
                                { user.isSubscribe === true ? 'Подписки' : 'Подписаться' }
                            </button>

                            <button
                                className={classNames(style.showRecommended, { [style.subscribeBtnRecom]: user.isSubscribe })}>
                                <span
                                    className={classNames(style.buttonIcon, style.imageLog, { [style.subscribeBtnRecomIcon]: user.isSubscribe })}>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={style.subscriptionsInfo}>
                        <ul className={style.subsInfo}>
                            <li className={style.ProfileInfoItem}><span className={style.subscriptInfo}>{ user.publication }</span> публикаций</li>
                            <li className={style.ProfileInfoItem}><span className={style.subscriptInfo}>{ user.subscribers }</span> подписчиков</li>
                            <li className={style.ProfileInfoItem}>Подписки: <span className={style.subscriptInfo}>{ user.subscriptions }</span></li>
                        </ul>
                    </div>
                    <div className={style.description}>
                        <h1 className={style.descriptionChild}>{ user.descriptionUserName }</h1>
                        <span className={style.descriptionChild}>{ user.descriptionAboutYourself }</span>
                        <a className={style.descriptionChild} href={ descriptionLinkUrl }>{ descriptionLinkTxt }</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}
const mapStateToProps = ({ user }) => {
    return {
        user: user.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    setUser: () => dispatch(setUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
