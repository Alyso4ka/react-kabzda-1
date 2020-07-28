import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

window.props = [];

const MyPosts = React.memo(props => {
        window.props.push(props);

        let postsElements =
            [...props.posts]
                .reverse()
                .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

        let newPostElement = React.createRef();

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        };

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
)


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field
                    name='newPostText'
                    component={Textarea}
                    validete={[required, maxLength10]}
                    placeholder={'Post message'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;

