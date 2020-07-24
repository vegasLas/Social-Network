import React from 'react'
import classes from './MyPosts.module.css';
import { maxLengthCreator, required } from '../../../utils/validators';
import { reduxForm } from 'redux-form';
import { createField, TextArea } from '../../../common/Formcontrols/FormControl';
import Post from './Post/Post';

let maxLength = maxLengthCreator(30)


let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {createField('Post message', 'newPostText', [required, maxLength], TextArea)}
        <button>Add post</button>
    </form>
}
let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)
const MyPosts = React.memo(props => {
    let postElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let onAddPost = (values) => {
        props.addPostActionCreator(values.newPostText);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
})

export default MyPosts