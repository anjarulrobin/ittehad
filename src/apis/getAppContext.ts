import { UserAppContextResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";

export async function getAppContextApi(): Promise<UserAppContextResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || 'null');
    const token = authData?.token;
    if (!token) {
        return ({ code: 400, message: 'UNAUTHORIZED' });
    }

    const url = `${process.env.REACT_APP_API_ORIGIN}/users/me`;
    const user: UserAppContextResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    return user;
}