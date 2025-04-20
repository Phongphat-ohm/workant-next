"use client";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa6";

export default function BalanceCard() {
    const [isShowBalance, setIsShowBalance] = useState(false);
    const [balance, setBalance] = useState(1000);
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

    const numberToCash = (num: number) => {
        const balance = num.toFixed(2);
        return balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className="bg-green-500 pl-1 w-full rounded-xl shadow">
            <div className="p-4 py-2 bg-white rounded-xl">
                <label className="text-gray-300 text-xs">ยอดเงินของคุณ</label>
                <div className="flex items-center justify-end gap-5">
                    <label className={`text-2xl font-bold text-gray-800`}>
                        {isShowBalance ? numberToCash(balance) : "XX.XX"}
                    </label>
                    <button className="text-gray-400" onClick={() => setIsShowBalance(!isShowBalance)}>
                        {isShowBalance ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <label className="text-gray-400 text-xs flex items-center justify-end gap-2 mt-1">
                    <FaSpinner />
                    ข้อมูลล่าสุด {minutesPassed === 0 ? "เมื่อสักครู่" : `${minutesPassed} นาทีที่แล้ว`}
                </label>
            </div>
        </div>
    );
}
