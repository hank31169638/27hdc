"use client"
import { useRef } from "react";

import {
    SectionIndex,
    SectionHiphop,
    SectionBreaking,
    SectionFemale,
    SectionHouse,
    SectionLocking,
    SectionPopping
} from "@/components/winter_vacation";

export default function Page() {

    const handleStyleClick = (id: string) => {
        const element = document.getElementById(`section-${id}`);
        element?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory text-2xl"
             id="scroll-container"
        >
            <SectionIndex onStyleClick={handleStyleClick}/>
            <SectionHiphop/>
            <SectionBreaking/>
            <SectionFemale/>
            <SectionLocking/>
            <SectionHouse/>
            <SectionPopping/>
        </div>
    )
}