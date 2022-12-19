import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMessagesApi } from "../apis/getMessages";
import { getProfileApi } from "../apis/getProfile";
import { Loader } from "./Loader";
import { getBanglaDate } from "./utils/getBanglaDate";

interface Message {
    id: string;
    text: string;
    sender: {
        id: string;
        name: string;
        passingYear: number;
        userType: string;//'teacher' | 'student'
    },
    createdAt: string;
    totalComment: number;
}

export default function Discussion() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [copyMessageId, setCopyMessageId] = useState('');
    const [skip, setSkip] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const LIMIT = 10;

    useEffect(() => {
        setLoading(true);
        getMessagesApi({ limit: LIMIT, skip })
            .then((messages) => {
                if (messages.code === 200) {
                    for (const message of messages.data) {
                        message.id = message._id;
                    }
                    setMessages(messages.data);
                }
                else {
                    setMessages([]);
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [skip]);

    return (
        <div className="m-2 p-2 rounded-lg">
            <div
                className="mb-2"
            >
                <Link className="m-2 mb-3 flex justify-between border-b-2 border-[#20BB96]"
                    to="/discussion/create"
                >
                    <p className="mr-2 text-center text-gray-400">লিখব যা বলতে চাই ...</p>
                    <svg className="w-6 h-6  text-[#20BB96]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </Link>
            </div>
            {
                messages.map((message) => (
                    <div className="m-2"
                        key={message.id}
                    >
                        <div className="border rounded-t-lg p-2">
                            <div className="flex">
                                <div>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="18" fill="#EEFAFD" />
                                        <path d="M18 8C15.38 8 13.25 10.13 13.25 12.75C13.25 15.32 15.26 17.4 17.88 17.49C17.96 17.48 18.04 17.48 18.1 17.49C18.12 17.49 18.13 17.49 18.15 17.49C18.16 17.49 18.16 17.49 18.17 17.49C20.73 17.4 22.74 15.32 22.75 12.75C22.75 10.13 20.62 8 18 8Z" fill="#6299A9" />
                                        <path d="M23.08 20.1499C20.29 18.2899 15.74 18.2899 12.93 20.1499C11.66 20.9999 10.96 22.1499 10.96 23.3799C10.96 24.6099 11.66 25.7499 12.92 26.5899C14.32 27.5299 16.16 27.9999 18 27.9999C19.84 27.9999 21.68 27.5299 23.08 26.5899C24.34 25.7399 25.04 24.5999 25.04 23.3599C25.03 22.1299 24.34 20.9899 23.08 20.1499Z" fill="#6299A9" />
                                    </svg>
                                </div>

                                <div className="flex-col mx-3">
                                    <p className="bg-[#E1FFF8] text-[#20BB96] text-xs mb-1"> {message.sender.userType === 'teacher' ? 'ফুজালা' : 'আবনা'}</p>
                                    <p className="bg-[#E1FFF8] text-[#20BB96] text-xs"> {message.sender.passingYear}</p>
                                </div>
                                <div className="mx-2">
                                    <p className="text-sm"> {message.sender.name}</p>
                                    <p className="text-xs"> {getBanglaDate(new Date(message.createdAt))}</p>
                                </div>
                            </div>
                            <p className="text-sm font-serif mt-4">
                                {message.text}
                            </p>

                            <div className="flex justify-end text-sm">
                                {copyMessageId === message.id && (<p className="m-2">Text Copied!</p>)}

                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(message.text);
                                        setCopyMessageId(message.id);
                                        setTimeout(() => {
                                            setCopyMessageId('');
                                        }, 1000);
                                    }}
                                    className="m-2 text-[#20BB96] flex"
                                >
                                    <p> Copy </p>
                                </button>
                                <p className="m-2">
                                    {`${message.totalComment} মন্তব্য`}
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex justify-end border"
                        >
                            <Link
                                to={`/discussion/${message.id}/comments`}
                                className="flex m-1"
                            >
                                <svg
                                    width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 19.0087C9.425 19.0087 8.88333 18.717 8.5 18.2087L7.25 16.542C7.225 16.5087 7.125 16.467 7.08333 16.4587H6.66667C3.19167 16.4587 1.04167 15.517 1.04167 10.8337V6.66699C1.04167 2.98366 2.98333 1.04199 6.66667 1.04199H13.3333C17.0167 1.04199 18.9583 2.98366 18.9583 6.66699V10.8337C18.9583 14.517 17.0167 16.4587 13.3333 16.4587H12.9167C12.85 16.4587 12.7917 16.492 12.75 16.542L11.5 18.2087C11.1167 18.717 10.575 19.0087 10 19.0087ZM6.66667 2.29199C3.68333 2.29199 2.29167 3.68366 2.29167 6.66699V10.8337C2.29167 14.6003 3.58333 15.2087 6.66667 15.2087H7.08333C7.50833 15.2087 7.99167 15.4503 8.25 15.792L9.5 17.4587C9.79167 17.842 10.2083 17.842 10.5 17.4587L11.75 15.792C12.025 15.4253 12.4583 15.2087 12.9167 15.2087H13.3333C16.3167 15.2087 17.7083 13.817 17.7083 10.8337V6.66699C17.7083 3.68366 16.3167 2.29199 13.3333 2.29199H6.66667Z" fill="#174C5A" />
                                    <path d="M14.1667 7.29199H5.83334C5.49167 7.29199 5.20834 7.00866 5.20834 6.66699C5.20834 6.32533 5.49167 6.04199 5.83334 6.04199H14.1667C14.5083 6.04199 14.7917 6.32533 14.7917 6.66699C14.7917 7.00866 14.5083 7.29199 14.1667 7.29199Z" fill="#174C5A" />
                                    <path d="M10.8333 11.458H5.83334C5.49167 11.458 5.20834 11.1747 5.20834 10.833C5.20834 10.4913 5.49167 10.208 5.83334 10.208H10.8333C11.175 10.208 11.4583 10.4913 11.4583 10.833C11.4583 11.1747 11.175 11.458 10.8333 11.458Z" fill="#174C5A" />
                                </svg>
                                <p className="mx-2 text-sm">মন্তব্য করুন</p>
                            </Link>
                        </div>
                    </div>
                ))}

            {
                loading === true ?
                    <Loader /> :
                    (<div
                        className="m-2 mt-4 bg-[#20BB96] rounded-lg"
                        onClick={() => setSkip(skip + LIMIT)}
                    >
                        <button
                            className="p-1.5 text-center w-full"                        >
                            Show More
                        </button>
                    </div>)
            }
        </div >
    )
}