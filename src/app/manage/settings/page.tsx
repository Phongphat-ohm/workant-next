"use client";
import Navbar from "@/components/Navigation/Navbar";
import Link from "next/link";
import { Bs123 } from "react-icons/bs";
import { FaChevronRight, FaGear, FaGears, FaIdCard, FaInfo, FaLock, FaRightFromBracket } from "react-icons/fa6";

export default function Settings() {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <h1 className="text-lg px-2 text-center">
                    การตั้งค่า
                </h1>
                <ul className="flex flex-col mt-3">
                    <li>
                        <Link href={"/manage/settings/profile"} className="flex items-center justify-between p-4 active:bg-gray-200 border-y border-gray-300">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-200 text-purple-500">
                                    <FaIdCard />
                                </div>
                                <div className="flex flex-col">
                                    <label>โปรไฟล์</label>
                                    <label className="text-xs text-gray-400">ดูหรือ Share โปรไฟล์ของคุณ</label>
                                </div>
                            </div>
                            <span className="text-gray-400">
                                <FaChevronRight />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/manage/settings/pvdata"} className="flex items-center justify-between p-4 active:bg-gray-200 border-b border-gray-300">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-200 text-blue-500">
                                    <FaGears />
                                </div>
                                <div className="flex flex-col">
                                    <label>ข้อมูลส่วนตัว</label>
                                    <label className="text-xs text-gray-400">แก้ไขข้อมูลส่วนตัวของคุณ</label>
                                </div>
                            </div>
                            <span className="text-gray-400">
                                <FaChevronRight />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/manage/settings/password"} className="flex items-center justify-between p-4 active:bg-gray-200 border-b border-gray-300">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-200 text-pink-500">
                                    <FaLock />
                                </div>
                                <div className="flex flex-col">
                                    <label>รหัสผ่าน</label>
                                    <label className="text-xs text-gray-400">หากลืมรหัสผ่าน หรือต้องการเปลี่ยนรหัสผ่าน</label>
                                </div>
                            </div>
                            <span className="text-gray-400">
                                <FaChevronRight />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/manage/settings/pinpass"} className="flex items-center justify-between p-4 active:bg-gray-200 border-b border-gray-300">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-200 text-green-500">
                                    <Bs123 />
                                </div>
                                <div className="flex flex-col">
                                    <label>ตั้งค่า Pin</label>
                                    <label className="text-xs text-gray-400">ข้อมูลเกี่ยวกับเราเพิ่มเติม</label>
                                </div>
                            </div>
                            <span className="text-gray-400">
                                <FaChevronRight />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/manage/settings/about"} className="flex items-center justify-between p-4 active:bg-gray-200 border-b border-gray-300">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-200 text-sky-500">
                                    <FaInfo />
                                </div>
                                <div className="flex flex-col">
                                    <label>เกี่ยวกับเรา</label>
                                    <label className="text-xs text-gray-400">เปลี่ยน Pin ของคุณ</label>
                                </div>
                            </div>
                            <span className="text-gray-400">
                                <FaChevronRight />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/manage/settings/logout"} className="flex items-center justify-between p-4 active:bg-gray-200 border-b border-gray-300">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-200 text-red-500">
                                    <FaRightFromBracket />
                                </div>
                                <div className="flex flex-col">
                                    <label>ออกจากระบบ</label>
                                    <label className="text-xs text-gray-400">ออกจากระบบของคุณ</label>
                                </div>
                            </div>
                            <span className="text-gray-400">
                                <FaChevronRight />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}