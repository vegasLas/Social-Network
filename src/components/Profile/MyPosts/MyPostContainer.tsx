import { connect } from 'react-redux'
import {actions} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { AppReducersType } from '../../../redux/redux-store'
import { PostType } from '../../../types/types'



const mapStateToProps = (state: AppReducersType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
    }
}
export type MapStateToProps= {
    posts: Array<PostType>
}
export type MapDispatchToProps= {
    addPost: (newPostText: string) => void
}
export type post = {
    id: number, message: string, likesCount: number
}
const MyPostsContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppReducersType>(mapStateToProps, {addPost: actions.addPostActionCreator})(MyPosts)

export default MyPostsContainer