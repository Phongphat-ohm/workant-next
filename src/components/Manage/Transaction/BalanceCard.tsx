"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function BalanceCard() {
    const [minutesPassed, setMinutesPassed] = useState(0);

    // คำนวณเวลาที่ผ่านไปตั้งแต่เปิดหน้านี้
    useEffect(() => {
        const startTime = Date.now();

        const interval = setInterval(() => {
            const now = Date.now();
            const diffInMinutes = Math.floor((now - startTime) / 60000);
            setMinutesPassed(diffInMinutes);
        }, 60000); // อัปเดตทุก 60 วินาที

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="p-4 px-5 min-w-80 w-full">
                <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-xl font-bold text-gray-700">ยอดเงินคงเหลือ</h1>
                    <label className="text-gray-400">บัญชีหลัก</label>
                    <h1 className="text-3xl font-bold text-blue-500 mt-2">฿ 0.00</h1>
                    <label className="text-gray-400 text-xs flex items-center justify-end gap-2 mt-1">
                        <FaSpinner />
                        ข้อมูลล่าสุด {minutesPassed === 0 ? "เมื่อสักครู่" : `${minutesPassed} นาทีที่แล้ว`}
                    </label>
                </div>
            </div>
        </>
    )
}