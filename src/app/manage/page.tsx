import BalanceCard from "@/components/Manage/BalanceCard";
import MenuList from "@/components/Manage/MenuList";
import NotificationCard from "@/components/Manage/NotificationCard";
import Navbar from "@/components/Navigation/Navbar";
import Link from "next/link";
import { FaArrowUpFromBracket, FaClock, FaDownload, FaUserPlus } from "react-icons/fa6";

export default function Manage() {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <div className="p-4 py-0">
                    <NotificationCard />
                    <MenuList />
                    <BalanceCard />
                </div>
            </div>
        </>
    )
}