import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMessagesApi } from "../apis/getMessages";
import { getProfileApi } from "../apis/getProfile";

interface Message {
    id: string;
    text: string;
    sender: {
        id: string;
        name: string;
    },
    // replyOf: Types.ObjectId
}

interface GroupInfo {
    id: string;
    name: string;
    // replyOf: Types.ObjectId
}

export default function Discussion() {
    const { groupId } = useParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState<string>('');
    const [group, setGroup] = useState<GroupInfo>();

    useEffect(() => {
        getMessagesApi({ limit: 15, skip: 0, groupId: groupId || '' })
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
            .catch((err) => console.error(err));
    }, []);
    useEffect(() => {
        getProfileApi()
            .then((data) => {
                if (data.code === 200) {
                    setGroup(data.data.groups.find((g: any) => g.id === groupId));
                }
                else {
                    alert('Discussion not found');
                }
            })
            .catch((err) => console.error(err));
    }, [])
    return (
        <div className="m-2 p-2 rounded-lg">
            <div className="flex">
                <div>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#EEFAFD" />
                        <path d="M18 8C15.38 8 13.25 10.13 13.25 12.75C13.25 15.32 15.26 17.4 17.88 17.49C17.96 17.48 18.04 17.48 18.1 17.49C18.12 17.49 18.13 17.49 18.15 17.49C18.16 17.49 18.16 17.49 18.17 17.49C20.73 17.4 22.74 15.32 22.75 12.75C22.75 10.13 20.62 8 18 8Z" fill="#6299A9" />
                        <path d="M23.08 20.1499C20.29 18.2899 15.74 18.2899 12.93 20.1499C11.66 20.9999 10.96 22.1499 10.96 23.3799C10.96 24.6099 11.66 25.7499 12.92 26.5899C14.32 27.5299 16.16 27.9999 18 27.9999C19.84 27.9999 21.68 27.5299 23.08 26.5899C24.34 25.7399 25.04 24.5999 25.04 23.3599C25.03 22.1299 24.34 20.9899 23.08 20.1499Z" fill="#6299A9" />
                    </svg>
                </div>

                <div className="flex-col mx-3">
                    <p className="bg-[#E1FFF8] text-[#20BB96] mb-1"> আবনা</p>
                    <p className="bg-[#E1FFF8] text-[#20BB96]"> ১৯৯৭</p>
                </div>
                <div className="mx-2">
                    <p className="text-xl"> মাওলানা ফয়জুল্লাহ</p>
                    <p className="text-sm"> ১৬ ডিসেম্বর, ২০২২</p>
                </div>
            </div>
            <p className="text-sm font-serif mt-4">
                জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে
                জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে
                আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয়।
            </p>
            <p className="flex justify-end text-sm mt-2">
                ১২ মন্তব্য
            </p>
            <div className="flex justify-end">
                <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="mt-4"
                >
                    <path d="M10 19.0087C9.425 19.0087 8.88333 18.717 8.5 18.2087L7.25 16.542C7.225 16.5087 7.125 16.467 7.08333 16.4587H6.66667C3.19167 16.4587 1.04167 15.517 1.04167 10.8337V6.66699C1.04167 2.98366 2.98333 1.04199 6.66667 1.04199H13.3333C17.0167 1.04199 18.9583 2.98366 18.9583 6.66699V10.8337C18.9583 14.517 17.0167 16.4587 13.3333 16.4587H12.9167C12.85 16.4587 12.7917 16.492 12.75 16.542L11.5 18.2087C11.1167 18.717 10.575 19.0087 10 19.0087ZM6.66667 2.29199C3.68333 2.29199 2.29167 3.68366 2.29167 6.66699V10.8337C2.29167 14.6003 3.58333 15.2087 6.66667 15.2087H7.08333C7.50833 15.2087 7.99167 15.4503 8.25 15.792L9.5 17.4587C9.79167 17.842 10.2083 17.842 10.5 17.4587L11.75 15.792C12.025 15.4253 12.4583 15.2087 12.9167 15.2087H13.3333C16.3167 15.2087 17.7083 13.817 17.7083 10.8337V6.66699C17.7083 3.68366 16.3167 2.29199 13.3333 2.29199H6.66667Z" fill="#174C5A" />
                    <path d="M14.1667 7.29199H5.83334C5.49167 7.29199 5.20834 7.00866 5.20834 6.66699C5.20834 6.32533 5.49167 6.04199 5.83334 6.04199H14.1667C14.5083 6.04199 14.7917 6.32533 14.7917 6.66699C14.7917 7.00866 14.5083 7.29199 14.1667 7.29199Z" fill="#174C5A" />
                    <path d="M10.8333 11.458H5.83334C5.49167 11.458 5.20834 11.1747 5.20834 10.833C5.20834 10.4913 5.49167 10.208 5.83334 10.208H10.8333C11.175 10.208 11.4583 10.4913 11.4583 10.833C11.4583 11.1747 11.175 11.458 10.8333 11.458Z" fill="#174C5A" />
                </svg>
                <p className="mx-2 text-sm mt-4">মন্তব্য করুন</p>
            </div>
        </div >
    )
}