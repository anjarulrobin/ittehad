import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAnnouncementsApi } from "../apis/getAnnouncements";
import { AnnouncementResponse } from "../types/announcements";

const monthList = [
    'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল',
    'মে', 'জুন', 'জুলাই', 'আগস্ট',
    'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
]

const announcementList = [
    {
        id: '1',
        title: 'বিশ্বকাপ ফুটবল কাতার কি ইসলাম প্রচার করছে?',
        content: "বিশ্বকাপ ফুটবলের আসর সম্পর্কে সবাই জানেন। এইসব আসরের নানা প্রসঙ্গ-অনুষঙ্গ সম্পর্কে সচেতন মানুষের সংখ্যাও একেবারে কম নয়। যেখানে এইসব আসরের আয়োজন হয়ে থাকে তার আশেপাশে নানা ধরনের অনাচারের দৃশ্য-অদৃশ্য যে স্রোত প্রবাহিত হয় সে সম্পর্কেও অভিজ্ঞ মহল ওয়াকিফহাল। কাজেই এই আয়োজন কোনো মুসলিম সংখ্যাগরিষ্ঠ দেশে অনুষ্ঠিত হওয়ার মধ্যে মুসলমানদের উল্লসিত হওয়ার কিছু নেই। এখানে ইতিবাচক কোনো কিছু খুঁজে বের করে আত্মতৃপ্তিতে ভোগাটা বাস্তবে হীনম্মন্যতারই আরেক রূপ। বরং তা কোনো কোনো দিক থেকে আরো ভয়াবহ।",
        createdAt: new Date('12/26/2022')
    },
    {
        id: '2',
        title: 'বিশ্বকাপ ফুটবল কাতার কি ইসলাম প্রচার করছে?',
        content: "বিশ্বকাপ ফুটবলের আসর সম্পর্কে সবাই জানেন। এইসব আসরের নানা প্রসঙ্গ-অনুষঙ্গ সম্পর্কে সচেতন মানুষের সংখ্যাও একেবারে কম নয়। যেখানে এইসব আসরের আয়োজন হয়ে থাকে তার আশেপাশে নানা ধরনের অনাচারের দৃশ্য-অদৃশ্য যে স্রোত প্রবাহিত হয় সে সম্পর্কেও অভিজ্ঞ মহল ওয়াকিফহাল। কাজেই এই আয়োজন কোনো মুসলিম সংখ্যাগরিষ্ঠ দেশে অনুষ্ঠিত হওয়ার মধ্যে মুসলমানদের উল্লসিত হওয়ার কিছু নেই। এখানে ইতিবাচক কোনো কিছু খুঁজে বের করে আত্মতৃপ্তিতে ভোগাটা বাস্তবে হীনম্মন্যতারই আরেক রূপ। বরং তা কোনো কোনো দিক থেকে আরো ভয়াবহ।",
        createdAt: new Date('12/26/2022')
    }
]

function getBanglaTime(date: Date) {

    const month = date.getMonth();
    const [yyyy, mm, ddWithTime] = date.toISOString().split('-');
    const [dd] = ddWithTime.split('T');
    return `${dd} ${monthList[month]}, ${yyyy}`;
}

export default function Announcements() {
    const [announcement, setNotifications] = useState(announcementList);

    // useEffect(() => {
    //     getAnnouncementsApi({ limit: 15, skip: 0 })
    //         .then((announcement) => {
    //             if (announcement.code === 200) {
    //                 for (const announcement of announcement.data) {
    //                     announcement.id = announcement._id;
    //                 }
    //                 setNotifications(announcement.data);
    //             }
    //             else {
    //                 setNotifications([]);
    //             }
    //         })
    //         .catch((err) => console.error(err));
    // }, []);


    return (
        <div>
            {
                announcement.map((announcement) => (
                    <div key={announcement.id} className="m-4">
                        <p className="text-lg"> {getBanglaTime(announcement.createdAt)}</p>
                        <p className="text-xl"> {announcement.title} </p>
                        <p className="mt-2 h-14 text-ellipsis overflow-hidden">
                            {announcement.content}
                        </p>

                        <div className="flex justify-end">
                            <Link to="/announcement/1" >
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