import { AnnouncementListRequestParams, AnnouncementListResponse } from "../types/announcements";
import { fetcher } from "../utils/fetcher";

export async function getAnnouncementsApi(params: AnnouncementListRequestParams): Promise<AnnouncementListResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    // const url = `https://wild-tan-meerkat-robe.cyclic.app/api/announcements/?skip=${params.skip}&limit=${params.limit}`;
    const url = `${process.env.REACT_APP_API_ORIGIN}/announcements/?skip=${params.skip}&limit=${params.limit}&type=${params.type}`;

    const announcements: AnnouncementListResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    return announcements;
}