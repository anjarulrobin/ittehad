import { MessageListRequestParams, MessageListResponse } from "../types/message";
import { fetcher } from "../utils/fetcher";

export async function getMessagesApi(params: MessageListRequestParams) {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    const url = `${process.env.REACT_APP_API_ORIGIN}/groups/${params.groupId}/view-message?skip=${params.skip}&limit=${params.limit}`;

    // const mssages: MessageListResponse = await fetcher(url,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })

    // return mssages;
    return ({ "code": 200, "message": "SUCCESS", "data": [{ "id": "", "_id": "636be79c055ec540c94df485", "groupId": "636be5812c468cb60f4103c1", "text": "How was the day", "sender": { "id": "6369faba2a5ff0f681f1244e", "name": "Mr.Y" }, "createdAt": "2022-11-09T17:47:08.004Z", "updatedAt": "2022-11-09T17:47:08.004Z" }, { "id": "", "_id": "636be75f055ec540c94df480", "groupId": "636be5812c468cb60f4103c1", "text": "How was the day", "sender": { "id": "6369faba2a5ff0f681f1244f", "name": "Mr.X" }, "createdAt": "2022-11-09T17:46:07.715Z", "updatedAt": "2022-11-09T17:46:07.715Z" }, { "id": "", "_id": "636be6b4049de1287483f4c7", "groupId": "636be5812c468cb60f4103c1", "text": "How was the day", "sender": { "id": "6369faba2a5ff0f681f1244f", "name": "Mr.X" }, "createdAt": "2022-11-09T17:43:16.333Z", "updatedAt": "2022-11-09T17:43:16.333Z" }] })
}