'use client'

import Section00 from "@/components/section/homepage/section00";
import Section01 from "@/components/section/homepage/section01";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const section0Ref = useRef(null);
    const section1Ref = useRef(null);

    useGSAP(() => {
        gsap.set([section0Ref.current, section1Ref.current], {
            opacity: 0,
            y: 50
        });

        gsap.to(section0Ref.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section0Ref.current,
                start: "top center",
                toggleActions: "play none none reverse",
            }
        });

        gsap.to(section1Ref.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section1Ref.current,
                start: "top center",
                toggleActions: "play none none reverse",
            }
        });
    }, []);

    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <div ref={section0Ref} className="w-full opacity-0">
                <Section00/>
            </div>
            <div ref={section1Ref}>
                <Section01/>
            </div>
        </div>
    );
}