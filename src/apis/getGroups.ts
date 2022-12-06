import { GroupListRequestParams } from "../types/group";
import { UserListResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";

export async function getGroupsApi(params: GroupListRequestParams) {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    let url = `${process.env.REACT_APP_API_ORIGIN}/groups/${params}/view-message?skip=0&limit=10`;
    fetcher(`${url}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const users: UserListResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    return users;
}