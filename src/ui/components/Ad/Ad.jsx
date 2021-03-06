import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import setPosts from '../../../actions/setPosts';

import Tags from '../Tags/Tags.jsx';
import Posters from '../Posters/Posters.jsx';

import { postsArray } from '../postsArray';
import { tagsArray } from '../tagsArray';

import styles from './ad.css';

class Ad extends Component {
    static propTypes = {
        posts: PropTypes.object,
        tags: PropTypes.object,
        setPosts: PropTypes.func.isRequired
    };

    static defaultProps = {
        posts: {},
        tags: {}
    };

    constructor (props) {
        super(props);

        this.state = {
            isMain: true
        };
    }

    handleNavPublicClick = () => {
        this.setState({
            isMain: true
        });
    }

    handleNavTagsClick = () => {
        this.setState({
            isMain: false
        });
    }

    componentWillMount = () => {
        this.props.setPosts({
            posts: postsArray,
            tags: tagsArray
        });
    }
    render () {
        const { isMain } = this.state;
        const { posts, tags } = this.props;
        return (
            <div className={styles.Ad}>
                <div className={styles.AdWrapp}>
                    <header className={styles.AdNav}>
                        <div className={classNames(styles.headButtons, isMain ? styles.navPublicActive : styles.navPublication)}
                            onClick={this.handleNavPublicClick}>
                            <span className={classNames(styles.headButtonsImg, isMain ? styles.publicImgActive : styles.publicImg)}>
                            </span>
                            <p className={styles.headButtonsTxt}>Публикации</p>
                        </div>
                        <div className={classNames(styles.headButtons, !isMain ? styles.navTagsActive : styles.navTags)}
                            onClick={this.handleNavTagsClick}>
                            <span className={classNames(styles.headButtonsImg, !isMain ? styles.tagsImgActive : styles.tagsImg)}></span>
                            <p className={styles.headButtonsTxt}>Отметки</p>
                        </div>
                    </header>
                    <div>
                        {isMain ? <Posters posts={posts}/> : <Tags tags={tags}/>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    };
};

const mapDispatchToProps = (dispatch) => ({
    setPosts: (payload) => dispatch(setPosts(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ad);
