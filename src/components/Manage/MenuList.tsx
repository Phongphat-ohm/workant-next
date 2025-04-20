import Link from "next/link";
import { FaArrowUpFromBracket, FaClock, FaDownload, FaUserPlus } from "react-icons/fa6";

export default function MenuList() {
    return (
        <div className="grid grid-cols-4 gap-3 my-8">
            <Link href={"/manage"} className="flex flex-col items-center justify-center group">
                <div className="flex p-4 rounded-full border border-gray-300 group-active:text-blue-400 group-active:bg-blue-50 bg-white shadow group-active:border-blue-400">
                    <FaDownload />
                </div>
                <label className="mt-1 text-xs group-active:text-blue-500">ฝากเงิน</label>
            </Link>
            <Link href={"/manage"} className="flex flex-col items-center justify-center group">
                <div className="flex p-4 rounded-full border border-gray-300 group-active:text-blue-400 group-active:bg-blue-50 bg-white shadow group-active:border-blue-400">
                    <FaArrowUpFromBracket />
                </div>
                <label className="mt-1 text-xs group-active:text-blue-500">ถอนเงิน</label>
            </Link>
            <Link href={"/manage"} className="flex flex-col items-center justify-center group">
                <div className="flex p-4 rounded-full border border-gray-300 group-active:text-blue-400 group-active:bg-blue-50 bg-white shadow group-active:border-blue-400">
                    <FaUserPlus />
                </div>
                <label className="mt-1 text-xs group-active:text-blue-500">ชวนเพื่อน</label>
            </Link>
            <Link href={"/manage"} className="flex flex-col items-center justify-center group">
                <div className="flex p-4 rounded-full border border-gray-300 group-active:text-blue-400 group-active:bg-blue-50 bg-white shadow group-active:border-blue-400">
                    <FaClock />
                </div>
                <label className="mt-1 text-xs group-active:text-blue-500">ประวัติธุรกรรม</label>
            </Link>
        </div>
    )
}