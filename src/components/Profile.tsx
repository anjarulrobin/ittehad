import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfileApi } from "../apis/getProfile";
import { User as UserType, UserAddress, PersonalInfo, OtherInfo } from "../types/user";

function UpperIcon() {
    return (
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.92 9.05014L10.4 2.53014C9.62996 1.76014 8.36996 1.76014 7.59996 2.53014L1.07996 9.05014" stroke="#20BB96" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function LowerIcon() {
    return (
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.92 1.9502L10.4 8.4702C9.62996 9.2402 8.36996 9.2402 7.59996 8.4702L1.07996 1.9502" stroke="#20BB96" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function EditIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#20BB96" className="w-5 h-5">
            <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
        </svg>
    )
}

function CancelIcon() {
    return (
        <div className="bg-[#E1FFF8]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
        </div>
    )
}

function SaveIcon() {
    return (
        <div className="bg-[#E1FFF8]">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22" fill="#20BB96" className="w-6 h-6">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
        </div>
    )
}

enum ViewOrEdit {
    none = '',
    view = 'view',
    edit = 'edit'
}

export default function Profile() {
    const [user, setUser] = useState<UserType | null>();
    const [parentOtherInfo, setParentOtherInfo] = useState<OtherInfo>({ fathersName: user?.fathersName || 'abc' });
    const [userClicked, setUserClicked] = useState<'PERSONAL_INFO' | 'CURRENT_ADDR' | 'PERMANENT_ADDR' | 'OTHERS' | ''>('');

    const nav = useNavigate();
    useEffect(() => {
        getProfileApi()
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
            <div className="flex justify-center">
                <div className="relative" >
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="#EEFAFD" />
                        <path d="M40 30C37.38 30 35.25 32.13 35.25 34.75C35.25 37.32 37.26 39.4 39.88 39.49C39.96 39.48 40.04 39.48 40.1 39.49C40.12 39.49 40.13 39.49 40.15 39.49C40.16 39.49 40.16 39.49 40.17 39.49C42.73 39.4 44.74 37.32 44.75 34.75C44.75 32.13 42.62 30 40 30Z" fill="#174C5A" />
                        <path d="M45.08 42.1499C42.29 40.2899 37.74 40.2899 34.93 42.1499C33.66 42.9999 32.96 44.1499 32.96 45.3799C32.96 46.6099 33.66 47.7499 34.92 48.5899C36.32 49.5299 38.16 49.9999 40 49.9999C41.84 49.9999 43.68 49.5299 45.08 48.5899C46.34 47.7399 47.04 46.5999 47.04 45.3599C47.03 44.1299 46.34 42.9899 45.08 42.1499Z" fill="#174C5A" />
                    </svg>
                    <button onClick={() => alert('This feature is not available')}>
                        <svg className="absolute top-1 left-1 w-20 h-20">
                            <circle cx="62" cy="62" r="18" fill="#20BB96" />
                            <path d="M69.5 70.3335H54.5C54.1583 70.3335 53.875 70.0502 53.875 69.7085C53.875 69.3668 54.1583 69.0835 54.5 69.0835H69.5C69.8417 69.0835 70.125 69.3668 70.125 69.7085C70.125 70.0502 69.8417 70.3335 69.5 70.3335Z" fill="white" />
                            <path d="M67.85 54.9C66.2333 53.2834 64.65 53.2417 62.9917 54.9L61.9833 55.9084C61.9 55.9917 61.8667 56.125 61.9 56.2417C62.5333 58.45 64.3 60.2167 66.5083 60.85C66.5417 60.8584 66.575 60.8667 66.6083 60.8667C66.7 60.8667 66.7833 60.8334 66.85 60.7667L67.85 59.7584C68.675 58.9417 69.075 58.15 69.075 57.35C69.0833 56.525 68.6833 55.725 67.85 54.9Z" fill="white" />
                            <path d="M65.0083 61.6082C64.7667 61.4915 64.5333 61.3748 64.3083 61.2415C64.125 61.1332 63.95 61.0165 63.775 60.8915C63.6333 60.7998 63.4667 60.6665 63.3083 60.5332C63.2917 60.5248 63.2333 60.4748 63.1667 60.4082C62.8917 60.1748 62.5833 59.8748 62.3083 59.5415C62.2833 59.5248 62.2417 59.4665 62.1833 59.3915C62.1 59.2915 61.9583 59.1248 61.8333 58.9332C61.7333 58.8082 61.6167 58.6248 61.5083 58.4415C61.375 58.2165 61.2583 57.9915 61.1417 57.7582C60.9887 57.4304 60.5585 57.333 60.3027 57.5888L55.6167 62.2748C55.5083 62.3832 55.4083 62.5915 55.3833 62.7332L54.9333 65.9248C54.85 66.4915 55.0083 67.0248 55.3583 67.3832C55.6583 67.6748 56.075 67.8332 56.525 67.8332C56.625 67.8332 56.725 67.8248 56.825 67.8082L60.025 67.3582C60.175 67.3332 60.3833 67.2332 60.4833 67.1248L65.1771 62.4311C65.4278 62.1804 65.3336 61.7491 65.0083 61.6082Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-col  mt-1 mb-1">
                <p className="text-center font-ittehad-subtitle font-ittehad-kalpurush items-center">{user?.name}</p>
                <div className="flex justify-center">
                    <p className="w-fit px-2 py-2 pt-0 pb-0 m-1 bg-[#E1FFF8] text-[#20BB96] rounded-md">{user?.userType === 'teacher' ? 'ফুজালা' : 'আবনা'}</p>
                    <p className="w-fit px-2 py-2 pt-0 pb-0 m-1 bg-[#E1FFF8] text-[#20BB96] rounded-md">{user?.passingYear}</p>
                </div>
            </div>

            <button className="w-full mt-4 mb-4 flex justify-between"
                onClick={() => setUserClicked(userClicked === 'PERSONAL_INFO' ? '' : 'PERSONAL_INFO')}
            >
                <p className="font-medium">ব্যক্তিগত তথ্য</p>
                <div className="pt-3">
                    {userClicked === 'PERSONAL_INFO' ? <UpperIcon /> : <LowerIcon />}
                </div>
            </button>
            {
                userClicked === 'PERSONAL_INFO' && <PersonalInfoComponent bloodGroup="এ+" phone={user?.phone || ''} />
            }


            {/* current address */}
            <button
                className="w-full mt-4 mb-4 flex justify-between"
                onClick={() => setUserClicked(userClicked === 'CURRENT_ADDR' ? '' : 'CURRENT_ADDR')}

            >
                <p className="font-medium">বর্তমান ঠিকানা</p>
                <div className="pt-3">
                    {userClicked === 'CURRENT_ADDR' ? <UpperIcon /> : <LowerIcon />}
                </div>
            </button>
            {
                userClicked === 'CURRENT_ADDR' && (
                    <AddressComponent
                        district={user?.currentAddress.district || { id: '', name: '' }}
                        upzilla={user?.currentAddress.upzilla || { id: '', name: '' }}
                        post={user?.currentAddress.post || ''}
                        village={user?.currentAddress.village || ''}
                    />)
            }

            {/* Permanent address */}
            <button
                className="w-full mt-4 mb-4 flex justify-between"
                onClick={() => setUserClicked(userClicked === 'PERMANENT_ADDR' ? '' : 'PERMANENT_ADDR')}

            >
                <p className="font-medium">স্থায়ী ঠিকানা</p>
                <div className="pt-3">
                    {userClicked === 'PERMANENT_ADDR' ? <UpperIcon /> : <LowerIcon />}
                </div>
            </button>
            {
                userClicked === 'PERMANENT_ADDR' && (
                    <AddressComponent
                        district={user?.permanentAddress.district || { id: '', name: '' }}
                        upzilla={user?.permanentAddress.upzilla || { id: '', name: '' }}
                        post={user?.permanentAddress.post || ''}
                        village={user?.permanentAddress.village || ''}
                    />)
            }

            {/* Others */}
            <button
                className="w-full mt-4 mb-4 flex justify-between"
                onClick={() => setUserClicked('OTHERS')}
            >
                <p className="font-medium" >অন্যান্য</p>
                <div className="pt-3">
                    {userClicked === 'OTHERS' ? <UpperIcon /> : <LowerIcon />}
                </div>
            </button>
            {
                userClicked === 'OTHERS' && (
                    <OtherInfoComponent key={user?.id} fathersName={parentOtherInfo?.fathersName || user?.fathersName || ''} setParentOtherInfo={setParentOtherInfo} />
                )
            }
            <button
                className="mt-2"
                onClick={() => {
                    localStorage.clear();
                    nav("/login");
                }}
            >
                <div className="flex justify-start">
                    <svg className="mt-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z" fill="#20BB96" />
                        <path d="M4.56 11.2498L6.63 9.17984C6.78 9.02984 6.85 8.83984 6.85 8.64984C6.85 8.45984 6.78 8.25984 6.63 8.11984C6.34 7.82984 5.86 7.82984 5.57 8.11984L2.22 11.4698C1.93 11.7598 1.93 12.2398 2.22 12.5298L5.57 15.8798C5.86 16.1698 6.34 16.1698 6.63 15.8798C6.92 15.5898 6.92 15.1098 6.63 14.8198L4.56 12.7498H9V11.2498H4.56Z" fill="#20BB96" />
                    </svg>
                    <p className="m-2"> লগ আউট</p>
                </div>
            </button>

        </div >
    )
}

function PersonalInfoComponent(props: PersonalInfo) {
    const [mode, setMode] = useState<ViewOrEdit>(ViewOrEdit.view);

    return (
        <div>
            {
                mode === ViewOrEdit.view ?
                    (
                        <div className="mx-2 mt-2 text-sm flex items-start justify-between">
                            <div >
                                <p className="mt-1 p-1"> মোবাইল: {props?.phone}</p>
                                <p className="mt-1 p-1 text-sm"> রক্তের গ্রুপ: {props.bloodGroup}</p>
                            </div>
                            <button
                                className="mx-2"
                                onClick={() => setMode(ViewOrEdit.edit)}
                            >
                                <EditIcon />
                            </button>
                        </div>) :
                    mode === ViewOrEdit.edit && (
                        (<div className="mx-2 mt-2 text-sm">
                            <div className="flex justify-end">
                                <div className="w-14 justify-between flex m-1">
                                    <button
                                        className="mx-2"
                                        onClick={() => setMode(ViewOrEdit.view)}
                                    >
                                        <CancelIcon />
                                    </button>
                                    <button
                                        className="mx-2"
                                        onClick={() => setMode(ViewOrEdit.view)}
                                    >
                                        <SaveIcon />
                                    </button>
                                </div>
                            </div>

                            <form
                                action="#"
                                onSubmit={() => alert('Submitted')}
                            >
                                <div className="m-2 flex">
                                    <label className="w-fit m-1 p-1.5">
                                        রক্তের গ্রুপ:
                                    </label>
                                    <select name="রক্তের গ্রুপ"
                                        className="border border-[#20BB96] w-fit rounded-lg m-1 p-1.5 "
                                    >
                                        {
                                            ['A+', 'B+', 'O+', 'A-', 'B-', 'O-', 'AB+', 'AB-']
                                                .map((bGroup) => (
                                                    <option
                                                        selected={props.bloodGroup === bGroup}
                                                        value={bGroup}
                                                        key={bGroup}
                                                    >
                                                        {bGroup}
                                                    </option>
                                                ))
                                        }

                                    </select>
                                </div>
                            </form>
                        </div>)
                    )
            }

        </div>
    )
}

function AddressComponent(props: UserAddress) {
    const [addrInfo, setAddrInfo] = useState<UserAddress>(props);
    const [mode, setMode] = useState<ViewOrEdit>(ViewOrEdit.view);

    return (
        <div>
            {
                mode === ViewOrEdit.view ?
                    (<div className="mx-2 mt-2 text-sm flex items-start justify-between">
                        <div>
                            <p> গ্রাম: {props.village} </p>
                            <p> পোস্ট: {props.post} </p>
                            <p> উপজেলা: {props.upzilla.bn_name} </p>
                            <p> জেলা: {props.district.bn_name}</p>
                        </div>
                        <button
                            className="mx-2"
                            onClick={() => setMode(ViewOrEdit.edit)}
                        >
                            <EditIcon />
                        </button>
                    </div>) :
                    mode === ViewOrEdit.edit &&
                    (<div className="mx-2 mt-2">
                        <div className="flex justify-end">
                            <div className="w-14 justify-between flex m-1">
                                <button
                                    className="mx-2"
                                    onClick={() => setMode(ViewOrEdit.view)}
                                >
                                    <CancelIcon />
                                </button>
                                <button
                                    className="mx-2"
                                    onClick={() => setMode(ViewOrEdit.view)}
                                >
                                    <SaveIcon />
                                </button>
                            </div>
                        </div>

                        <form
                            action="#"
                            onSubmit={() => alert('Submitted')}
                        >
                            <div className="m-2 flex">
                                <label className="w-16 m-1 p-1.5 text-start items-center">
                                    গ্রাম:
                                </label>
                                <input type={'text'} name="গ্রাম" value={props.village}
                                    className="border border-[#20BB96] rounded-lg m-2 p-1.5 text-center items-center"
                                />
                            </div>
                            <div className="m-2 flex">
                                <label className="w-16 m-1 p-1.5 text-start items-center">
                                    পোস্ট:
                                </label>
                                <input type={'text'} name="পোস্ট" value={props.post}
                                    className="border border-[#20BB96] rounded-lg m-2 p-1.5 text-center items-center"
                                />
                            </div>
                            <div className="m-2 flex">
                                <label className="w-16 m-1 p-1.5 text-start items-center">
                                    উপজেলা:
                                </label>
                                <select name="উপজেলা"
                                    className="border border-[#20BB96] w-fit rounded-lg m-2 p-1.5 text-center items-center"
                                >
                                    <option selected={true} value={props.upzilla.bn_name}>{props.upzilla.bn_name}</option>
                                    <option value="শরীয়তপুর">শরীয়তপুর</option>
                                    <option value="গাজীপুর">গাজীপুর</option>
                                    <option value="নরসিংদী">নরসিংদী</option>
                                    <option value="নারায়ণগঞ্জ">নারায়ণগঞ্জ</option>
                                    <option value="টাঙ্গাইল">টাঙ্গাইল</option>
                                </select>
                            </div>
                            <div className="m-2 flex">
                                <label className="w-16 m-1 p-1.5 text-start items-center">
                                    জেলা:
                                </label>
                                <select name="জেলা"
                                    className="border border-[#20BB96] w-fit rounded-lg m-2 p-1.5 text-center items-center"
                                >
                                    <option selected={true} value={"নারায়নগঞ্জ সদর"}>নারায়নগঞ্জ সদর</option>
                                    <option value="আড়াইহাজার উপজেলা">আড়াইহাজার উপজেলা</option>
                                    <option value="বন্দর উপজেলা">বন্দর উপজেলা</option>
                                    <option value="নারায়নগঞ্জ সদর">নারায়নগঞ্জ সদর</option>
                                    <option value="রূপগঞ্জ উপজেলা">রূপগঞ্জ উপজেলা</option>
                                    <option value="সোনারগাঁ উপজেলা">সোনারগাঁ উপজেলা</option>
                                </select>
                            </div>
                        </form>
                    </div>)
            }
        </div>
    )
}

type OtherInfoProps = OtherInfo & { setParentOtherInfo: React.Dispatch<React.SetStateAction<OtherInfo>> }

function OtherInfoComponent(props: OtherInfoProps) {
    const [mode, setMode] = useState<ViewOrEdit>(ViewOrEdit.view);
    const [otherInfo, setOtherInfo] = useState<OtherInfo>(props);

    return (
        <div>
            {
                mode === ViewOrEdit.view ?
                    (<div className="mx-2 mt-2 text-sm flex justify-between">
                        <p > পিতার নাম: {otherInfo.fathersName}</p>
                        <button
                            className="mx-2"
                            onClick={() => setMode(ViewOrEdit.edit)}
                        >
                            <EditIcon />
                        </button>
                    </div>) :
                    mode === ViewOrEdit.edit && (
                        <div className="mx-2 mt-2 text-sm">
                            <div className="flex justify-end">
                                <div className="w-14 justify-between flex m-1">
                                    <button
                                        className="mx-2"
                                        onClick={() => setMode(ViewOrEdit.view)}
                                    >
                                        <CancelIcon />
                                    </button>
                                    <button
                                        className="mx-2"
                                        onClick={() => setMode(ViewOrEdit.view)}
                                    >
                                        <SaveIcon />
                                    </button>
                                </div>
                            </div>

                            <form
                                action="#"
                                onSubmit={(ev) => {
                                    ev.preventDefault();
                                    props.setParentOtherInfo(otherInfo)
                                }}
                            >
                                <div className="m-2 flex">
                                    <label className="w-fit m-1 p-1.5">
                                        পিতার নাম:
                                    </label>
                                    <input
                                        name="পিতার নাম"
                                        className="border border-[#20BB96] w-fit rounded-lg m-1 p-1.5"
                                        value={otherInfo.fathersName}
                                        type={'text'}

                                        onChange={(ev) => setOtherInfo({ fathersName: ev.target.value })}
                                    />
                                </div>
                            </form>
                        </div>
                    )
            }
        </div>
    )
}