import Navbar from "@/components/Navigation/Navbar";

export default function NotFound() {
    return (
        <>
            <div className="min-h-screen bg-gray-10">
                <Navbar />
                <div className="flex flex-col items-center p-5">
                    <div className="p-8 px-5 min-w-80 w-full">
                        <div className="text-center">
                            <h1 className="text-2xl text-blue-500 font-bold">
                                404 Not Found
                            </h1>
                            <label className="text-gray-400">ไม่พบหน้าที่คุณต้องการ</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}