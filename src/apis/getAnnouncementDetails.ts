import { AnnouncementDetailsRequestParams, AnnouncementDetailsResponse, AnnouncementListResponse } from "../types/announcements";
import { fetcher } from "../utils/fetcher";

export async function getAnnouncementDetailsApi(params: AnnouncementDetailsRequestParams): Promise<AnnouncementDetailsResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    // const url = `https://wild-tan-meerkat-robe.cyclic.app/api/announcements/?skip=${params.skip}&limit=${params.limit}`;
    const url = `${process.env.REACT_APP_API_ORIGIN}/announcements/${params.announcementId}`;

    const announcement: AnnouncementDetailsResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    return announcement;
}