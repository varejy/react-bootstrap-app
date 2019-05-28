import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Post from '../Post/Post.jsx';

import styles from './tags.css';

class Tags extends Component {
    static propTypes = {
        tags: PropTypes.array
    };

    static defaultProps = {
        tags: []
    };

    render (props) {
        const { tags } = this.props;
        return (<ul id={styles.AdContentWrapp}>
            {
                tags.map((item, i) => {
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
        tags: posts.posts.tags
    };
};

export default connect(mapStateToProps)(Tags);
