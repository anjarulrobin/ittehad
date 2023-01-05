export function Loader({ message = 'অনুগ্রহপূর্বক অপেক্ষা করুন...' }: { message?: string }) {
    return (
        <div className="flex justify-center items-center h-96">
            <div>
                <p
                    className="ml-12 border-2 border-solid border-[#f3f3f3] border-t-2 border-t-[#3498db] rounded-full w-10 h-10 animate-spin"
                >
                </p>
                <p className="w-full mt-3">{message}</p>
            </div>
        </div>
    )
}