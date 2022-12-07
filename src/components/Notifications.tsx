import { useEffect, useRef, useState } from "react";
import { getNotificationsApi } from "../apis/getNotifications";
import { NotificationResponse } from "../types/notifications";

export default function Notifications() {
    const [notifications, setNotifications] = useState<NotificationResponse[]>([]);

    useEffect(() => {
        getNotificationsApi({ limit: 15, skip: 0 })
            .then((notifications) => {
                if (notifications.code === 200) {
                    for (const notification of notifications.data) {
                        notification.id = notification._id;
                    }
                    setNotifications(notifications.data);
                }
                else {
                    setNotifications([]);
                }
            })
            .catch((err) => console.error(err));
    }, []);


    const svgRefs = useRef<SVGElement[]>([]);
    const accordianBodyRefs = useRef<HTMLElement[]>([]);

    let currRefId = 0;
    return (
        <div>

            <h1 className="bg-green-600 text-center rounded-lg mb-2">
                Elans
            </h1>
            <div id="accordion-collapse" data-accordion="collapse" className="overflow-auto p-4 h-[90%]">
                {
                    notifications.map((notification, index) => (
                        <div key={notification.id}
                            className="m-4 rounded-xl text-white bg-gray-200 shadow-lg shadow-gray-900/80 border-solid border-2 border-gray-600"
                        >
                            <h2 id={`accordion-collapse-heading-${notification.id}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!accordianBodyRefs.current[index].style.display || accordianBodyRefs.current[index].style.display === 'none') {
                                            accordianBodyRefs.current[index].style.display = 'block';
                                        }
                                        else {
                                            accordianBodyRefs.current[index].style.display = 'none';
                                        }
                                        if (!svgRefs.current[index]?.style.transform || svgRefs.current[index]?.style.transform === 'rotate(0deg)') {
                                            svgRefs.current[index].style.transform = 'rotate(180deg)';
                                            svgRefs.current[index].style.transition = 'transform 150ms ease'; // smooth transition
                                        }
                                        else {
                                            svgRefs.current[index].style.transform = 'rotate(0deg)';
                                            svgRefs.current[index].style.transition = 'transform 150ms ease'; // smooth transition
                                        }
                                    }}
                                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl"
                                    data-accordion-target={`#accordion-collapse-body-${notification.id}`}
                                    aria-expanded="true"
                                    aria-controls={`#accordion-collapse-body-${notification.id}`}>
                                    <span>{notification.title}</span>
                                    <svg
                                        /**@ts-ignore */
                                        ref={(element: SVGElement) => svgRefs.current[currRefId] = element}

                                        data-accordion-icon
                                        className="w-6 h-6 rotate-0 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id={`accordion-collapse-body-${notification.id}`}
                                /**@ts-ignore */
                                ref={(element: HTMLElement) => accordianBodyRefs.current[currRefId++] = element}
                                className="hidden"
                                aria-labelledby={`accordion-collapse-heading-${notification.id}`}>
                                <div className="font-light border border-b-0 border-gray-200 flex">
                                    <table className="p-2 w-full border-collapse border text-center justify-center">
                                        <tbody>
                                            <tr className="bg-cyan-700">
                                                <td className="">Content </td>
                                                <td className="">{notification.content}</td>
                                            </tr>
                                            <tr className="bg-cyan-700">
                                                <td className="">Send by </td>
                                                <td className="">{notification.sendBy.name}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <button
                    className="bg-blue-200 rounded-lg"
                    onClick={() => {
                        // setUsers([...notifications, { id: String(notifications.length + 1), name: 'New member' }]);
                    }}
                > Show More </button>
            </div>
        </div>
    )
}