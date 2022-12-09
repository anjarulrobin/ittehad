import { useEffect, useRef, useState } from "react";
import { getUsersApi } from "../apis/getUsers";
import { User } from "../types/user";

export default function Representetives() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsersApi({ limit: 15, skip: 0, passingYear: 2020, userTags: 'Jimmadar' })
            .then((users) => {
                if (users.code === 200) {
                    for (const user of users.data) {
                        user.id = user._id;
                    }
                    setUsers(users.data);
                }
                else {
                    setUsers([]);
                }
            })
            .catch((err) => console.error(err));
    }, []);


    const svgRefs = useRef<SVGElement[]>([]);
    const accordianBodyRefs = useRef<HTMLElement[]>([]);

    let currRefId = 0;
    return (
        <div id="accordion-collapse" data-accordion="collapse" className=" overflow-scroll p-4 ">
            <p className="text-center h-5 text-green-300"> Captains </p>
            {
                users.map((user, index) => (
                    <div
                        key={user.id}
                        className="m-4 rounded-xl text-white bg-gray-200 shadow-lg shadow-gray-900/80 border-solid border-2 border-gray-600"
                    >
                        <p id={`accordion-collapse-heading-${user.id}`}>
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
                                className="flex items-center h-20 justify-between w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl"
                                data-accordion-target={`#accordion-collapse-body-${user.id}`}
                                aria-expanded="true"
                                aria-controls={`#accordion-collapse-body-${user.id}`}>
                                <span className="px-2">{user.name}</span>
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
                        </p>
                        <div
                            id={`accordion-collapse-body-${user.id}`}
                            /**@ts-ignore */
                            ref={(element: HTMLElement) => accordianBodyRefs.current[currRefId++] = element}
                            className="hidden"
                            aria-labelledby={`accordion-collapse-heading-${user.id}`}>
                            <div className="font-light border border-b-0 border-gray-200 flex">
                                <table className="p-2 w-full border-collapse border text-center justify-center">
                                    <tbody className="">
                                        <tr className="bg-cyan-700">
                                            <td className="">Phone </td>
                                            <td className="">{user.phone}</td>
                                        </tr>
                                        <tr className="bg-cyan-700">
                                            <td className="">Type </td>
                                            <td className="">{user.userType}</td>
                                        </tr>
                                        <tr className="bg-cyan-700">
                                            <td className="">Passing year </td>
                                            <td className="">{user.passingYear}</td>
                                        </tr>
                                        <tr className="bg-cyan-700">
                                            <td className="">Current Address </td>
                                            <td className="">{`${user.currentAddress.village}, ${user.currentAddress.post}, ${user.currentAddress.upzilla.bn_name}, ${user.currentAddress.district.bn_name}`}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="bg-blue-200 rounded-lg w-full p-3 text-center"            >
                <button
                    onClick={() => {
                        // setUsers([...users, { id: String(users.length + 1), name: 'New member' }]);
                    }}
                > Show More </button>
            </div>

        </div>
    )
}