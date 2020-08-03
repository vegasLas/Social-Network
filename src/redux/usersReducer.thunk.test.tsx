import { follow } from "./usersReducer"
import { usersAPI } from "../api/UsersAPI"
import { ResponseType, ResultCodeEnum } from "../api/api"
jest.mock("../api/UsersAPI")
const UsersAPIMock = usersAPI

const result: ResponseType = {
    data: {},
    messages: [],
    resultCode: ResultCodeEnum.Success
}
// @ts-ignore
UsersAPIMock.follow.mockReturnValue(Promise.resolve(result))
test('', async() => {
    const thunk = follow(1)
    const dispatchMock = jest.fn()

    // @ts-ignore
    await thunk(dispatchMock)

    expect (dispatchMock).toBeCalledTimes(3)
} )