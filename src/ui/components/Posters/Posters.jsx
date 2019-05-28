import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Post from '../Post/Post.jsx';

import styles from './posters.css';

class Posters extends Component {
    static propTypes = {
        posts: PropTypes.array
    };

    static defaultProps = {
        posts: []
    };

    render (props) {
        const { posts } = this.props;
        return (<ul id={styles.AdContentWrapp}>
            {
                posts.map((item, i) => {
                    return (
                        <Post
                            key={item.id}
                            howMarked={item.howMarked}
                            id={i}
                            isLike={item.isLike}
                            imgUrl={item.imgUrl}
                            imgLike={item.imgLike}
                            comments={item.comments}
                        />
                    );
                })
            }
        </ul>);
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts.posts
    };
};

export default connect(mapStateToProps)(Posters);
