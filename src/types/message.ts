import { CommonResponse } from "./common";

export interface MessageListRequestParams {
    skip: number;
    limit: number;
    groupId: string;
}

export interface MessageResponse {
    _id: string;
    id: string;
    text: string;
    sender: {
        id: string;
        name: string;
    },
    // replyOf: Types.ObjectId
}

interface MessageListSuccessResponse extends CommonResponse {
    code: 200;
    data: MessageResponse[]
}

interface MessageListFailedResponse extends CommonResponse {
    code: 400;
}

export type MessageListResponse = MessageListFailedResponse | MessageListSuccessResponse;