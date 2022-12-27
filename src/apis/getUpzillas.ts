import { UpzillaListResponse } from "../types/address";
import { fetcher } from "../utils/fetcher";

export async function getUpzillasApi(districtId: string): Promise<UpzillaListResponse> {

    let url = `${process.env.REACT_APP_API_ORIGIN}/address/upzilla?district_id=${districtId}`;

    const uozillas = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })

    return uozillas;
}