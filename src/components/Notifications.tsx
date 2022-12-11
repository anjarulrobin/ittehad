import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getNotificationsApi } from "../apis/getNotifications";
import { NotificationResponse } from "../types/notifications";

const monthList = [
    'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল',
    'মে', 'জুন', 'জুলাই', 'আগস্ট',
    'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
]

const notificationList = [
    {
        id: '1',
        content: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয়।",
        createdAt: new Date('12/26/2022')
    },
    {
        id: '2',
        content: "জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয়।",
        createdAt: new Date('12/26/2022')
    }
]

function getBanglaTime(date: Date) {

    const month = date.getMonth();
    const [yyyy, mm, ddWithTime] = date.toISOString().split('-');
    const [dd] = ddWithTime.split('T');
    return `${dd} ${monthList[month]}, ${yyyy}`;
}

export default function Notifications() {
    const [notifications, setNotifications] = useState(notificationList);

    // useEffect(() => {
    //     getNotificationsApi({ limit: 15, skip: 0 })
    //         .then((notifications) => {
    //             if (notifications.code === 200) {
    //                 for (const notification of notifications.data) {
    //                     notification.id = notification._id;
    //                 }
    //                 setNotifications(notifications.data);
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
                notifications.map((notification) => (
                    <div key={notification.id} className="m-4">
                        <p className="text-lg"> {getBanglaTime(notification.createdAt)}</p>
                        <p className="mt-2 h-14 text-ellipsis overflow-hidden">
                            {notification.content}
                        </p>

                        <div className="flex justify-end">
                            <Link to="#" >
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