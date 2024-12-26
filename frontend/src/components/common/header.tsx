import HeaderIcon from "@/components/common/header-icon";
export default function Header() {
    return (
        <header className={`fixed w-full h-[80px] flex items-center z-[1001]`}>
            <div>
                <HeaderIcon/>
            </div>
        </header>
    )
}