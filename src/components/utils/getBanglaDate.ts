const monthList = [
    'জানুয়ারী', 'ফেব্রুয়ারী', 'মার্চ', 'এপ্রিল',
    'মে', 'জুন', 'জুলাই', 'আগস্ট',
    'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
]

export function getBanglaDate(date: Date | string) {
    date = new Date(date);
    const month = date.getMonth();
    const [yyyy, mm, ddWithTime] = date.toISOString().split('-');
    const [dd] = ddWithTime.split('T');
    return `${dd} ${monthList[month]}, ${yyyy}`;
}