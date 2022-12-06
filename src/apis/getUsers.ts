import { UserListRequestParams, UserListResponse } from "../types/user";
import { fetcher } from "../utils/fetcher";

export async function getUsersApi(params: UserListRequestParams): Promise<UserListResponse> {
    const authData = JSON.parse(localStorage.getItem('auth') || '');
    const token = authData?.token;

    let url = `${process.env.REACT_APP_API_ORIGIN}/users/all?skip=${params.skip}&limit=${params.limit}`;
    if (params.passingYear) {
        url += `&passingYear=${params.passingYear}`;
    }
    if (params.userType) {
        url += `&userType=${params.userType}`;
    }
    if (params.phone) {
        url += `&phone=${params.phone}`;
    }
    if (params.name) {
        url += `&name=${params.name}`;
    }

    if (params.userTags) {
        url += `&userTags=${params.userTags}`;
    }

    // const users: UserListResponse = await fetcher(url,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })

    // return users;
    return ({
        "code": 200,
        "message": "SUCCESS",
        "data": [
            { "id": "", "_id": "6369faba2a5ff0f681f1244f", "name": "Abdullah", "phone": "01723456789", "passingYear": 2020, "userType": "teacher", "fathersName": "Abu Bakar", "currentAddress": { "district": { "id": "1", "name": "Dhaka", "bn_name": "ঢাকা" }, "post": "string", "upzilla": { "id": "148", "name": "Nawabganj", "bn_name": "নবাবগঞ্জ" }, "village": "string" }, "permanentAddress": { "district": { "id": "1", "name": "Dhaka", "bn_name": "ঢাকা" }, "post": "string", "upzilla": { "id": "147", "name": "Keraniganj", "bn_name": "কেরানীগঞ্জ" }, "village": "string" } },
            { "id": "", "_id": "63731a7ebd2c106f9688eeb2", "name": "মাহদী হাসান মাইমুন ", "phone": "01883684336", "fathersName": "মাওলানা মনিরুজ্জামান", "passingYear": 2020, "userType": "student", "permanentAddress": { "village": "দারোরা", "post": "মহিচাইল ", "upzilla": { "id": "", "name": "", "bn_name": "চান্দিনা" }, "district": { "id": "", "name": "", "bn_name": "কুমিল্লা" } }, "currentAddress": { "village": "দারোরা, ", "post": "মহিচাইল", "upzilla": { "id": "", "name": "", "bn_name": "চান্দিনা" }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688eeb4", "name": "মুহাম্মাদ কামরুল ইসলাম (মাসুম)", "phone": "1854594629", "fathersName": "মুহাম্মাদ খুরসিদ আলম", "passingYear": 2020, "userType": "student", "permanentAddress": { "village": "পূর্ব মলিয়াইশ", "post": "মলিয়াইশ হাই স্কুল", "upzilla": { "id": "", "name": "", "bn_name": "মিরস্বরাই " }, "district": { "id": "", "name": "", "bn_name": "চট্টগ্রাম" } }, "currentAddress": { "village": "পূর্ব মলিয়াইশ", "post": "মলিয়াইশ হাই স্কুল", "upzilla": { "id": "", "name": "", "bn_name": "মিরস্বরাই " }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688eeca", "name": "মুহাম্মাদ কামাল হোসাইন", "phone": "01991155266", "fathersName": "মুহাম্মাদ দুলাল মিয়া", "passingYear": 2020, "userType": "student", "permanentAddress": { "village": "মাধবপুৱ", "post": "মেঘনা", "upzilla": { "id": "", "name": "", "bn_name": "মেঘনা" }, "district": { "id": "", "name": "", "bn_name": "কুমিল্লা" } }, "currentAddress": { "village": "মাধবপুর", "post": "মেঘনা", "upzilla": { "id": "", "name": "", "bn_name": "মেঘনা" }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688eed2", "name": "খন্দকার তানভীর আহম্মেদ", "phone": "01315928892", "fathersName": "খন্দকার নুরুল ইসলাম", "passingYear": 2020, "userType": "teacher", "permanentAddress": { "village": "মুনসেফেরচর", "post": "সৈয়দ নগর", "upzilla": { "id": "", "name": "", "bn_name": "শিবপুর" }, "district": { "id": "", "name": "", "bn_name": "নরসিংদী" } }, "currentAddress": { "village": "ভেলানগর", "post": "ভেলানগর", "upzilla": { "id": "", "name": "", "bn_name": "নরসিংদী" }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688eed5", "name": "তানভীর আহমদ মাসুদ", "phone": "01679185188", "fathersName": "জনাব শাহজাহান ", "passingYear": 2020, "userType": "student", "permanentAddress": { "village": "গোবিন্দপুর", "post": "কালাপাহাড়িয়া", "upzilla": { "id": "", "name": "", "bn_name": "আড়াইহাজার " }, "district": { "id": "", "name": "", "bn_name": "নারায়ণগঞ্জ" } }, "currentAddress": { "village": "মৈকুলী", "post": "রূপসী", "upzilla": { "id": "", "name": "", "bn_name": "রূপগঞ্জ " }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688eed8", "name": "মুহাম্মাদ মুস্তাকিম ", "phone": "1952008152", "fathersName": "মুহাম্মাদ সাইদুর রহমান ", "passingYear": 2020, "userType": "student", "permanentAddress": { "village": "নতুন ভাড়ালিয়া", "post": "শাক্তা", "upzilla": { "id": "", "name": "", "bn_name": "কেরানীগঞ্জ " }, "district": { "id": "", "name": "", "bn_name": "ঢাকা বিভাগ" } }, "currentAddress": { "village": "নতুন ভাড়ালিয়া", "post": "শাক্তা", "upzilla": { "id": "", "name": "", "bn_name": "কেরানীগঞ্জ " }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688eef2", "name": "মুহাম্মাদ কাওছার জামিল", "phone": "01913545706", "fathersName": "জনাব মুহাম্মাদ আছমত আলী", "passingYear": 2020, "userType": "teacher", "permanentAddress": { "village": "আমিত্তী", "post": "চরসগুনা", "upzilla": { "id": "", "name": "", "bn_name": "মেলান্দহ" }, "district": { "id": "", "name": "", "bn_name": "জামালপুর" } }, "currentAddress": { "village": "আকরান", "post": "বিরুলিয়া", "upzilla": { "id": "", "name": "", "bn_name": "সাভার" }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688ef1b", "name": "ফজলুল করীম", "phone": "01883226957, ", "fathersName": "জনাব রেজাউল করীম", "passingYear": 2020, "userType": "teacher", "permanentAddress": { "village": "পূর্ব হাজিপুর", "post": "পূর্ব হাজিপুর", "upzilla": { "id": "", "name": "", "bn_name": "বেগমগঞ্জ" }, "district": { "id": "", "name": "", "bn_name": "নোয়াখালী" } }, "currentAddress": { "village": "মধ্য কেরামতপুর", "post": "কেরামতপুর", "upzilla": { "id": "", "name": "", "bn_name": "সুবর্ণচর" }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688ef1d", "name": "ইসমাইল তকি শাহ", "phone": "1617191979", "fathersName": "মাওলানা তকি শাহ", "passingYear": 2020, "userType": "teacher", "permanentAddress": { "village": "পোরশা (পুর্ববাড়ী)", "post": "পোরশা", "upzilla": { "id": "", "name": "", "bn_name": "পোরশা" }, "district": { "id": "", "name": "", "bn_name": "নওগাঁ" } }, "currentAddress": { "village": "বাখরাবাজ", "post": "শ্যামপুর", "upzilla": { "id": "", "name": "", "bn_name": "মতিহার" }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688ef20", "name": "হাফিজুল ইসলাম", "phone": "1311902890", "fathersName": "জনাব আবুল বাশার", "passingYear": 2020, "userType": "teacher", "permanentAddress": { "village": "কালাইজানি", "post": "তালদিঘী", "upzilla": { "id": "", "name": "", "bn_name": "তারাকান্দা" }, "district": { "id": "", "name": "", "bn_name": "ময়মনসিংহ" } }, "currentAddress": { "village": "কালাইজানি", "post": "তালদিঘী", "upzilla": { "id": "", "name": "", "bn_name": "তারাকান্দা" }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688ef44", "name": "মুহাম্মাদ মামুনুর রশীদ দোহারী", "phone": "1916158190", "fathersName": "মুহাম্মাদ আসলাম মোল্লা ", "passingYear": 2020, "userType": "student", "permanentAddress": { "village": "চর কুশাই ", "post": "কুসুমহাটী", "upzilla": { "id": "", "name": "", "bn_name": "দোহার" }, "district": { "id": "", "name": "", "bn_name": "ঢাকা" } }, "currentAddress": { "village": "চর কুশাই ", "post": "কুসুমহাটি ", "upzilla": { "id": "", "name": "", "bn_name": "দোহার " }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688ef62", "name": "মাকসুদ হাসান ইবরাহীমি", "phone": "01742926396", "fathersName": "মাওলানা মাহমুদুল হাসান", "passingYear": 2020, "userType": "teacher", "permanentAddress": { "village": "উজানী", "post": "উজানী ", "upzilla": { "id": "", "name": "", "bn_name": "কচুয়া" }, "district": { "id": "", "name": "", "bn_name": "চাঁদপুর" } }, "currentAddress": { "village": "শনির আখড়া ", "post": "কদমতলি", "upzilla": { "id": "", "name": "", "bn_name": "যাত্রাবাড়ী " }, "district": { "id": "", "name": "" } } },
            { "id": "", "_id": "63731a7ebd2c106f9688ef66", "name": "শফিকুর রহমান", "phone": "01821632935", "fathersName": "মুহাম্মাদ ইসহাক", "passingYear": 2020, "userType": "student", "permanentAddress": { "village": "পেশকার পাড়া", "post": " সীতাকুণ্ড", "upzilla": { "id": "", "name": "", "bn_name": "সীতাকুণ্ড" }, "district": { "id": "", "name": "", "bn_name": "চট্টগ্রাম" } }, "currentAddress": { "village": "পেশকার পাড়া", "post": "সীতাকুণ্ড", "upzilla": { "id": "", "name": "", "bn_name": "সীতাকুণ্ড" }, "district": { "id": "", "name": "" } } }]
    })
}