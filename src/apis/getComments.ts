import { CommentListQueryParams, CommentListResponse } from "../types/comment";
import { fetcher } from "../utils/fetcher";

export async function getCommentsApi(params: CommentListQueryParams): Promise<CommentListResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    // const url = `${process.env.REACT_APP_API_ORIGIN}/groups/posts/${params.postId}/comments?skip=${params.skip}&limit=${params.limit}`;
    let url = `https://wild-tan-meerkat-robe.cyclic.app/api/groups/posts/${params.postId}/comments?skip=${params.skip}&limit=${params.limit}`;

    const comments: CommentListResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

    return comments;
}