import Image from "next/image";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import gsap from "gsap";


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section1() {

    const container = useRef(null);
    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add('(min-width: 1024px)', () => {
                gsap.to('.left-card', {
                    y: -5,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.left-card',
                        start: 'top bottom',
                        end: 'top 20%',
                        scrub: true,
                    },
                });
                gsap.to('.right-card', {
                    y: -5,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.right-card',
                        start: 'top bottom',
                        end: 'top 20%',
                        scrub: true,
                    },
                });
            });

            mm.add('(min-width: 320px)', () => {
                gsap.to('.left-card', {
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.left-card',
                        start: 'top bottom',
                        end: 'bottom 10%',
                        scrub: true,
                    },
                });

                gsap.to('.right-card', {
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.right-card',
                        start: 'top bottom',
                        end: 'bottom 50%',
                        scrub: true,
                    },
                });

            });

            gsap.to('.mid-card', {
                y:-5,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.mid-card',
                    start: 'top bottom',
                    end: 'bottom 10%',
                    scrub: true,
                },
            });
            return () => {
                mm.revert();
            };
        }, {scope: container});

    return (
        <section ref={container}
                 className="flex h-screen w-screen items-center relative">
            <div className="section01-title">
                27th小型期末成發
            </div>
            <div className="card-container">
                <div className="left-card">
                    <Image
                        src="/card_left.jpg"
                        alt={"Loading"}
                        width={650}
                        height={700}
                    />
                </div>
                <div className="mid-card">
                    <Image
                        src="/card_mid.jpg"
                        alt={"Loading"}
                        width={650}
                        height={700}
                    />
                </div>
                <div className="right-card">
                    <Image
                        src="/card_right.jpg"
                        alt={"Loading"}
                        width={650}
                        height={700}
                    />
                </div>
            </div>
        </section>
    )
}