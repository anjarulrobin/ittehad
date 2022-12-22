import { CommonResponse } from "./common";

export interface AnnouncementListRequestParams {
    skip: number;
    limit: number;
}
export interface AnnouncementBody {
    title: string;
    content: string;
    type: 'GENERAL' | 'BLOOD_FINDING' | 'SERVINGS';
}

export interface AnnouncementDetailsRequestParams {
    announcementId: string;
}

export interface AnnouncementResponse {
    _id: string;
    id: string;
    title: string;
    content: string;
    type: 'GENERAL' | 'BLOOD_FINDING' | 'SERVINGS';
    sendBy: {
        id: string;
        name: string;
        passingYear: string;
        userType: 'teacher' | 'student'
    };
    createdAt: Date;
}

interface AnnouncementListSuccessResponse extends CommonResponse {
    code: 200;
    data: AnnouncementResponse[]
}

interface AnnouncementListFailedResponse extends CommonResponse {
    code: 400;
}

interface AnnouncementDetailsSuccessResponse extends CommonResponse {
    code: 200;
    data: AnnouncementResponse
}

interface AnnouncementDetailsFailedResponse extends CommonResponse {
    code: 400;
}

interface AnnouncementCreateFailedResponse extends CommonResponse {
    code: 400;
}
interface AnnouncementCreateSuccessResponse extends CommonResponse {
    code: 200;
    data: AnnouncementResponse
}


export type AnnouncementListResponse = AnnouncementListFailedResponse | AnnouncementListSuccessResponse;
export type AnnouncementDetailsResponse = AnnouncementDetailsFailedResponse | AnnouncementDetailsSuccessResponse;
export type AnnouncementCreateResponse = AnnouncementCreateFailedResponse | AnnouncementCreateSuccessResponse;
