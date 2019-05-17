import React, { Component } from 'react';

import Post from '../Post/Post.jsx';

import styles from './posters.css';

class Posters extends Component {
    render (props) {
        const { posts } = this.props;
        return (<ul id={styles.AdContentWrapp}>
            {
                posts.map((item) =>
                    <Post key={item.id} imgUrl={item.imgUrl} imgLike={item.imgLike} comments={item.comments}/>
                )
            }
        </ul>);
    }
}

export default Posters;
