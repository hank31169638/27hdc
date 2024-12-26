import HeaderIcon from "@/components/common/header-icon";
import Link from 'next/link';

export default function Header() {
    return (
        <header className={`header`}>

            <div className="text-2xl">
                <Link href="/winter_vacation_train">寒訓師資</Link>
            </div>

            <HeaderIcon/>

            {/* Modal */}
            <div className="fixed bg-gray-300
            w-screen h-[80px] opacity-5
            rounded-b-xl -z-10
            "/>
        </header>
    )
}