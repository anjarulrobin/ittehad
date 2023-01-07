import { useContext, useEffect, useState } from "react";
import { getUsersApi } from "../apis/getUsers";
import { AppContext } from "../contexts/app.context";
import { User } from "../types/user";
import { Loader } from "./Loader";
import CallAndSms from "./utils/CallAndSms";

export default function Teachers() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, selectUser] = useState<string>('');
    const [skip, setSkip] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const LIMIT = 10;
    const appContext = useContext(AppContext);
    useEffect(() => {
        appContext?.setTitle('আসাতিযায়ে কেরাম');
        setLoading(true);
        getUsersApi({ limit: LIMIT, skip, userType: 'teacher' })
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
                users.map((user) => (
                    <div key={user.id}>
                        <div
                            onClick={() => selectUser(selectedUser === user.id ? '' : user.id)}
                            className="flex items-center h-10 m-1 justify-between font-medium"
                        >
                            <p className="px-4">{user.name}</p>
                        </div>
                        {(selectedUser === user.id) && (
                            <div
                                className="mx-8 text-md"
                            >
                                <CallAndSms phone={user.phone} />
                            </div>
                        )}
                    </div>

                ))
            }
            {
                loading === true ?
                    <Loader /> :
                    (
                        <div className="bg-[#20BB96] rounded-lg w-full p-3 text-center"            >
                            <button
                                onClick={() => {
                                    setSkip(skip + LIMIT);
                                }}
                            > Show More
                            </button>
                        </div>
                    )}
        </div>
    )
}