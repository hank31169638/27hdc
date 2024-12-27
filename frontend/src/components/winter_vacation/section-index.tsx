import DanceStyleLine from "@/components/winter_vacation/index_components/dance-style-line";
import React from "react";

interface DanceStyleLineProps {
    onStyleClick: (id: string) => void;
}

const SectionIndex: React.FC<DanceStyleLineProps> = ({ onStyleClick }) => {


    return (
        <section className="flex flex-col justify-center items-center snap-start snap-always relative">
            <DanceStyleLine onStyleClick={onStyleClick}/>
            <div className="absolute sm:bottom-1/4 sm:w-auto sm:left-auto phone:w-[20px] phone:left-14">試試看點擊圓點會發生甚麼事情吧!</div>
        </section>
    )
}

export default SectionIndex;