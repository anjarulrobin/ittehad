import { UserProfileResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";

export async function getProfileApi() {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;
    const url = `https://wild-tan-meerkat-robe.cyclic.app/api/users/me`;
    // const url = `${process.env.REACT_APP_API_ORIGIN}/users/me`;


    // const user: UserProfileResponse = await fetcher(url,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })

    // return user;
    return ({
        "code": 200,
        "message": "SUCCESS",
        "data": {
            "_id": "6369faba2a5ff0f681f1244f",
            "name": "Abdullah", "phone": "01723456789",
            "passingYear": 2020,
            "userType": "teacher",
            "role": "admin",
            "groups": [
                {
                    "id": "636be5812c468cb60f4103c1", "name": "Mashwara",
                    "unreadMessageCount": 1,
                    "_id": "636be5812c468cb60f4103c3"
                },
                {
                    "id": "636d18d3e13a36940c0f7c42",
                    "name": "General",
                    "unreadMessageCount": 2,
                    "_id": "636be5812c468cb60f4103c4"
                }
            ], "unReadNotifications": 3,
            "fathersName": "Abu Bakar",
            "currentAddress": {
                "district": { "id": "1", "name": "Dhaka", "bn_name": "ঢাকা" }, "post": "string", "upzilla": { "id": "148", "name": "Nawabganj", "bn_name": "নবাবগঞ্জ" }, "village": "string"
            },
            "permanentAddress": {
                "district": { "id": "1", "name": "Dhaka", "bn_name": "ঢাকা" }, "post": "string", "upzilla": { "id": "147", "name": "Keraniganj", "bn_name": "কেরানীগঞ্জ" }, "village": "string"
            }, "academicDescription": "string", "bloodGroup": "A+", "designation": "string", "email": "abc@gmail.com", "isInterestedToDonate": true, "islahiRelation": "string", "masjidAddress": "string",
            "monthlyDonationAmount": 100, "occupation": "string", "secondaryPhone": "01723456789",
            "socialNumber": "01723456789", "studiedJamat": "string", "suggestion": "string", "takhassus": "string",
            "voluntaryTasks": "string", "workStation": "string", "workingInterest": "string"
        }
    });
}