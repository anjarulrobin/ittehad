import { CommentBody, CommentCreateResponse } from "../types/comment";
import { CommonResponse } from "../types/common";
import { fetcher } from "../utils/fetcher";

export async function createCommentsApi(body: CommentBody): Promise<CommentCreateResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    // const url = `${process.env.REACT_APP_API_ORIGIN}/groups/posts/${body.postId}/comments`;
    const url = `https://wild-tan-meerkat-robe.cyclic.app/api/groups/posts/${body.postId}/comments`;

    const comment: CommentCreateResponse = await fetcher(url,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ text: body.text }),
        })

    return comment;
}