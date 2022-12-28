import { RegistrationData, RegistrationResponse } from "../types/auth";
import { fetcher } from "../utils/fetcher";

export async function RegisterAPI(data: RegistrationData): Promise<RegistrationResponse> {
    const url = `${process.env.REACT_APP_API_ORIGIN}/auth/register`;
    const loginReponse: RegistrationResponse = await fetcher(url,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });
    return loginReponse;
}