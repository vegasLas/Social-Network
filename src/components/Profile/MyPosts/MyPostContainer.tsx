import { connect } from 'react-redux'
import {actions} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { AppReducersType } from '../../../redux/redux-store'
import { PostType } from '../../../types/types'



const mapStateToProps = (state: AppReducersType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
type MapStateToProps= {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchToProps= {
    actions: typeof actions
}
export type post = {
    id: number, message: string, likesCount: number
}
const MyPostsContainer = connect<MapStateToProps, MapDispatchToProps, unknown, AppReducersType>(mapStateToProps, {actions})(MyPosts)

export default MyPostsContainer