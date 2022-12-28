export function Loader({ message = 'অনুগ্রহপূর্বক অপেক্ষা করুন...' }: { message?: string }) {
    return (
        <div className="text-center text-sm">
            {message}
        </div>
    )
}