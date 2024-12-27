import HeaderIcon from "@/components/common/header-icon";
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
    return (
        <header className={`header`}>

            <a className="hdc-icon" href="./">
                <Image src="/hdc_icon.png" alt={"Loading"} width="64" height="64" />
            </a>

            <div className="flex flex-row md:gap-x-8 phone:gap-x-6">

                <div className="text-2xl flex flex-row gap-x-6">
                    <Link href="/winter_vacation_train" className="hyper-link">寒訓師資</Link>
                    <Link href="/style_intro" className="hyper-link">舞風介紹</Link>
                </div>
                <HeaderIcon/>
            </div>

            {/* Modal */}
            <div className="fixed bg-black
            w-screen h-[80px] opacity-50
            rounded-b-xl isolate -z-10
            "/>
        </header>
    )
}