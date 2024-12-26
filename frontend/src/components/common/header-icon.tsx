import Image from "next/image";

export default function HeaderIcon() {

    const iconSrcList = ["/instagram_icon", "/facebook_icon", "/youtube_icon"]
    const iconSrcLink = ["https://www.instagram.com/ntust_hdc/", "https://www.facebook.com/NTUST.HDC", "https://www.youtube.com/channel/UCr3bdKBikyXCd41djDYS-Kw"]

    return (
        <div className="flex flex-row gap-x-6 pr-16">
            {iconSrcList.map((src, index) => (
                <div key={index} className="icon">
                    <a href={iconSrcLink[index]} target="_blank">
                        <Image src={`${src}.png`} alt={"Loading"} width={32} height={32}/>
                    </a>
                </div>
            ))}
        </div>
    )
}