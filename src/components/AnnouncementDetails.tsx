import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAnnouncementDetailsApi } from "../apis/getAnnouncementDetails";
import { AnnouncementResponse } from "../types/announcements";
import { getBanglaDate } from "./utils/getBanglaDate"

export default function NotificationDetails() {
    const { id } = useParams();
    const [announcement, setAnnouncement] = useState<AnnouncementResponse | null>(null);

    useEffect(() => {
        getAnnouncementDetailsApi({ announcementId: id || '' })
            .then((announcement) => {
                if (announcement.code === 200) {
                    announcement.data.id = announcement.data._id;
                    setAnnouncement(announcement.data);
                }
                else {
                    setAnnouncement(null);
                }
            })
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <div>
            <div className="m-4">
                <p className="text-sm"> {getBanglaDate(announcement?.createdAt || new Date())}</p>
                <p className="mt-1 mb-1 text-md font-semibold border-b-2 border-b-[#20BB96]">{announcement?.title} </p>
                <p className="mt-2">
                    {announcement?.content}
                </p>
            </div>
        </div>
    )
}