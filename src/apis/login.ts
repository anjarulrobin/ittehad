import { LoginCredentials, LoginResponse } from "../types/auth";
import { fetcher } from "../utils/fetcher";

export async function LoginAPI(auth: LoginCredentials): Promise<LoginResponse> {
    const loginReponse: LoginResponse = await fetcher(`${process.env.REACT_APP_API_ORIGIN}/auth/login`,
        {
            method: 'POST',
            body: JSON.stringify(auth),
            headers: {
                'Content-type': 'application/json'
            }
        });
    return loginReponse;
}