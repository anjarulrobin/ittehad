import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getUsersApi } from "../apis/getUsers";
import { AppContext } from "../contexts/app.context";
import { User } from "../types/user";
import { Loader } from "./Loader";

export default function AllUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [searchParams] = useSearchParams();
    const LIMIT = 15;
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMoreUser, setHasMoreUser] = useState(true);
    const appContext = useContext(AppContext);

    useEffect(() => {
        appContext?.setTitle('ফুজালা ওয়া আবনা');
    }, [])

    useEffect(() => {
        setLoading(true);
        const passingYear = Number(searchParams.get('passingYear'));
        getUsersApi({ passingYear, skip: skip, limit: LIMIT })
            .then((userData) => {
                if (userData.code === 200) {
                    for (const user of userData.data) {
                        user.id = user._id;
                    }

                    setUsers([...users, ...userData.data]);
                    if (userData.data.length < LIMIT) {
                        setHasMoreUser(false);
                    }
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
        <div className="overflow-scroll p-4 h-[90vh]"
            onScroll={(e) => {
                //@ts-ignore
                const bottom = Math.round(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight;
                if (bottom && hasMoreUser) {
                    console.log("bottom");
                    setSkip(skip + LIMIT);
                }
            }}
        >
            {
                users.map((user) => (
                    <Link
                        to={`/users/${user.id}`}
                        className="flex items-center h-14 justify-left w-full font-medium text-center rounded-t-[48px]"
                        key={user.id}
                    >
                        <div className="w-8 h-8 pt-1 bg-[#E8F5F9] rounded-full text-center flex justify-center" >{++currRefId}</div>
                        <span className="px-4">{user.name}</span>
                    </Link>
                ))
            }
            {loading === true && <Loader />}
        </div>
    )
}