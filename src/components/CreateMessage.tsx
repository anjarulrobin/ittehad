import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { sendMessageApi } from "../apis/sendMessage";
import { Loader } from "./Loader";

export default function CreateMessage() {
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();
    const [authError, setAuthError] = useState<{ flag: boolean, details: string[] }>({ flag: false, details: [] });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setLoading(true);
        sendMessageApi({ text: message })
            .then((data) => {
                if (data.code === 200) {
                    navigate('/discussion', { replace: true });
                }
                else {
                    setAuthError({ flag: true, details: [data.error || data.message || 'Failed to send message!'] });
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }

    return (
        <div className="m-4">
            <p className="mb-2 text-lg text-center font-bold"> My thoughts </p>
            <div className="flex justify-center">
                <form className="" action="#" onSubmit={handleSubmit}>
                    <div className="m-2">
                        <textarea
                            name="message"
                            onChange={(ev) => setMessage(ev.target.value)}
                            className="w-full border  border-[#20BB96] p-1 rounded-lg"
                            placeholder="লিখব যা বলতে চাই..."
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
                                Send
                            </button>
                        </div>)
                    }
                </form>
            </div>
        </div>

    )
}