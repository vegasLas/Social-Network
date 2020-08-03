import usersReducer, { initialStateType } from "./usersReducer"
import { actions } from "./usersReducer"

let state: initialStateType

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: 'Abrakadabra',
                status: '',
                photos: { small: null, large: null },
                followed: true
            },
            {
                id: 1,
                name: 'Abrakadabra',
                status: '',
                photos: { small: null, large: null },
                followed: false
            },
            {
                id: 2,
                name: 'Abrakadabra',
                status: '',
                photos: { small: null, large: null },
                followed: true
            },
            {
                id: 3,
                name: 'Abrakadabra',
                status: '',
                photos: { small: null, large: null },
                followed: true
            }
        ],
        pageSize: 1,
        totalUsersCount: 10,
        currentPage: 1,
        isFetching: false,
        followingProgress: []
    }
})
test("follow success", () => {
let newState = usersReducer(state, actions.followSuccess(1))

expect(newState.users[1].followed).toBeTruthy()
})
test("unfollow success", () => {
let newState = usersReducer(state, actions.unfollowSuccess(2))

expect(newState.users[2].followed).toBeFalsy()
})


