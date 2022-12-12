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

export interface UserAddress {
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

export interface PersonalInfo {
    bloodGroup: string;
    phone: string;
}

export interface OtherInfo {
    fathersName: string;
}

export interface User {
    id: string;
    _id: string;
    name: string;
    phone: string;
    passingYear: number;
    userType: "teacher" | "student";
    fathersName: string;
    currentAddress: UserAddress,
    permanentAddress: UserAddress
}

interface UserListSuccessResponse extends CommonResponse {
    code: 200;
    data: User[]
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

interface GetUserSuccessResponse extends CommonResponse {
    code: 200;
    data: User
}

interface GetUserFailedResponse extends CommonResponse {
    code: 400;
}

export type UserResponse = GetUserSuccessResponse | GetUserFailedResponse;

