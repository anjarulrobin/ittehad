import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getUsersApi } from "../apis/getUsers";
import { User } from "../types/user";

export default function AllUsers() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsersApi({ limit: 10, skip: 0, passingYear: 2020 })
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


    let currRefId = 0;
    return (
        <div className="overflow-scroll p-4">
            {
                users.map((user, index) => (
                    <Link
                        to={`/users/${index}`}
                        className="flex items-center h-14 justify-left w-full font-medium text-center rounded-t-[48px]"
                    >
                        <div className="w-8 h-8 pt-1 bg-[#E8F5F9] rounded-full text-center flex justify-center" >{++currRefId}</div>
                        <span className="px-4">{user.name}</span>
                    </Link>
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