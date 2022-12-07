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

export default function Group() {
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
                    alert('Group not found');
                }
            })
            .catch((err) => console.error(err));
    }, [])
    return (
        <div className="flex justify-center">
            <div className="p-2 w-80 border-4 border-green-300 rounded-lg">
                <div className="rounded-lg font-bold text-2xl mb-2 border-2 border-b-black text-center bg-green-300 shadow-xl shadow-gray-500"> {group?.name}</div>
                <ul className="bg-transparent">
                    {
                        messages.map((message) => (
                            <div key={message.id} className="shadow-md rounded-md shadow-gray-500">
                                <div className={`${'6369faba2a5ff0f681f1244f' === message.sender.id ? 'justify-end' : 'justify-start'} flex`}>
                                    <div className={`${'6369faba2a5ff0f681f1244f' === message.sender.id ? 'justify-end hidden' : 'justify-start'} flex w-8 h-8 bg-blue-500 rounded-full items-center p-1 text-xs text-black overflow-clip`}> {`${message.sender.name} Abdullah`} </div>
                                    <div className={`${'6369faba2a5ff0f681f1244f' === message.sender.id ? 'bg-blue-500 text-white' : 'bg-white'} m-2 w-[70%] rounded-lg`} key={message.id}>
                                        <li className="p-1 pt-0">
                                            {message.text}
                                        </li>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </ul>

                <form className="bg-blue-400 mt-3" onSubmit={(ev) => {
                    ev.preventDefault();
                    if (!message) {
                        alert('Empty message!');
                    }
                    setMessages([...messages, {
                        id: Math.random().toString(),
                        sender: {
                            id: '6369faba2a5ff0f681f1244f',
                            name: 'Mr.X'
                        },
                        text: message
                    }])
                    // setMessage('');
                }}>
                    <label htmlFor="chat" className="sr-only">Your message</label>
                    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50">
                        <textarea
                            onChange={(ev) => setMessage(ev.target.value)}
                            id="chat"
                            rows={1}
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 " placeholder="Your message..."></textarea>
                        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer">
                            <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form >
            </div>
        </div >
    )
}