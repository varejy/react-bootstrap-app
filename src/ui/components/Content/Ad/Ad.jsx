import React, { Component } from 'react';
import classNames from 'classnames';

import { posts } from './posts';

import styles from './ad.css';

class Ad extends Component {
    render () {
        return (
            <div className={styles.Ad}>
                <div className={styles.AdWrapp}>
                    <header className={styles.AdNav}>
                        <div className={classNames(styles.publication, styles.headButtons)}><span className={classNames(styles.publicImg, styles.headButtonsImg)}></span><p className={styles.headButtonsTxt}>Публикации</p></div>
                        <div className={classNames(styles.tags, styles.headButtons)}><span className={classNames(styles.tagsImg, styles.headButtonsImg)}></span><p className={styles.headButtonsTxt}>Отметки</p></div>
                    </header>
                    <div>
                        <ul id={styles.AdContentWrapp}>
                            {
                                posts.map((item) =>
                                    <li key={item.id} className={styles.item}>
                                        <img className={styles.itemImage} src={item.imgUrl} />
                                        <div className={styles.itemInfo}>
                                            <h2>{item.imgLike}</h2>
                                            <h2>{item.coments.length}</h2>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ad;
