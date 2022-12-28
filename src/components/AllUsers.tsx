import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getUsersApi } from "../apis/getUsers";
import { User } from "../types/user";
import { Loader } from "./Loader";

export default function AllUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const LIMIT = 10;
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const passingYear = Number(searchParams.get('passingYear'));
        console.log({ passingYear });
        getUsersApi({ passingYear, skip: skip, limit: LIMIT })
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
                users.map((user, index) => (
                    <Link
                        to={`/users/${user.id}`}
                        className="flex items-center h-14 justify-left w-full font-medium text-center rounded-t-[48px]"
                    >
                        <div className="w-8 h-8 pt-1 bg-[#E8F5F9] rounded-full text-center flex justify-center" >{++currRefId}</div>
                        <span className="px-4">{user.name}</span>
                    </Link>
                ))
            }
            {
                loading === true ?
                    <Loader /> :
                    (<div className="bg-[#20BB96] rounded-lg w-full p-3 text-center"            >
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