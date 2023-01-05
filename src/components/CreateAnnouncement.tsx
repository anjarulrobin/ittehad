import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { createAnnouncementApi } from "../apis/createAnnouncementApi";
import { AnnouncementBody } from "../types/announcements";
import { Loader } from "./Loader";

export default function CreateAnnouncement() {
    const [announcement, setAnnouncement] = useState<AnnouncementBody>({ content: '', title: '', type: 'GENERAL' });
    const navigate = useNavigate();
    const [authError, setAuthError] = useState<{ flag: boolean, details: string[] }>({ flag: false, details: [] });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setLoading(true);
        createAnnouncementApi(announcement)
            .then((data) => {
                if (data.code === 200) {
                    navigate('/announcement', { replace: true });
                }
                else {
                    setAuthError({ flag: true, details: [data.error || data.message || 'Failed to send message!'] });
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }

    return (
        <div className="m-2">
            <p className="mb-1 text-lg text-center font-bold"> এলান </p>
            <div className="w-full">
                <form className="w-full" action="#" onSubmit={handleSubmit}>
                    <textarea
                        name="title"
                        onChange={(ev) => setAnnouncement({ ...announcement, title: ev.target.value })}
                        className="border border-[#20BB96] rounded-lg h-fit p-1 m-1 w-full"
                        placeholder="শিরোনাম"
                        value={announcement.title}
                        required={true}
                    />
                    <textarea
                        name="content"
                        onChange={(ev) => setAnnouncement({ ...announcement, content: ev.target.value })}
                        className="border border-[#20BB96] rounded-lg h-96 p-1 m-1 w-full"
                        placeholder="ঘোষণা..."
                        value={announcement.content}
                        required={true}
                    />
                    {
                        authError.flag && (
                            <div
                                className="text-red-400 text-xs text-center"> {authError.details}
                            </div>
                        )
                    }
                    {loading === true ? <Loader /> :
                        (<div className="m-2 bg-[#20BB96] rounded-lg" >
                            <button type="submit" className="p-1.5 text-center w-full" >
                                Send
                            </button>
                        </div>)
                    }
                </form>
            </div>
        </div>

    )
}