import { CommonResponse } from "./common";

export interface NotificationListRequestParams {
    skip: number;
    limit: number;
}

export interface NotificationResponse {
    _id: string;
    id: string;
    title: string;
    content: string;
    sendBy: {
        id: string;
        name: string;
    }
}

interface NotificationListSuccessResponse extends CommonResponse {
    code: 200;
    data: NotificationResponse[]
}

interface NotificationListFailedResponse extends CommonResponse {
    code: 400;
}

export type NotificationListResponse = NotificationListFailedResponse | NotificationListSuccessResponse;