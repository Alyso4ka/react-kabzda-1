import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg'/>
            post 1
            <div>
            <span>like</span>
            </div>
        </div>

    )

}
export default Post;