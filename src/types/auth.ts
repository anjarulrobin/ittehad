import { CommonResponse } from "./common";

export interface LoginCredentials {
    phone: string;
    password: string;
}

interface LoginSuccessResponse {
    code: 200;
    message: string;
    data: {
        token: string;
    }
}

interface LoginFailedResponse {
    code: string;
    message: string;
    error: string;
}

export type LoginResponse = LoginSuccessResponse | LoginFailedResponse;

export interface RegistrationData {
    name: string;
    phone: string;
    passingYear: number;
    fathersName: string;
    permanentAddress: {
        village: string;
        post: string;
        upzilla_id: string;
        district_id: string;
    },
    currentAddress: {
        village: string;
        post: string;
        upzilla_id: string;
        district_id: string;
    }
    // secondaryPhone?: string;
    // socialNumber: Joi.string().label('Social number').length(11),
    // email: Joi.string().label('Email'),
    academicDescription: string;
    // occupation: string;
    workStation: string;
    // designation: Joi.string().label('Designation'),
    // takhassus: Joi.string().label('Takhassus'),
    // workingInterest: Joi.string().label('Occupation'),
    // isInterestedToDonate?: boolean;
    // monthlyDonationAmount?: number;
    voluntaryTasks: string;
    masjidAddress: string;
    bloodGroup: 'A+' | 'B+' | 'O+' | 'A-' | 'B-' | 'O-' | 'AB+' | 'AB-';
    // islahiRelation: Joi.string().label('Islahi Relation'),
    // suggestion: Joi.string().label('Suggestion'),
    studiedJamat: string,
    fcmToken?: string;
}

export type RegistrationResponse = CommonResponse;

export interface VerifyRegOtpInterface {
    otp: string;
    phone: string;
}

export type VerifyRegOtpResponse = CommonResponse;
