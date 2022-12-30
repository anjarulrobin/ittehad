import { useState } from "react";
import { Link } from "react-router-dom";
import { getYearList } from "./utils/YearList";
import { getYearRange } from "./utils/YearRange";

interface YearSelection {
    startYear: number;
    endYear: number;
    openYearSelection: boolean;
    openYearRangeSelection: boolean;
    selectedYear: number;
}

export default function UserFilter() {
    const [yearSelection, setYearSelection] = useState<YearSelection>({
        openYearRangeSelection: true,
        openYearSelection: false,
        startYear: 0,
        endYear: 0,
        selectedYear: 0,
    });
    const yearRange = getYearRange();

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
                                    value={`${range.value}`}
                                    onClick={() => setYearSelection({ ...yearSelection, startYear: range.start, endYear: range.end, openYearRangeSelection: false, openYearSelection: true })}
                                >
                                    {`${range.value}`}
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }
            {
                yearSelection.openYearSelection && (
                    <div className="grid grid-cols-3 mt-2 gap-2">
                        {getYearList(yearSelection.startYear, yearSelection.endYear).map((year) => (
                            <div
                                className="bg-[#20BB96] rounded-lg m-1 p-1 w-20 h-12 flex text-center justify-center"
                            >
                                <Link to={`/users/all?passingYear=${year}`}
                                >
                                    {`${year}`}
                                </Link>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}