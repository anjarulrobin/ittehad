import { AnnouncementListRequestParams, AnnouncementListResponse } from "../types/announcements";
import { fetcher } from "../utils/fetcher";

export async function getAnnouncementsApi(params: AnnouncementListRequestParams) {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    const url = `https://wild-tan-meerkat-robe.cyclic.app/api/announcement/?skip=${params.skip}&limit=${params.limit}`;

    // const announcement: AnnouncementListResponse = await fetcher(url,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })

    // return announcement;
    return ({
        "code": 200,
        "message": "SUCCESS",
        "data": [
            { "id": "", "_id": "637392fd2038afbf0693126f", "title": "Greetings", "content": "Hello everyone", "sendBy": { "id": "6369faba2a5ff0f681f1244f", "name": "Abdullah" } },
            { "id": "", "_id": "636d297975e0aa68732d36c2", "title": "Greetings", "content": "Hello everyone", "sendBy": { "id": "6369faba2a5ff0f681f1244f", "name": "মোঃ আনজারুল ইসলাম" } },
            { "id": "", "_id": "636bae502d1232786f01cea3", "title": "Greetings", "content": "Hello everyone", "sendBy": { "id": "6369faba2a5ff0f681f1244f", "name": "anjar" } }
        ]
    })
}