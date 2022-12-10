import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserApi } from "../apis/getUser";
import { User as UserType } from "../types/user";

function UpperIcon() {
    return (
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.92 9.05014L10.4 2.53014C9.62996 1.76014 8.36996 1.76014 7.59996 2.53014L1.07996 9.05014" stroke="#20BB96" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

function LowerIcon() {
    return (
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.92 1.9502L10.4 8.4702C9.62996 9.2402 8.36996 9.2402 7.59996 8.4702L1.07996 1.9502" stroke="#20BB96" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default function User() {
    const { userId } = useParams<string>();
    const [user, setUser] = useState<UserType | null>();
    const [isContactSelected, setContactSelected] = useState<boolean>(false);
    const [isCurrentAddressSelected, setCurrentAddressSelected] = useState<boolean>(false);
    const [isPermanentAddressSelected, setPermanentAddressSelected] = useState<boolean>(false);
    const [isOthersSelected, setOthersSelected] = useState<boolean>(false);

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
        <div className="m-3 rounded-b-lg">
            <div className="flex">
                <p className="px-2 py-2 pt-0 pb-0 m-1 bg-[#E1FFF8] text-[#20BB96] rounded-md">{user?.userType === 'teacher' ? 'ফুজালা' : 'আবনা'}</p>
                <p className="px-2 py-2 pt-0 pb-0 m-1 bg-[#E1FFF8] text-[#20BB96] rounded-md">{user?.passingYear}</p>
            </div>
            <p className="mt-2">{user?.name}</p>
            <p className="mt-2 text-sm"> রক্তের গ্রুপ: এ+ </p>

            {/* Contact */}
            <button
                className="w-full mt-4 mb-4 flex justify-between"
                onClick={() => setContactSelected(!isContactSelected)}
            >
                <p className="font-medium" style={{ fontFamily: 'Hind Siliguri' }}>যোগাযোগ</p>
                <div className="pt-3">
                    {isContactSelected ? <UpperIcon /> : <LowerIcon />}
                </div>
            </button>
            {
                isContactSelected &&
                (<div className="mx-2 mt-2 text-sm">
                    <p> মোবাইল: {user?.phone}</p>
                </div>)
            }

            {/* current address */}
            <button
                className="w-full mt-4 mb-4 flex justify-between"
                onClick={() => setCurrentAddressSelected(!isCurrentAddressSelected)}
            >
                <p className="font-medium" style={{ fontFamily: 'Hind Siliguri' }}>বর্তমান ঠিকানা</p>
                <div className="pt-3">
                    {isCurrentAddressSelected ? <UpperIcon /> : <LowerIcon />}
                </div>
            </button>
            {
                isCurrentAddressSelected &&
                (<div className="mx-2 mt-2 text-sm">
                    <p> গ্রাম: {user?.currentAddress.village} </p>
                    <p> পোস্ট: {user?.currentAddress.post} </p>
                    <p> উপজেলা: {user?.currentAddress.upzilla.bn_name} </p>
                    <p> জেলা: {user?.currentAddress.district.bn_name}</p>
                </div>)
            }

            {/* Permanent address */}
            <button
                className="w-full mt-4 mb-4 flex justify-between"
                onClick={() => setPermanentAddressSelected(!isPermanentAddressSelected)}
            >
                <p className="font-medium" style={{ fontFamily: 'Hind Siliguri' }}>স্থায়ী ঠিকানা</p>
                <div className="pt-3">
                    {isPermanentAddressSelected ? <UpperIcon /> : <LowerIcon />}
                </div>
            </button>
            {
                isPermanentAddressSelected &&
                (<div className="mx-2 mt-2 text-sm">
                    <p> গ্রাম: {user?.permanentAddress.village} </p>
                    <p> পোস্ট: {user?.permanentAddress.post} </p>
                    <p> উপজেলা: {user?.permanentAddress.upzilla.bn_name} </p>
                    <p> জেলা: {user?.permanentAddress.district.bn_name}</p>
                </div>)
            }

            {/* Others */}
            <button
                className="w-full mt-4 mb-4 flex justify-between"
                onClick={() => setOthersSelected(!isOthersSelected)}
            >
                <p className="font-medium" style={{ fontFamily: 'Hind Siliguri' }}>অন্যান্য</p>
                <div className="pt-3">
                    {isOthersSelected ? <UpperIcon /> : <LowerIcon />}
                </div>
            </button>
            {
                isOthersSelected &&
                (<div className="mx-2 mt-2 text-sm">
                    <p > পিতার নাম: {user?.fathersName}</p>
                </div>)
            }
        </div >
    )
}