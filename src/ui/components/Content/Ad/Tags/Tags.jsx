import React, { Component } from 'react';

import { tags } from '../tags';

import Post from '../Post/Post.jsx';

import styles from './tags.css';

class Tags extends Component {
    render () {
        return (<div>
            <ul id={styles.AdContentWrapp}>
                {
                    tags.map((item) =>
                        <Post key={item.id} imgUrl={item.imgUrl} imgLike={item.imgLike} comments={item.comments}/>
                    )
                }
            </ul>
        </div>);
    }
}

export default Tags;
