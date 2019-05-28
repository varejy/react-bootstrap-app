import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './post.css';

import PopUp from '../Pop-up/Pop-up.jsx';

class Post extends Component {
    static propTypes = {
        howMarked: PropTypes.string,
        imgUrl: PropTypes.string,
        id: PropTypes.number,
        posts: PropTypes.object
    };

    static defaultProps = {
        howMarked: '',
        imgUrl: '',
        id: 0,
        posts: {}
    };

    constructor (props) {
        super(props);

        this.state = {
            isShowPopUp: false
        };
    }
    hendleClickItem = () => {
        this.setState({
            isShowPopUp: !this.state.isShowPopUp
        });
    }
    hendleClickPopUp = () => {
        this.setState({
            isShowPopUp: false
        });
    }

    render (props) {
        const { imgUrl, id, howMarked } = this.props;
        const { comments, imgLike } = howMarked === 'postsArray' ? this.props.posts.posts[id] : this.props.posts.tags[id];
        return (<li className={styles.item}>
            <img className={styles.itemImage} src={imgUrl} />
            <div className={styles.itemInfo} onClick={this.hendleClickItem}>
                <div className={styles.itemsInfo}><span id={styles.itemLikeImg}></span><h2>{imgLike}</h2></div>
                <div className={styles.itemsInfo}><span id={styles.itemCommentsImg}></span><h2>{comments.length}</h2></div>
            </div>
            {
                this.state.isShowPopUp
                    ? <PopUp
                        outPopUp={this.hendleClickPopUp}
                        image={imgUrl}
                        howMarked={howMarked}
                        id={id}
                    />
                    : <span></span>
            }
        </li>);
    }
}
const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    };
};
export default connect(mapStateToProps)(Post);
