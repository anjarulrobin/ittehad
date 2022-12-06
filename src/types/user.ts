import { CommonResponse } from "./common";

export interface UserListRequestParams {
    skip: number;
    limit: number;
    userType?: 'teacher' | 'student';
    userTags?: string;
    passingYear?: number;
    phone?: string;
    name?: string;
}

export interface UserResponse {
    id: string;
    _id: string;
    name: string;
    phone: string;
    passingYear: number;
    userType: "teacher" | "student";
    fathersName: string;
    currentAddress: {
        district: {
            id: string;
            name: string;
            bn_name?: string;
        }
        post: string;
        upzilla: {
            id: string;
            name: string;
            bn_name?: string;
        }
        village: string
    },
    permanentAddress: {
        district: {
            id: string;
            name: string;
            bn_name?: string;
        }
        post: string;
        upzilla: {
            id: string;
            name: string;
            bn_name?: string;
        }
        village: string
    }
}

interface UserListSuccessResponse extends CommonResponse {
    code: 200;
    data: UserResponse[]
}

interface UserListFailedResponse extends CommonResponse {
    code: 400;
}

export type UserListResponse = UserListFailedResponse | UserListSuccessResponse;

export interface UserProfile {
    id: string;
    _id: string;
    name: string;
    phone: string;
    passingYear: number;
    userType: "teacher" | "student";
    groups: [
        {
            id: string;
            name: string;
            unreadMessageCount: number;
        }
    ];
    currentAddress: {
        district: {
            id: string;
            name: string;
            bn_name: string;
        }
        post: string;
        upzilla: {
            id: string;
            name: string;
            bn_name: string;
        }
        village: string
    },
    permanentAddress: {
        district: {
            id: string;
            name: string;
            bn_name: string;
        }
        post: string;
        upzilla: {
            id: string;
            name: string;
            bn_name: string;
        }
        village: string
    }
}

interface GetProfileSuccessResponse extends CommonResponse {
    code: 200;
    data: UserProfile
}

interface GetProfileFailedResponse extends CommonResponse {
    code: 400;
}

export type UserProfileResponse = GetProfileSuccessResponse | GetProfileFailedResponse;

