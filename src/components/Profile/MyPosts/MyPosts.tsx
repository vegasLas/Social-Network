import React from 'react'
import classes from './MyPosts.module.css';
import { maxLengthCreator, required } from '../../../utils/validators';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { createField, TextArea } from '../../../common/Formcontrols/FormControl';
import Post from './Post/Post';
import {PostType} from '../../../types/types'


let maxLength = maxLengthCreator(30)

type FormData = {
    newPostText: string 
}

let AddNewPostForm: React.FC<InjectedFormProps<FormData>> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        {createField('Post message', 'newPostText', [required, maxLength], TextArea)}
        <button>Add post</button>
    </form>
}
let AddNewPostFormRedux = reduxForm<FormData>({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

type PropsType = {
    addPostActionCreator: (newPostText: string) => string
    posts: Array<PostType>
}

const MyPosts = React.memo<PropsType>(props => {
    let postElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let onAddPost = (value: FormData) => {
        props.addPostActionCreator(value.newPostText);
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