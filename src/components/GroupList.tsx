import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProfileApi } from "../apis/getProfile";

interface Group {
    id: string;
    name: string;
    unreadMessageCount: number;
}

export function GroupList() {
    const [groups, setGroups] = useState<Group[]>([]);

    useEffect(() => {
        getProfileApi()
            .then((data) => {
                if (data.code === 200) {
                    setGroups(data.data.groups);
                }
                else {
                    alert('Groups not found')
                }
            })
            .catch((err) => console.error(err));
    }, [])
    return (
        <div className="flex justify-center">
            <div className="w-80">

                <div className="bg-green-600 text-center rounded-lg mb-2">
                    Groups
                </div>

                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 px-2">
                    {
                        groups.map((group) => (
                            <Link to={`/groups/${group.id}`}
                                key={group.id}>
                                <li
                                    className="py-2 px-4 w-full flex justify-between border-b border-gray-200 hover:bg-blue-300"
                                >
                                    <div >
                                        {group.name}
                                    </div>
                                    <div className={group.unreadMessageCount < 0 ? 'hidden' : 'bg-red-500 w-6 rounded-full font-semibold text-center'}> {group.unreadMessageCount || 1}</div>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}