import DanceStyleLine from "@/components/section/winter_vacation/index_components/dance-style-line";
import React from "react";

interface DanceStyleLineProps {
    onStyleClick: (id: string) => void;
}

const SectionIndex: React.FC<DanceStyleLineProps> = ({ onStyleClick }) => {


    return (
        <section className="flex items-center snap-start snap-always">
            <DanceStyleLine onStyleClick={onStyleClick}/>
        </section>
    )
}

export default SectionIndex;