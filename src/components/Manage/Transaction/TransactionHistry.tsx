"use client"
import { useState } from "react";
import { FaArrowUp, FaArrowDown, FaGift } from "react-icons/fa6";

export default function TransactionHistry() {
    const [transactionHistry, setTransactionHistry] = useState([
        { type: "income", amount: 1000, date: "20-04-2023" },
        { type: "expense", amount: 500, date: "19-04-2023" },
        { type: "invite", amount: 5, date: "18-04-2023", from: "John Doe" },
        { type: "income", amount: 2000, date: "17-04-2023" },
        { type: "expense", amount: 1500, date: "16-04-2023" }
    ]);

    const numberToCash = (num: number) => {
        const balance = num.toFixed(2);
        return balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // เรียงวันที่จากใหม่ไปเก่า แล้วเอาแค่ 3 รายการ
    const latestTransactions = [...transactionHistry]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    // แสดงข้อมูลแต่ละรายการ
    const renderIcon = (type: string) => {
        switch (type) {
            case "income":
                return <FaArrowUp className="text-green-500" />;
            case "expense":
                return <FaArrowDown className="text-red-500" />;
            case "invite":
                return <FaGift className="text-yellow-500" />;
            default:
                return null;
        }
    };

    const getLabel = (type: string) => {
        switch (type) {
            case "income":
                return "ฝากเงิน";
            case "expense":
                return "ถอนเงิน";
            case "invite":
                return "เชิญเพื่อน";
            default:
                return "ไม่ทราบประเภท";
        }
    };

    const getAmountStyle = (type: string) => {
        switch (type) {
            case "income":
                return "text-green-500";
            case "expense":
                return "text-red-500";
            case "invite":
                return "text-blue-500";
            default:
                return "";
        }
    };

    return (
        <div className="bg-cyan-500 rounded-xl shadow">
            <div className="p-4 rounded-xl bg-white">
                <h1 className="text-center">ประวัติธุรกรรมล่าสุด</h1>
                <ul className="mt-1 flex flex-col gap-2">
                    {latestTransactions.map((tx, index) => (
                        <li key={index} className="p-3 rounded-xl flex items-center justify-between bg-white border-2 border-gray-200">
                            <div className="flex gap-2 items-center">
                                <div className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm`}>
                                    {renderIcon(tx.type)}
                                </div>
                                <div className="flex flex-col items-start">
                                    <h1>
                                        {getLabel(tx.type)}
                                        {tx.type === "invite" && tx.from ? ` (${tx.from})` : ""}
                                    </h1>
                                    <label className="text-gray-300 text-xs">
                                        {tx.date}
                                    </label>
                                </div>
                            </div>
                            <div className="text-lg">
                                <label className={`${getAmountStyle(tx.type)} font-bold`}>
                                    {tx.type === "expense" ? "-" : "+"} {numberToCash(Number(tx.amount))} ฿
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
