import Image from "next/image";


export default function Section0() {
    return (
        <section className="star flex h-screen justify-center items-center relative">
            <div className="absolute text-[15vw] z-[-1] md:top-[5%] phone:top-[100px]"><i>
                NTUST HDC
            </i></div>
            <Image src={'/index.png'}
                   alt={'Loading'}
                   width={900}
                   height={900}
                   className='w-[900px] h-auto'
            />
        </section>
    )
}