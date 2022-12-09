import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserApi } from "../apis/getUser";
import { User as UserType } from "../types/user";

export default function User() {
    const { userId } = useParams<string>();
    const [user, setUser] = useState<UserType | null>();

    useEffect(() => {
        getUserApi(userId || '')
            .then((user) => {
                if (user.code === 200) {
                    user.data.id = user.data._id;
                    setUser(user.data);
                }
                else {
                    setUser(null);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="m-3">
            <div className="flex">
                <p className="px-2 py-2 pt-0 pb-0 m-1 bg-[#E1FFF8] text-[#20BB96] rounded-md">{user?.userType === 'teacher' ? 'ফুজালা' : 'আবনা'}</p>
                <p className="px-2 py-2 pt-0 pb-0 m-1 bg-[#E1FFF8] text-[#20BB96] rounded-md">{user?.passingYear}</p>
            </div>
            <p className="mt-2">{user?.name}</p>
            <div className="mt-2">
                রক্তের গ্রুপ: এ+
            </div>
        </div >
    )
}