import { CommonResponse } from "../types/common";
import { fetcher } from "../utils/fetcher";

export async function approveRequestApi(phone: string): Promise<CommonResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    const url = `${process.env.REACT_APP_API_ORIGIN}/auth/approve`;

    const approval: CommonResponse = await fetcher(url,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ phone }),
        })

    return approval;
}