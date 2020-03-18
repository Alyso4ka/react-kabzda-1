import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () => {

    let posts= [
        {message: "Hi, how are you?", likesCount: 22, id: 1},
        {message: "It's my first post", likesCount: 55, id: 2}


    ];
let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }

            </div>
        </div>
    )
}
export default MyPosts;

