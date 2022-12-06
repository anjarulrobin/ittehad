import { CommonResponse } from "./common";

export interface GroupListRequestParams {
    skip: number;
    limit: number;
}

export interface GroupResponse {
    id: string;
    name: string;
    _id: string;
}

interface GroupListSuccessResponse extends CommonResponse {
    code: 200;
    data: GroupResponse[]
}

interface GroupListFailedResponse extends CommonResponse {
    code: 400;
}

export type GroupListResponse = GroupListFailedResponse | GroupListSuccessResponse;