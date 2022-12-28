import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSignUpRequestsApi } from "../apis/getSignUpRequests";
import { User } from "../types/user";
import { Loader } from "./Loader";

export default function SignupRequests() {
    const [users, setUsers] = useState<User[]>([]);
    const LIMIT = 10;
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);

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


    let currRefId = 0;
    return (
        <div className="overflow-scroll p-4">
            {
                users.map((user) => (
                    <Link
                        to={`/signup-requests/${user.id}`}
                        className="flex items-center h-14 justify-left w-full font-medium text-center rounded-t-[48px]"
                        key={user.id}
                    >
                        <div className="w-8 h-8 pt-1 bg-[#E8F5F9] rounded-full text-center flex justify-center" >
                            {++currRefId}
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="px-4">{user.name}</p>
                                <p className="px-4 text-sm">{user.phone}</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#20BB96" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
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