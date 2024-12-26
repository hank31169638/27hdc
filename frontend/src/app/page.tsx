'use client'


import Image from "next/image";
import Section00 from "@/components/section/section00";
import Section01 from "@/components/section/section01";


export default function Home() {

    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <Section00/>
            <Section01/>
        </div>
    );
}
