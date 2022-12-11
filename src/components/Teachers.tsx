import { useEffect, useState } from "react";
import { getUsersApi } from "../apis/getUsers";
import { User } from "../types/user";
import CallAndSms from "./utils/CallAndSms";

export default function Teachers() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, selectUser] = useState<string>('');

    useEffect(() => {
        getUsersApi({ limit: 15, skip: 0, passingYear: 2020, userType: 'teacher' })
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
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="overflow-scroll p-4">
            {
                users.map((user, index) => (
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
            <div className="bg-[#20BB96] rounded-lg w-full p-3 text-center"            >
                <button
                    onClick={() => {
                        // setUsers([...users, { id: String(users.length + 1), name: 'New member' }]);
                    }}
                > Show More
                </button>
            </div>
        </div>
    )
}