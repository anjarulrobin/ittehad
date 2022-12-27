import { DistrictListResponse } from "../types/address";
import { fetcher } from "../utils/fetcher";

export async function getDistrictsApi(divisionId: string) {

    let url = `${process.env.REACT_APP_API_ORIGIN}/address/district?division_id=${divisionId}`;

    const districts: DistrictListResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })

    return districts;
}