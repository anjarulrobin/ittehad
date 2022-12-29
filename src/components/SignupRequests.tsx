import { useEffect, useState } from "react";
import { approveRequestApi } from "../apis/approveRequest";
import { getSignUpRequestsApi } from "../apis/getSignUpRequests";
import { User } from "../types/user";
import { Loader } from "./Loader";

export default function SignupRequests() {
    const [users, setUsers] = useState<User[]>([]);
    const LIMIT = 10;
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [approvalMessage, setApprovalMessage] = useState('');

    useEffect(() => {
        setLoading(true);
        getSignUpRequestsApi({ skip: skip, limit: LIMIT })
            .then((users) => {
                if (users.code === 200) {
                    for (const user of users.data) {
                        user.id = user._id;
                    }
                    setUsers(users.data);
                }
                else {
                    setUsers([]);
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [skip]);


    return (
        <div className="overflow-scroll p-4">
            {
                approvalMessage && <div className="m-2 text-center">{approvalMessage}</div>
            }
            {
                users.map((user) => (
                    <div
                        className="m-2 border border-[#20BB96] p-1.5 flex justify-center rounded-lg"
                        key={user.id}
                    >
                        <div className="flex justify-between">
                            <div className="flex-col mt-1 mb-1">
                                <p className="text-center font-ittehad-subtitle font-ittehad-kalpurush items-center">{user?.name}</p>
                                <div className="flex justify-center">
                                    <p className="w-fit px-0.5 py-0.5 pt-0 pb-0 m-0.5 text-sm bg-[#E1FFF8] text-[#20BB96] rounded-md">{user?.userType === 'teacher' ? 'ফুজালা' : 'আবনা'}</p>
                                    <p className="w-fit px-0.5 py-0.5 pt-0 pb-0 m-0.5 text-sm bg-[#E1FFF8] text-[#20BB96] rounded-md">{user?.passingYear}</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-sm">{user.phone}</p>
                                </div>
                                <p className="text-sm">বর্তমান ঠিকানা: {user.currentAddress?.village},{user.currentAddress?.post},{user.currentAddress?.upzilla?.bn_name},{user.currentAddress?.district?.bn_name}</p>
                                <p className="text-sm">স্থায়ী ঠিকানা: {user.permanentAddress?.village},{user.permanentAddress?.post},{user.permanentAddress?.upzilla?.bn_name},{user.permanentAddress?.district?.bn_name}</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="m-1">
                                    <button
                                        onClick={() => {
                                            approveRequestApi(user.phone)
                                                .then((res) => {
                                                    if (res.code === 200) {
                                                        const userList = users.filter((u) => user.phone !== u.phone);
                                                        setUsers(userList);
                                                        setApprovalMessage('Request approved!');
                                                        setTimeout(() => {
                                                            setApprovalMessage('');
                                                        }, 1000);
                                                    }
                                                    else {
                                                        setApprovalMessage(res.message);
                                                        setTimeout(() => {
                                                            setApprovalMessage('');
                                                        }, 1000);
                                                    }
                                                }).catch((err) => {
                                                    setApprovalMessage(err.message);
                                                    setTimeout(() => {
                                                        setApprovalMessage('');
                                                    }, 1000);
                                                })
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#20BB96" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                loading === true ?
                    <Loader /> :
                    (<div className="bg-[#20BB96] rounded-lg w-full p-1 mt-2 text-center" >
                        <button
                            onClick={() => {
                                setSkip(skip + LIMIT)
                            }}
                        > Show More
                        </button>
                    </div>)
            }

        </div>
    )
}