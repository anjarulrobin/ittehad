import { UserListRequestParams, UserListResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";
import { UserData } from "./user-data";

export async function getUsersApi(params: UserListRequestParams): Promise<UserListResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;

    let url = `${process.env.REACT_APP_API_ORIGIN}/users/all?skip=${params.skip}&limit=${params.limit}`;
    // let url = `https://wild-tan-meerkat-robe.cyclic.app/api/users/all?skip=${params.skip}&limit=${params.limit}`;

    if (params.passingYear) {
        url += `&passingYear=${params.passingYear}`;
    }
    if (params.userType) {
        url += `&userType=${params.userType}`;
    }
    if (params.phone) {
        url += `&phone=${params.phone}`;
    }
    if (params.name) {
        url += `&name=${params.name}`;
    }

    if (params.userTags) {
        url += `&userTags=${params.userTags}`;
    }

    const users: UserListResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    return users;
    // return ({
    //     "code": 200,
    //     "message": "SUCCESS",
    //     // @ts-ignore
    //     "data": UserData
    // })
}