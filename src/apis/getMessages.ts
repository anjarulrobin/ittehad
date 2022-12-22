import { MessageListRequestParams, MessageListResponse } from "../types/message";
import { fetcher } from "../utils/fetcher";

export async function getMessagesApi(params: MessageListRequestParams) {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    const url = `${process.env.REACT_APP_API_ORIGIN}/groups/view-message?skip=${params.skip}&limit=${params.limit}`;
    // const url = `https://wild-tan-meerkat-robe.cyclic.app/api/groups/view-message?skip=${params.skip}&limit=${params.limit}`;

    const mssages: MessageListResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    return mssages;
}