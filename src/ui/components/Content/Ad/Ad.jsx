import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Tags from './Tags/Tags.jsx';
import Posters from './Posters/Posters.jsx';

import { posts } from './posts';
import { tags } from './tags';

import styles from './ad.css';

class Ad extends Component {
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

const mapStateToProps = state => {
    return {
        posts: posts,
        tags: tags
    };
};

export default connect(mapStateToProps)(Ad);
