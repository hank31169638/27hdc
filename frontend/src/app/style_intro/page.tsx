"use client"

import {
    SectionIndex,
    SectionHiphop,
    SectionBreaking,
    SectionFemale,
    SectionHouse,
    SectionLocking,
    SectionPopping
} from "../../components/winter_vacation";

export default function Page() {

    const handleStyleClick = (id: string) => {
        const element = document.getElementById(`section-${id}`);
        element?.scrollIntoView({behavior: 'smooth'});
        console.log(element)
    };

    return (
        <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory text-2xl">
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