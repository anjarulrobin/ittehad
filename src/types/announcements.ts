import { CommonResponse } from "./common";

export interface AnnouncementListRequestParams {
    skip: number;
    limit: number;
}

export interface AnnouncementResponse {
    _id: string;
    id: string;
    title: string;
    content: string;
    sendBy: {
        id: string;
        name: string;
    }
}

interface AnnouncementListSuccessResponse extends CommonResponse {
    code: 200;
    data: AnnouncementResponse[]
}

interface AnnouncementListFailedResponse extends CommonResponse {
    code: 400;
}

export type AnnouncementListResponse = AnnouncementListFailedResponse | AnnouncementListSuccessResponse;