import MenuList from "@/components/Manage/MenuList";
import BalanceCard from "@/components/Manage/Transaction/BalanceCard";
import TransactionHistry from "@/components/Manage/Transaction/TransactionHistry";
import Navbar from "@/components/Navigation/Navbar";

export default function Transaction() {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <BalanceCard />
                <div className="px-2">
                    <MenuList />
                    <div className="px-2">
                        <TransactionHistry />
                    </div>
                </div>
            </div>
        </>
    )
}