export function getYearRange() {
    const yearRange = [{ start: 1900, end: 1987, value: '< 1987' }];
    for (let i = 1990; i < 2030; i += 5) {
        yearRange.push({ start: i, end: i + 4, value: `${i}-${i + 4}` });
    }

    return yearRange;
}