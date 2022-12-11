import { useEffect, useState } from "react";
// import { getUsersApi } from "../apis/getUsers";
// import { User } from "../types/user";
import Teachers from "./Teachers";

function getYearRange() {
    const yearRange = []
    for (let i = 1990; i < 2030; i += 5) {
        yearRange.push({ start: i, end: i + 5 });
    }

    return yearRange;
}

function getYears(start: number, end: number) {
    const years = []
    for (let i = start; i <= end; i += 1) {
        years.push(i);
    }

    return years;
}
interface YearSelection {
    startYear: number;
    endYear: number;
    openYearSelection: boolean;
    openYearRangeSelection: boolean;
    selectedYear: number;
}

export default function Representetives() {
    // const [users, setUsers] = useState<User[]>([]);
    const [yearSelection, setYearSelection] = useState<YearSelection>({
        openYearRangeSelection: false,
        openYearSelection: false,
        startYear: 0,
        endYear: 0,
        selectedYear: 0,
    });
    const yearRange = getYearRange();

    // useEffect(() => {
    //     getUsersApi({ limit: 15, skip: 0, passingYear: 2020, userTags: 'Jimmadar' })
    //         .then((users) => {
    //             if (users.code === 200) {
    //                 for (const user of users.data) {
    //                     user.id = user._id;
    //                 }
    //                 setUsers(users.data);
    //             }
    //             else {
    //                 setUsers([]);
    //             }
    //         })
    //         .catch((err) => console.error(err));
    // }, []);

    return (
        <div className="p-4">
            <button
                onClick={() => setYearSelection({
                    ...yearSelection,
                    openYearRangeSelection: !yearSelection.openYearRangeSelection,
                    openYearSelection: false,
                    selectedYear: 0
                })}
                className="bg-[#E1FFF8] rounded-lg p-1"
            >
                Select Year
            </button>
            {
                yearSelection.openYearRangeSelection && (
                    <div className="grid grid-cols-3 mt-2 gap-2">
                        {yearRange.map((range) => (
                            <div
                                className="bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center"
                                key={`${range.start}-${range.end}`}
                            >
                                <button
                                    value={`${range.start}-${range.end}`}
                                    onClick={() => setYearSelection({ ...yearSelection, startYear: range.start, endYear: range.end, openYearRangeSelection: false, openYearSelection: true })}
                                >
                                    {`${range.start}-${range.end}`}
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }
            {
                yearSelection.openYearSelection && (
                    <div className="grid grid-cols-3 mt-2 gap-2">
                        {getYears(yearSelection.startYear, yearSelection.endYear).map((year) => (
                            <div
                                className="bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center"
                                key={year}
                            >
                                <button
                                    value={`${year}`}
                                    onClick={() => setYearSelection({ ...yearSelection, selectedYear: year, openYearSelection: false })}
                                >

                                    {`${year}`}
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }
            <div>
                {yearSelection.selectedYear !== 0 && <Teachers />}
            </div>
        </div>
    )
}