import { UserProfileResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";

export async function getAppContextApi(): Promise<UserProfileResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || 'null');
    const token = authData?.token;
    if (!token) {
        return ({ code: 400, message: 'UNAUTHORIZED' });
    }

    const url = `${process.env.REACT_APP_API_ORIGIN}/users/me`;
    const user: UserProfileResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    return user;
}