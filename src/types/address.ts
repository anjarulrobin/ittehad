import { CommonResponse } from "./common";

export interface Division {
    id: string;
    name: string;
    bn_name: string;
}

export interface District {
    id: string;
    name: string;
    bn_name: string;
}

export interface Upzilla {
    id: string;
    name: string;
    bn_name: string;
}

interface DivisionListSuccessResponse extends CommonResponse {
    code: 200;
    data: Division[]
}

interface DivisionListFailedResponse extends CommonResponse {
    code: 400;
}

interface DistrictListSuccessResponse extends CommonResponse {
    code: 200;
    data: District[]
}

interface DistrictListFailedResponse extends CommonResponse {
    code: 400;
}
interface UpzillaListSuccessResponse extends CommonResponse {
    code: 200;
    data: Upzilla[]
}

interface UpzillaListFailedResponse extends CommonResponse {
    code: 400;
}

export type DivisionListResponse = DivisionListFailedResponse | DivisionListSuccessResponse;
export type DistrictListResponse = DistrictListFailedResponse | DistrictListSuccessResponse;
export type UpzillaListResponse = UpzillaListFailedResponse | UpzillaListSuccessResponse;
