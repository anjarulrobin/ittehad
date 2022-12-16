import { getBanglaDate } from "./utils/getBanglaDate"

const notification = {
    id: '1',
    title: 'বিশ্বকাপ ফুটবল কাতার কি ইসলাম প্রচার করছে?',
    content: "বিশ্বকাপ ফুটবলের আসর সম্পর্কে সবাই জানেন। এইসব আসরের নানা প্রসঙ্গ-অনুষঙ্গ সম্পর্কে সচেতন মানুষের সংখ্যাও একেবারে কম নয়। যেখানে এইসব আসরের আয়োজন হয়ে থাকে তার আশেপাশে নানা ধরনের অনাচারের দৃশ্য-অদৃশ্য যে স্রোত প্রবাহিত হয় সে সম্পর্কেও অভিজ্ঞ মহল ওয়াকিফহাল। কাজেই এই আয়োজন কোনো মুসলিম সংখ্যাগরিষ্ঠ দেশে অনুষ্ঠিত হওয়ার মধ্যে মুসলমানদের উল্লসিত হওয়ার কিছু নেই। এখানে ইতিবাচক কোনো কিছু খুঁজে বের করে আত্মতৃপ্তিতে ভোগাটা বাস্তবে হীনম্মন্যতারই আরেক রূপ। বরং তা কোনো কোনো দিক থেকে আরো ভয়াবহ।",
    createdAt: new Date('12/26/2022')
}

export default function NotificationDetails() {

    return (
        <div>
            <div className="m-4">

                <p className="text-lg"> {getBanglaDate(notification.createdAt)}</p>
                <p className="mt-1 mb-1 text-xl">{notification.title} </p>
                <p className="mt-2">
                    {notification.content}
                </p>
            </div>
        </div>
    )
}