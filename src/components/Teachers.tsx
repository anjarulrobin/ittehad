import { useEffect, useRef, useState } from "react";
import { getUsersApi } from "../apis/getUsers";
import { User } from "../types/user";
import CallAndSms from "./utils/CallAndSms";

export default function Teachers() {
    const [users, setUsers] = useState<User[]>([]);

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

    const userRefs = useRef<HTMLDivElement[]>([]);
    let currentRefId = 0;

    return (
        <div className="overflow-scroll p-4">
            {
                users.map((user, index) => (
                    <div key={user.id}>
                        <div
                            // to={`/users/${index}`}
                            onClick={() => {
                                console.log('clicked');
                                if (!userRefs.current[index].style.display || userRefs.current[index].style.display === 'none') {
                                    userRefs.current[index].style.display = 'flex';
                                }
                                else {
                                    userRefs.current[index].style.display = 'none';
                                }
                            }}
                            className="flex items-center h-10 m-1 justify-left font-medium"
                        >
                            <p className="px-4">{user.name}</p>
                        </div>
                        <div
                            className="mx-10 text-sm hidden"
                            ref={(element: HTMLDivElement) => userRefs.current[currentRefId++] = element}
                        >
                            <CallAndSms phone={user.phone} />
                        </div>
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

            <div className="bg-blue-200 rounded-lg w-full p-3 text-center"            >
                <button
                    onClick={() => {
                        // setUsers([...users, { id: String(users.length + 1), name: 'New member' }]);
                    }}
                > Show More </button>
            </div>

        </div>
    )
}