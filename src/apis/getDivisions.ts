import { DivisionListResponse } from "../types/address";
import { fetcher } from "../utils/fetcher";

export async function getDivisionsApi() {

    let url = `${process.env.REACT_APP_API_ORIGIN}/address/division`;

    const divisions: DivisionListResponse = await fetcher(url,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })

    return divisions;
}