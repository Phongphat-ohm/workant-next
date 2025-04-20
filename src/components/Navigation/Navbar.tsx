"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCircleDollarToSlot, FaGear, FaHouse } from "react-icons/fa6"

export default function Navbar() {
    const currentPath = usePathname();

    const link_list = [
        {
            name: "หน้าหลัก",
            link: "/manage",
            icon: <FaHouse className="text-xs" />,
        },
        {
            name: "ธุรกรรม",
            link: "/manage/transaction",
            icon: <FaCircleDollarToSlot className="text-xs" />,
        },
        {
            name: "การตั้งค่า",
            link: "/manage/settings",
            icon: <FaGear className="text-xs" />,
        }
    ]

    return (
        <nav className="p-5 w-full sticky top-0 flex items-center justify-center gap-2">
            <ul className="p-2 rounded-full shadow bg-white boder border-gray-300 flex gap-1">
                {link_list.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} className={`p-2 px-4 text-xs max-lg:text-md rounded-full flex gap-2 items-center justify-center ${currentPath == item.link ? "bg-blue-500 text-white hover:bg-blue-600" : "hover:bg-gray-300"}`}>
                            <div className="text-xs">
                                {item.icon}
                            </div>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}