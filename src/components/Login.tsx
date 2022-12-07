import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../apis/login";
import { LoginCredentials, LoginResponse } from "../types/auth";
import { tryCatch } from "../utils/trycatch";

export function Login() {
    const [auth, setAuth] = useState<LoginCredentials>();
    const navigate = useNavigate();
    const [authError, setAuthError] = useState<{ flag: boolean, details: string[] }>({ flag: false, details: [] });

    return (
        <div className="flex h-[60%] justify-center items-center">
            <div className="bg-gray-200 shadow-lg shadow-gray-900/80 border-solid border-2 border-gray-600 rounded-lg">
                <div className="p-2 text-center w-80 h-80 bg-white rounded-lg shadow">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
                        Log in to your account
                    </h1>
                    <form className="space-y-2 m-3" action="#" onSubmit={
                        async (ev) => {
                            ev.preventDefault();

                            const data = await tryCatch(LoginAPI, auth) as LoginResponse;
                            if (data.code === 200) {
                                localStorage.setItem('auth', JSON.stringify({ token: data.data.token }));
                                navigate('/general', { replace: true });
                            }
                            else {
                                setAuthError({ flag: true, details: [data.error || data.message] });
                            }
                        }
                    }>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-90">Your phone</label>
                            <input
                                type="phone"
                                name="phone"
                                id="phone"
                                onChange={(ev) => setAuth({ password: '', ...auth, phone: ev.target.value })}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="01800123456" required={true} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={(ev) => setAuth({ phone: '', ...auth, password: ev.target.value })}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        </div>
                        {
                            authError.flag ? (<div className="text-red-400"> {authError.details} </div>) : (<div></div>)
                        }
                        <button type="submit" className="w-full text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div >
        </div>

    )
}