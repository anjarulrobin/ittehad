import { AnnouncementBody, AnnouncementCreateResponse } from "../types/announcements";
import { fetcher } from "../utils/fetcher";

export async function createAnnouncementApi(body: AnnouncementBody): Promise<AnnouncementCreateResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    const url = `${process.env.REACT_APP_API_ORIGIN}/announcements/${body.type === 'GENERAL' && '/general'}`;
    // const url = `https://wild-tan-meerkat-robe.cyclic.app/api/groups/posts/${body.postId}/comments`;

    const announcement: AnnouncementCreateResponse = await fetcher(url,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title: body.title, content: body.content, type: body.type }),
        })

    return announcement;
}