import { FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI } from "../apis/login";
import { LoginCredentials, LoginResponse } from "../types/auth";
import { tryCatch } from "../utils/trycatch";
import { Loader } from "./Loader";

export default function Login() {
    const [auth, setAuth] = useState<LoginCredentials>();
    const navigate = useNavigate();
    const [authError, setAuthError] = useState<{ flag: boolean, details: string[] }>({ flag: false, details: [] });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setLoading(true);
        const data = await tryCatch(LoginAPI, auth) as LoginResponse;

        if (data.code === 200) {
            localStorage.setItem('auth', JSON.stringify({ token: data.data.token }));
            navigate('/general', { replace: true });
        }
        else {
            setLoading(false);
            setAuthError({ flag: true, details: [data.error || data.message] });
        }
    }
    if (localStorage.getItem('auth')) {
        navigate('/', { replace: true });
    }
    return (
        <div className="m-4">
            <p className="mb-2 text-lg text-center font-bold"> লগ ইন করুন</p>
            <div className="flex justify-center">
                <form className="" action="#" onSubmit={handleSubmit}>
                    <div className="m-2">
                        <label htmlFor="phone" className="w-full text-sm">মোবাইল </label>
                        <input
                            type="phone"
                            name="phone"
                            onChange={(ev) => setAuth({ password: '', ...auth, phone: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            placeholder="01800123456"
                            required={true} />
                    </div>
                    <div className="m-2">
                        <label htmlFor="password" className="w-full text-sm">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(ev) => setAuth({ phone: '', ...auth, password: ev.target.value })}
                            className="w-full border p-1 rounded-lg"
                            placeholder="••••••••"
                            required={true} />
                    </div>
                    {
                        authError.flag && (
                            <div
                                className="text-red-400 text-xs text-center"> {authError.details}
                            </div>
                        )
                    }
                    {loading === true ? <Loader /> :
                        (<div className="m-2 mt-4 bg-[#20BB96] rounded-lg"                    >
                            <button type="submit" className="p-1.5 text-center w-full"                        >
                                লগ ইন
                            </button>
                        </div>)
                    }

                    <div className="flex justify-end">
                        <a href="#" className="text-xs font-medium border-b-[1px] border-[#20BB96]">পাসওয়ার্ড ভুলে গেছেন?</a>
                    </div>
                    <div className="text-sm font-light m-1 w-fit border-b-2 border-[#20BB96]">
                        <Link to="/registration/1" className="font-medium">রেজিস্ট্রেশন করুন</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}