
import { connect } from 'react-redux'
import {addPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts)

export default MyPostsContainer