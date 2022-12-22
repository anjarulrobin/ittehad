import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAnnouncementsApi } from "../apis/getAnnouncements";
import { AnnouncementResponse } from "../types/announcements";
import { getBanglaDate } from "./utils/getBanglaDate";

export default function Announcements() {
    const [announcements, setAnnouncements] = useState<AnnouncementResponse[]>([]);

    useEffect(() => {
        getAnnouncementsApi({ limit: 15, skip: 0 })
            .then((announcements) => {
                if (announcements.code === 200) {
                    for (const announcement of announcements.data) {
                        announcement.id = announcement._id;
                    }
                    setAnnouncements(announcements.data);
                }
                else {
                    setAnnouncements([]);
                }
            })
            .catch((err) => console.error(err));
    }, []);


    return (
        <div className="m-2">
            <div
                className="mb-2"
            >
                <Link className="m-2 mb-3 flex justify-between border-b-2 border-[#20BB96]"
                    to="/announcement/create"
                >
                    <p className="mr-2 text-center text-gray-400"> এলান দিন ...</p>
                    <svg className="w-6 h-6  text-[#20BB96]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </Link>
            </div>
            {
                announcements.map((announcement) => (
                    <div key={announcement.id} className="m-4">
                        <p className="text-sm"> {getBanglaDate(announcement.createdAt)}</p>
                        <p className="text-md font-semibold border-b-[1px] border-b-[#20BB96]"> {announcement.title} </p>
                        <p className="mt-2 h-14 text-ellipsis overflow-hidden">
                            {announcement.content}
                        </p>

                        <div className="flex justify-end">
                            <Link to={`/announcement/${announcement.id}`} >
                                <p className="w-fit text-sm text-[#20BB96]">
                                    আরো দেখুন
                                </p>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}