import { LoginCredentials, LoginResponse } from "../types/auth";
import { fetcher } from "../utils/fetcher";

export async function LoginAPI(auth: LoginCredentials): Promise<LoginResponse> {
    const loginReponse: LoginResponse = await fetcher(`https://wild-tan-meerkat-robe.cyclic.app/api/auth/login`,
        {
            method: 'POST',
            body: JSON.stringify(auth),
            headers: {
                'Content-type': 'application/json'
            }
        });
    return loginReponse;
}