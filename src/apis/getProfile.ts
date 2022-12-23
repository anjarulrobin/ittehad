import { UserProfileResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";

export async function getProfileApi() {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    // const url = `https://wild-tan-meerkat-robe.cyclic.app/api/users/me`;
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