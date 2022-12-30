import { UserResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";

export async function getUserApi(userId: string): Promise<UserResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;

    let url = `${process.env.REACT_APP_API_ORIGIN}/users/${userId}`;

    const users: UserResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    return users;
}