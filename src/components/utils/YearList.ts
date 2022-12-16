export function getYearList(start: number, end: number) {
    const years = []
    for (let i = start; i <= end; i += 1) {
        years.push(i);
    }

    return years;
}