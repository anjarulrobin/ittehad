import { CommonResponse } from "./common";

export interface CommentListQueryParams {
    postId: string;
    skip: number;
    limit: number;
}

export interface CommentBody {
    postId: string;
    text: string;
}

export interface CommentResponse {
    _id: string;
    id: string;
    text: string;
    sender: {
        id: string;
        name: string;
        passingYear: number;
        userType: string;
    },
    createdAt: Date;
}

interface CommentListSuccessResponse extends CommonResponse {
    code: 200;
    data: CommentResponse[]
}

interface CommentListFailedResponse extends CommonResponse {
    code: 400;
}

interface CommentCreateSuccessResponse extends CommonResponse {
    code: 200;
    data: CommentResponse
}

interface CommentCreateFailedResponse extends CommonResponse {
    code: 400;
}

export type CommentListResponse = CommentListFailedResponse | CommentListSuccessResponse;
export type CommentCreateResponse = CommentCreateFailedResponse | CommentCreateSuccessResponse;