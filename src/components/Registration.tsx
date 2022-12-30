import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDistrictsApi } from "../apis/getDistricts";
import { getDivisionsApi } from "../apis/getDivisions";
import { getUpzillasApi } from "../apis/getUpzillas";
import { RegisterAPI } from "../apis/register";
import { VerifyRegistrationOtpAPI } from "../apis/verifyRegistrationOtp";
import { Division, Upzilla } from "../types/address";
import { Loader } from "./Loader";
import { getYearList } from "./utils/YearList";

function getStepSvg(type: 'complete' | 'incomplete' = 'incomplete') {
    return (
        type === 'incomplete' ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7" fill="white" stroke="#1AB759" strokeWidth="2" />
            </svg>

        ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7" fill="#1AB759" stroke="#1AB759" strokeWidth="2" />
                <path d="M4 7.66353L6.66353 10.3271L12 5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    )
}

const steps = ['ধাপ ১', 'ধাপ ২', 'ধাপ ৩', 'ধাপ ৪', 'ধাপ ৫'];

export default function Registration() {
    const { page } = useParams();
    const navigate = useNavigate();

    return (
        <div className="m-2">
            {/* on step: {page} */}
            {
                <div className="flex justify-center">
                    {
                        steps.map((step, index) => (
                            <div
                                className="flex items-center"
                                key={step}
                            >
                                {getStepSvg(index + 1 < Number(page) ? 'complete' : 'incomplete')}
                                <div>
                                    {
                                        index !== steps.length - 1 &&
                                        <svg width="58" height="1" viewBox="0 0 58 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="58" y2="0.5" stroke={index + 1 >= Number(page) ? "#E6EBED" : "#1AB759"} />
                                        </svg>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            {
                page === "1" &&
                <FirstStep
                    key="1"
                    goForward={() => navigate('/registration/2')}
                    goBackWard={() => navigate('/registration/1')}
                />
            }
            {
                page === "2" &&
                <SecondStep
                    key="2"
                    goForward={() => navigate('/registration/3')}
                    goBackWard={() => navigate('/registration/1')}
                />
            }
            {
                page === "3" &&
                <ThirdStep
                    key="3"
                    goForward={() => navigate('/registration/4')}
                    goBackWard={() => navigate('/registration/2')}
                />
            }
            {
                page === "4" &&
                <FourthStep
                    key="4"
                    goForward={() => navigate('/registration/5')}
                    goBackWard={() => navigate('/registration/3')}
                />
            }
            {
                page === "5" &&
                <FifthStep
                    key="5"
                    goForward={() => navigate('/registration/6')}
                    goBackWard={() => navigate('/registration/4 ')}
                />
            }
            {
                page === "6" &&
                <FinalStep
                    key="6"
                // goForward={() => navigate('/registration/6')}
                // goBackWard={() => navigate('/registration/4 ')}
                />
            }
        </div>
    )
}

interface StepProps {
    goForward: () => void;
    goBackWard: () => void;
}

interface FirstStepData {
    name: string;
    fathersName: string;
    phone: string;
    password: string;
}

function FirstStep(props: StepProps) {
    const firstData = JSON.parse(localStorage.getItem('registration') || '{}');
    const [data, setData] = useState<FirstStepData>({
        name: firstData.name || '',
        fathersName: firstData.fathersName || '',
        phone: firstData.phone || '0',
        password: firstData.password || ''
    });
    const [err, setErr] = useState<string>('');

    return (
        <div className="m-4">
            <p className="m-2 text-xl text-center font-ittehad-title">সঠিকভাবে আপনার তথ্য পূরণ করুন</p>
            <div className="flex justify-center">
                <form
                    className=""
                    action="#"
                    onSubmit={(ev) => {
                        ev.preventDefault();
                        // validation
                        if (data.phone.length !== 11) {
                            setErr('Not a valid Phone number');
                        }
                        else if (data.password.length < 6) {
                            setErr('Too short Password');
                        }
                        else {
                            const registration = JSON.parse(localStorage.getItem('registration') || '{}');
                            localStorage.setItem('registration', JSON.stringify({ ...registration, ...data }));
                            props.goForward();
                        }
                    }}
                >
                    <div className="m-2">
                        <label htmlFor="name" className="w-full text-sm">আপনার নাম </label>
                        <input
                            type="name"
                            name="name"
                            onChange={(ev) => setData({ ...data, name: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            value={data.name}
                            required={true} />
                    </div>
                    <div className="m-2">
                        <label htmlFor="fathersName" className="w-full text-sm"> পিতার নাম </label>
                        <input
                            type="fathersName"
                            name="fathersName"
                            onChange={(ev) => setData({ ...data, fathersName: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            value={data.fathersName}
                            required={true} />
                    </div>
                    <div className="m-2">
                        <label htmlFor="phone" className="w-full text-sm">মোবাইল</label>
                        <input
                            type="phone"
                            name="phone"
                            onChange={(ev) => setData({ ...data, phone: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            value={data.phone}
                            required={true} />
                    </div>
                    <div className="m-2">
                        <label htmlFor="password" className="w-full text-sm">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(ev) => setData({ ...data, password: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            value={data.password || ''}
                            required={true} />
                    </div>

                    {
                        err && (
                            <div
                                className="text-red-400 text-sm text-center"> {err}
                            </div>
                        )
                    }
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                        >
                            <div className="flex items-center justify-between">
                                পরবর্তী ধাপে যান
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

interface IdName {
    id: string;
    name: string;
    bn_name: string;
}

interface SecondStepData {
    village: string;
    post: string;
    upzilla: IdName;
    district: IdName;
    division: IdName;
}

const defaultValue: Division = {
    id: '',
    name: '------',
    bn_name: '------'
}

function SecondStep(props: StepProps) {
    const secondData = JSON.parse(localStorage.getItem('registration') || '{}');
    const [data, setData] = useState<SecondStepData>({
        village: '',
        post: '',
        upzilla: defaultValue,
        district: defaultValue,
        division: defaultValue,
        ...secondData.permanentAddress
    });

    const [divisions, setDivisions] = useState<Division[]>([]);
    const [districts, setDistricts] = useState<Division[]>([]);
    const [upzillas, setUpzillas] = useState<Upzilla[]>([]);

    useEffect(() => {
        if (!divisions.length) {
            getDivisionsApi()
                .then((divisionData) => {
                    if (divisionData.code === 200) {
                        setDivisions(divisionData.data);
                    }
                })
                .catch((err) => console.error(err))
        }
        else if (!districts.length) {
            getDistrictsApi(data.division.id)
                .then((districtData) => {
                    if (districtData.code === 200) {
                        setDistricts(districtData.data);
                    }
                })
                .catch((err) => console.error(err))
        }
        else if (!upzillas.length) {
            getUpzillasApi(data.district.id)
                .then((upzillaData) => {
                    if (upzillaData.code === 200) {
                        setUpzillas(upzillaData.data);
                    }
                })
                .catch((err) => console.error(err))
        }
    },
        [data.district, data.division])

    const [err, setErr] = useState<string>('');

    return (
        <div className="m-4">
            <p className="m-2 text-xl text-center font-ittehad-title">আপনার স্থায়ী ঠিকানা</p>
            <div className="flex justify-center">
                <form
                    className=""
                    action="#"
                    onSubmit={(ev) => {
                        ev.preventDefault();
                        const registration = JSON.parse(localStorage.getItem('registration') || '{}');
                        localStorage.setItem('registration', JSON.stringify({ ...registration, permanentAddress: data }));
                        props.goForward();
                    }}
                >
                    <div className="m-2">
                        <label htmlFor="village" className="w-full text-sm">গ্রাম </label>
                        <input
                            type="village"
                            name="village"
                            onChange={(ev) => setData({ ...data, village: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            value={data.village}
                            required={true} />
                    </div>
                    <div className="m-2">
                        <label htmlFor="post" className="w-full text-sm"> ডাকঘর </label>
                        <input
                            type="post"
                            name="post"
                            onChange={(ev) => setData({ ...data, post: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            value={data.post}
                            required={true} />
                    </div>
                    <div className="m-2">
                        <label className="w-16 m-1 p-1.5 text-start items-center">
                            বিভাগ:
                        </label>
                        <select
                            name="division"
                            className="border border-[#20BB96] rounded-lg m-2 p-1.5 text-center items-center"
                            onChange={(ev) => setData({
                                ...data,
                                division: JSON.parse(ev.target.value),
                                district: { id: '', bn_name: '', name: '' },
                                upzilla: { id: '', bn_name: '', name: '' }
                            })}
                        >
                            <option defaultValue={JSON.stringify(data.division || defaultValue)}>{(data.division || defaultValue).bn_name}</option>
                            {
                                divisions.map((division) => (
                                    <option
                                        value={JSON.stringify(division)}
                                        key={division.id}
                                    >
                                        {division.bn_name || division.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="m-2">
                        <label className="w-16 m-1 p-1.5 text-start items-center">
                            জেলা:
                        </label>
                        <select name="district"
                            className="border border-[#20BB96] rounded-lg m-2 p-1.5 text-center items-center"
                            onChange={(ev) => setData({
                                ...data,
                                district: JSON.parse(ev.target.value),
                                upzilla: defaultValue
                            })}
                        >
                            <option defaultValue={JSON.stringify(data.district || defaultValue)}>{(data.district || defaultValue).bn_name}</option>
                            {
                                districts.map((district) => (
                                    <option
                                        value={JSON.stringify(district)}
                                        key={district.id}
                                    >
                                        {district.bn_name || district.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="m-2">
                        <label className="w-16 m-1 p-1.5 text-start items-center">
                            উপজেলা:
                        </label>
                        <select name="upzilla"
                            className="border border-[#20BB96] rounded-lg m-2 p-1.5 text-center items-center"
                            onChange={(ev) => setData({ ...data, upzilla: JSON.parse(ev.target.value) })}
                        >
                            <option defaultValue={JSON.stringify(data.upzilla || defaultValue)}>{(data.upzilla || defaultValue).bn_name}</option>
                            {
                                upzillas.map((upzilla) => (
                                    <option
                                        value={JSON.stringify(upzilla)}
                                        key={upzilla.id}
                                    >
                                        {upzilla.bn_name || upzilla.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    {
                        err && (
                            <div
                                className="text-red-400 text-sm text-center"> {err}
                            </div>
                        )
                    }
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                            onClick={() => props.goBackWard()}
                        >
                            <div className="flex items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                                </svg>
                                <p>পূর্ববর্তী ধাপে যান</p>
                            </div>
                        </button>
                        <button
                            type="submit"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                        >
                            <div className="flex items-center justify-between">
                                পরবর্তী ধাপে যান
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}


function ThirdStep(props: StepProps) {
    const thirdData = JSON.parse(localStorage.getItem('registration') || '{}');
    const [data, setData] = useState<SecondStepData>({
        village: '',
        post: '',
        upzilla: defaultValue,
        district: defaultValue,
        division: defaultValue,
        ...thirdData.currentAddress
    });

    const [divisions, setDivisions] = useState<Division[]>([]);
    const [districts, setDistricts] = useState<Division[]>([]);
    const [upzillas, setUpzillas] = useState<Upzilla[]>([]);

    useEffect(() => {
        if (!divisions.length) {
            getDivisionsApi()
                .then((divisionData) => {
                    if (divisionData.code === 200) {
                        setDivisions(divisionData.data);
                    }
                })
                .catch((err) => console.error(err))
        }
        else if (!districts.length) {
            getDistrictsApi(data.division.id)
                .then((districtData) => {
                    if (districtData.code === 200) {
                        setDistricts(districtData.data);
                    }
                })
                .catch((err) => console.error(err))
        }
        else if (!upzillas.length) {
            getUpzillasApi(data.district.id)
                .then((upzillaData) => {
                    if (upzillaData.code === 200) {
                        setUpzillas(upzillaData.data);
                    }
                })
                .catch((err) => console.error(err))
        }
    },
        [data.district, data.division])

    const [err, setErr] = useState<string>('');

    return (
        <div className="m-4">
            <p className="m-2 text-xl text-center font-ittehad-title">আপনার বর্তমান ঠিকানা</p>
            <div className="flex justify-center">
                <form
                    className=""
                    action="#"
                    onSubmit={(ev) => {
                        ev.preventDefault();
                        const registration = JSON.parse(localStorage.getItem('registration') || '{}');
                        localStorage.setItem('registration', JSON.stringify({ ...registration, currentAddress: data }));
                        props.goForward();
                    }}
                >
                    <div className="m-2">
                        <label htmlFor="village" className="w-full text-sm">গ্রাম </label>
                        <input
                            type="village"
                            name="village"
                            onChange={(ev) => setData({ ...data, village: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            value={data.village}
                            required={true} />
                    </div>
                    <div className="m-2">
                        <label htmlFor="post" className="w-full text-sm"> ডাকঘর </label>
                        <input
                            type="post"
                            name="post"
                            onChange={(ev) => setData({ ...data, post: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            value={data.post}
                            required={true} />
                    </div>
                    <div className="m-2">
                        <label className="w-16 m-1 p-1.5 text-start items-center">
                            বিভাগ:
                        </label>
                        <select
                            name="division"
                            className="border border-[#20BB96] rounded-lg m-2 p-1.5 text-center items-center"
                            onChange={(ev) => setData({
                                ...data,
                                division: JSON.parse(ev.target.value),
                                district: { id: '', bn_name: '', name: '' },
                                upzilla: { id: '', bn_name: '', name: '' }
                            })}
                        >
                            <option defaultValue={JSON.stringify(data.division || defaultValue)}>{(data.division || defaultValue).bn_name}</option>
                            {
                                divisions.map((division) => (
                                    <option
                                        value={JSON.stringify(division)}
                                        key={division.id}
                                    >
                                        {division.bn_name || division.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="m-2">
                        <label className="w-16 m-1 p-1.5 text-start items-center">
                            জেলা:
                        </label>
                        <select name="district"
                            className="border border-[#20BB96] rounded-lg m-2 p-1.5 text-center items-center"
                            onChange={(ev) => setData({
                                ...data,
                                district: JSON.parse(ev.target.value),
                                upzilla: defaultValue
                            })}
                        >
                            <option defaultValue={JSON.stringify(data.district || defaultValue)}>{(data.district || defaultValue).bn_name}</option>
                            {
                                districts.map((district) => (
                                    <option
                                        value={JSON.stringify(district)}
                                        key={district.id}
                                    >
                                        {district.bn_name || district.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="m-2">
                        <label className="w-16 m-1 p-1.5 text-start items-center">
                            উপজেলা:
                        </label>
                        <select name="upzilla"
                            className="border border-[#20BB96] rounded-lg m-2 p-1.5 text-center items-center"
                            onChange={(ev) => setData({ ...data, upzilla: JSON.parse(ev.target.value) })}
                        >
                            <option defaultValue={JSON.stringify(data.upzilla || defaultValue)}>{(data.upzilla || defaultValue).bn_name}</option>
                            {
                                upzillas.map((upzilla) => (
                                    <option
                                        value={JSON.stringify(upzilla)}
                                        key={upzilla.id}
                                    >
                                        {upzilla.bn_name || upzilla.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    {
                        err && (
                            <div
                                className="text-red-400 text-sm text-center"> {err}
                            </div>
                        )
                    }
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                            onClick={() => props.goBackWard()}
                        >
                            <div className="flex items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                                </svg>
                                <p>পূর্ববর্তী ধাপে যান</p>
                            </div>
                        </button>
                        <button
                            type="submit"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                        >
                            <div className="flex items-center justify-between">
                                পরবর্তী ধাপে যান
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

interface FourthStepData {
    userType: 'teacher' | 'student';
    passingYear: number;
    studiedJamat: string;
    academicDescription: string;
}

function FourthStep(props: StepProps) {
    const thirdData = JSON.parse(localStorage.getItem('registration') || '{}');
    const [data, setData] = useState<FourthStepData>({
        academicDescription: '',
        passingYear: 0,
        studiedJamat: '',
        userType: 'student',
        ...thirdData
    });

    const [err, setErr] = useState<string>('');

    return (
        <div className="m-4">
            <p className="m-2 text-xl text-center font-ittehad-title">আপনার ছাত্রত্বের তথ্য দিন</p>
            <div className="flex justify-center">
                <form
                    className=""
                    action="#"
                    onSubmit={(ev) => {
                        ev.preventDefault();
                        const registration = JSON.parse(localStorage.getItem('registration') || '{}');
                        localStorage.setItem('registration', JSON.stringify({ ...registration, ...data }));
                        props.goForward();
                    }}
                >
                    <div>
                        <label className="w-full text-sm">আপনি কি ফুযালা নাকি আবনা? </label>
                        <div className="m-2 flex justify-between">
                            <div className="flex">
                                <label htmlFor="userType" className="w-full text-sm mx-2">ফুযালা</label>
                                <input
                                    type="radio"
                                    name="userType"
                                    onChange={(ev) => setData({ ...data, userType: ev.target.value === 'ফুযালা' ? 'teacher' : 'student' })}
                                    className="w-full border p-1 rounded-lg"
                                    value="ফুযালা"
                                    checked={true} />
                            </div>
                            <div className="flex">
                                <label htmlFor="userType" className="w-full text-sm mx-2">আবনা</label>
                                <input
                                    type="radio"
                                    name="userType"
                                    onChange={(ev) => setData({ ...data, userType: ev.target.value === 'ফুযালা' ? 'teacher' : 'student' })}
                                    className="w-full border p-1 rounded-lg"
                                    value="ফুযালা"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="w-full text-sm">
                                মাদানীনগর মাদরাসা থেকে ফারাগাতের সন কিংবা আপনার
                                জামাতের সাথীদের ফারাগাতের সন?
                                <select
                                    name="passingYear"
                                    onChange={(ev) => setData({ ...data, passingYear: Number(ev.target.value) })}
                                    className="w-full border p-1 rounded-lg"
                                    value={data.passingYear || ''}
                                    required={true} >
                                    <option defaultValue={data.passingYear || ''}>{data.passingYear || ''}</option>
                                    {
                                        getYearList(1980, 2030).map((year) => (
                                            <option value={year} key={year}                                    >
                                                {year}
                                            </option>
                                        ))
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="academicDescription" className="w-full text-sm mx-2">আপনার অধ্যয়নকালের বিবরণ</label>
                            <input
                                type="text"
                                name="academicDescription"
                                onChange={(ev) => setData({ ...data, academicDescription: ev.target.value })}
                                className="w-full border p-1 rounded-lg"
                                value={data.academicDescription}
                                placeholder="উদাঃ ২০০০-২০১০"
                                required={true}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="studiedJamat" className="w-full text-sm mx-2">কোন কোন জামাতে অধ্যয়ন করেছেন তার বিবরণ</label>
                            <input
                                type="text"
                                name="studiedJamat"
                                onChange={(ev) => setData({ ...data, studiedJamat: ev.target.value })}
                                className="w-full border p-1 rounded-lg"
                                value={data.studiedJamat}
                                required={true}
                            />
                        </div>
                    </div>
                    {
                        err && (
                            <div
                                className="text-red-400 text-sm text-center"> {err}
                            </div>
                        )
                    }
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                            onClick={() => props.goBackWard()}
                        >
                            <div className="flex items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                                </svg>
                                <p>পূর্ববর্তী ধাপে যান</p>
                            </div>
                        </button>
                        <button
                            type="submit"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                        >
                            <div className="flex items-center justify-between">
                                পরবর্তী ধাপে যান
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div >
        </div >

    )
}

interface FifthStepData {
    occupation: string;
    workStation: string;
    designation: string;
    voluntaryTasks: string;
    masjidAddress: string;
}

function FifthStep(props: StepProps) {
    const thirdData = JSON.parse(localStorage.getItem('registration') || '{}');
    const [data, setData] = useState<FifthStepData>({
        occupation: '',
        // workStation: string;
        // designation: string;
        voluntaryTasks: '',
        masjidAddress: '',
        ...thirdData
    });

    const [err, setErr] = useState<string>('');

    return (
        <div className="m-4">
            <p className="m-2 text-xl text-center font-ittehad-title">আপনার পেশাগত তথ্য দিন</p>
            <div className="flex justify-center">
                <form
                    className=""
                    action="#"
                    onSubmit={(ev) => {
                        ev.preventDefault();
                        const registration = JSON.parse(localStorage.getItem('registration') || '{}');
                        localStorage.setItem('registration', JSON.stringify({ ...registration, ...data }));
                        props.goForward();
                    }}
                >
                    <div>
                        <label className="w-full text-sm">তাসনীফী কাজ থাকলে বিবরণ দিন </label>
                        <div className="m-2 flex justify-between">
                            <input
                                type="text"
                                name="voluntaryTasks"
                                onChange={(ev) => setData({ ...data, voluntaryTasks: ev.target.value })}
                                className="w-full border p-1 rounded-lg"
                                value={data.voluntaryTasks}
                            />
                        </div>

                        <label className="w-full text-sm">ইমামতি / খেতাবতের দায়িত্বে থাকলে মসজিদ ও এলাকার বিবরণ দিন</label>
                        <div className="m-2 flex justify-between">
                            <input
                                type="text"
                                name="masjidAddress"
                                onChange={(ev) => setData({ ...data, masjidAddress: ev.target.value })}
                                className="w-full border p-1 rounded-lg"
                                value={data.masjidAddress}
                            />
                        </div>
                    </div>
                    {
                        err && (
                            <div
                                className="text-red-400 text-sm text-center"> {err}
                            </div>
                        )
                    }
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                            onClick={() => props.goBackWard()}
                        >
                            <div className="flex items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                                </svg>
                                <p>পূর্ববর্তী ধাপে যান</p>
                            </div>
                        </button>
                        <button
                            type="submit"
                            className="bg-[#20BB96] w-fit p-1 rounded-lg m-2"
                        >
                            <div className="flex items-center justify-between">
                                নিবন্ধন করুন
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}

function FinalStep() {
    const registration = JSON.parse(localStorage.getItem('registration') || '{}');
    const hasData = Object.keys(registration).length > 0;
    const [isLoading, setLoading] = useState(hasData);
    const [otp, setOtp] = useState('');
    const [status, setStatus] = useState<'SUCCESS' | 'FAILED' | ''>('');
    const [err, setError] = useState('');
    const navigate = useNavigate();
    if (hasData) {
        registration.permanentAddress.upzilla_id = registration.permanentAddress.upzilla.id;
        registration.permanentAddress.district_id = registration.permanentAddress.district.id;
        registration.permanentAddress.division_id = registration.permanentAddress.division.id;

        registration.currentAddress.upzilla_id = registration.currentAddress.upzilla.id;
        registration.currentAddress.district_id = registration.currentAddress.district.id;
        registration.currentAddress.division_id = registration.currentAddress.division.id;


        delete registration.permanentAddress.upzilla;
        delete registration.permanentAddress.district;
        delete registration.permanentAddress.division;

        delete registration.currentAddress.upzilla;
        delete registration.currentAddress.district;
        delete registration.currentAddress.division;
        delete registration.userType;
        if (!registration.occupation) {
            delete registration.occupation;
        }
    }
    useEffect(() => {
        hasData && RegisterAPI(registration)
            .then((resp) => {
                if (resp.code === 200) {
                    setError('');
                }
                else {
                    setError(resp.message);
                    setStatus('FAILED');
                }
            })
            .catch((err) => {
                console.error(err);
                setError(err.message || 'Something went wrong!');
                setStatus('FAILED');
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="mt-4">
            {
                isLoading ?
                    <Loader message="Your data is being submitted..." /> :
                    status === 'SUCCESS' ?
                        <div className="">
                            <div className="w-full flex justify-center">
                                <div className="bg-[#E1FFF8] w-20 h-20 rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#20BB96" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-center w-full mt-2"> Your registration is complete!</p>

                            <div
                                className=" mt-4 flex justify-center"
                            >
                                <button
                                    onClick={() => navigate('/login', { replace: true })}
                                    className="w-fit py-0.5 px-2 bg-[#20BB96] rounded-lg"
                                > Go Home
                                </button>
                            </div>
                        </div > :
                        <div>
                            {
                                status === '' && <form
                                    action="#"
                                    onSubmit={(ev) => {
                                        ev.preventDefault();
                                        setLoading(true);
                                        setError('');
                                        setStatus('');
                                        VerifyRegistrationOtpAPI({ otp, phone: registration.phone })
                                            .then((res) => {
                                                console.log({ res })
                                                if (res.code === 200) {
                                                    setStatus('SUCCESS');
                                                    localStorage.removeItem('registration');
                                                } else {
                                                    setStatus('FAILED');
                                                    setError(res.message);
                                                }
                                            })
                                            .catch((err) => {
                                                setStatus('FAILED');
                                                setError('Something went wrong!' + err);
                                            })
                                            .finally(() => setLoading(false))
                                    }}
                                >
                                    <p> To complete you registration please put the OTP sent to your number within 5 minutes</p>
                                    <div className="mt-2 flex-col">
                                        <label htmlFor="otp" className="">OTP (6 digit):</label>
                                        <input
                                            type="text"
                                            value={otp}
                                            className="w-full text-center mx-2 border p-1 rounded-lg"
                                            onChange={(ev) => setOtp(ev.target.value)}
                                        />
                                        <button
                                            type="submit"
                                            disabled={otp.length !== 6}
                                            className={`${otp.length === 6 ? 'bg-[#20BB96]' : 'bg-gray-200'} w-full p-1 rounded-lg m-2`}
                                        >
                                            Verify
                                        </button>
                                    </div>
                                </form>}
                            {err && <p className="text-center text-red-400">{err}</p>}
                        </div>

            }
        </div>
    )
}