import { UserListRequestParams, UserListResponse, UserResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";
import { UserData } from "./user-data";

export async function getUserApi(userId: string): Promise<UserResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;

    // let url = `https://wild-tan-meerkat-robe.cyclic.app/api/users/`;
    let url = `${process.env.REACT_APP_API_ORIGIN}/users/`;

    // const users: UserListResponse = await fetcher(url,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })

    // return users;
    return ({
        "code": 200,
        "message": "SUCCESS",
        // @ts-ignore
        "data": UserData[userId],
    })
}