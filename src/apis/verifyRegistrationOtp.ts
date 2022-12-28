import { VerifyRegOtpInterface, VerifyRegOtpResponse } from "../types/auth";
import { fetcher } from "../utils/fetcher";

export async function VerifyRegistrationOtpAPI(data: VerifyRegOtpInterface): Promise<VerifyRegOtpResponse> {
    const url = `${process.env.REACT_APP_API_ORIGIN}/auth/verify-otp`;
    const otpVerificationReponse: VerifyRegOtpResponse = await fetcher(url,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });
    return otpVerificationReponse;
}