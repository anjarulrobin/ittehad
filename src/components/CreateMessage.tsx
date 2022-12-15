import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateMessage() {
    const [message, setMessage] = useState<string>();
    const navigate = useNavigate();
    // const [authError, setAuthError] = useState<{ flag: boolean, details: string[] }>({ flag: false, details: [] });

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        navigate('/discussion', { replace: true });
    }

    return (
        <div className="m-4">
            <p className="mb-2 text-lg text-center font-bold"> My thoughts </p>
            <div className="flex justify-center">
                <form className="" action="#" onSubmit={handleSubmit}>
                    <div className="m-2">
                        <textarea
                            // type="text"
                            name="message"
                            onChange={(ev) => setMessage(ev.target.value)}
                            className="w-full border  border-[#20BB96] p-1 rounded-lg"
                            placeholder="লিখব যা বলতে চাই..."
                            required={true} />
                    </div>
                    {
                        // authError.flag ? (<div className="text-red-400"> {authError.details} </div>) : (<div></div>)
                    }
                    <div className="bg-[#20BB96] m-2 mt-4 p-1.5 text-center rounded-lg">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>

    )
}