import { MessageBody, MessageSendResponse } from "../types/message";
import { fetcher } from "../utils/fetcher";

export async function sendMessageApi(body: MessageBody) {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    const url = `${process.env.REACT_APP_API_ORIGIN}/groups/send-message`;

    const mssagesResponse: MessageSendResponse = await fetcher(url,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    return mssagesResponse;
}