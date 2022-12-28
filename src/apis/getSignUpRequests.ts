import { UserListResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";

export async function getSignUpRequestsApi({ skip, limit }: { skip: number, limit: number }): Promise<UserListResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;

    let url = `${process.env.REACT_APP_API_ORIGIN}/auth/signup-requests?skip=${skip}&limit=${limit}`;

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