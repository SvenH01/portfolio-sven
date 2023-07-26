import {type NextPage} from "next";
import Navbar from "~/components/Navbar";
import bg_mobile from '~/assets/background_blob_mobile.svg'
import bg from '~/assets/background_blob.svg'
import foto_me from '~/assets/foto_me.jpeg'
import python from '~/assets/tech_stack/python.svg'
import mongo from '~/assets/tech_stack/mongo.svg.png'
import nextjs from '~/assets/tech_stack/nextjs.svg'
import react from '~/assets/tech_stack/react.svg.png'
import java from '~/assets/tech_stack/java.png'
import gratuation_photo from '~/assets/gratuation_photo.jpeg'
import type {CSSProperties, MutableRefObject} from "react";
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'
import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";

const default_background_style: CSSProperties = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
    backgroundImage: `url(${bg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
    animation: "resize-intro",
    animationDuration: "4s",
    maxWidth: "100vw",
    overflow: "hidden",
}

const mobile_background_style: CSSProperties = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
    backgroundImage: `url(${bg_mobile.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
    animation: "resize-intro",
    animationDuration: "4s",
    maxWidth: "100vw",
    overflow: "hidden",
}


const Home: NextPage = () => {
    const parallax: MutableRefObject<IParallax> = useRef<IParallax>(null!)

    return (
        <>
            <Navbar activePageId={'0'}/>
            <main>
                <Parallax ref={parallax} pages={2}>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return */}
                    <ParallaxLayer speed={0.5} factor={1} onClick={() => parallax.current.scrollTo(0.47)} offset={0} className="overflow-hidden">
                        <div style={default_background_style} className={"hidden sm:block"} id={'main-background'}/>
                        <div style={mobile_background_style} className={"sm:hidden block"} id={'mobile-background'}/>
                        <div id={'main-content overflow-hidden'}>
                            <div className="container flex flex-col min-w-full items-center justify-center gap-12 px-4 py-16 ">
                                <h1 className="text-5xl font-medium text-center py-40 md:px-40 tracking-tight sm:text-[5rem] animate-fade-up animate-duration-[6000ms]">
                                    <span className="text-blue-800">Sven Hoving</span><br/>Software Developer
                                </h1>
                            </div>
                        </div>
                    </ParallaxLayer>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return */}
                    <ParallaxLayer speed={1} offset={0.999999}  factor={1} className={"bg-[#0066FF]"} onClick={() => parallax.current.scrollTo(1)}>
                        <div className={"flex-none sm:flex p-10 gap-20"}>
                            <div className={"sm:flex-1 flex-none align-top text-center"}>
                                <h1 className=" font-Oswald text-white">About me</h1>
                            </div>
                            <div className={"sm:flex-1 flex-none"}>
                                <p className={"text-white bottom-0 py-10"}>
                                    My name is Sven and I graduated HBO-ICT:Software Engineering in 4 years at the University of Applied Sciences in Amsterdam. At the HvA I learned about concepts such as OOP, Databases, Webframeworks and Algorithms & Datastructures. Besides these necessary concepts I have also worked in different project groups where I learned to apply my professional skills in a SCRUM based context.
                                </p>
                                <div className={"w-full flex justify-center"}>
                                    <Link
                                        href={"https://www.linkedin.com/in/sven-hoving-39122a1ab/"}
                                        type="button"
                                        className="z-10 text-white hover:bg-[#acaff9] bg-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
                                    >
                                        <svg
                                            className="w-6 h-6 text-blue-500 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>



                                {/*<Image className={"flex pt-10 justify-self-center"} width={400} height={400} src={gratuation_photo.src} alt={"photo of Sven Hoving"}></Image>*/}
                            </div>
                        </div>

                        <div className={"flex-none sm:flex sm:flex-row p-10 gap-20 bg-[#0066FF]"} >
                            <div className={"sm:flex-1 flex-none align-top text-center"}>
                                <h1 className="font-Oswald text-white ">Work experience</h1>
                            </div>
                            <div className={"sm:flex-1 flex-none"}>
                                <p className={"text-white bottom-0 pt-10"}>
                                    I gained working experience trough various internships at companies such as Foleon, Youplan and Mud Jeans. Besides that I also worked with 6 students on a start up project named TuneBoard. My experience is mainly in the front-end, but during my studies I also learned about Java Spring and NodeJS in which I&apos;m still familiar today </p>
                            </div>
                        </div>
                    </ParallaxLayer>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return */}
                    <ParallaxLayer speed={0.7} offset={1} className={"-z-10 mt-[64px]"} >
                        <h1 className="font-Oswald text-center">Tech stack</h1>
                        <div className={"flex flex-row justify-center align h-20 mt-10 px-52"}>
                        <div className={"flex-row flex-grow"}>
                            <Image width={100} height={100} src={react.src} style={{width: "auto", height: "100%", objectFit: "contain"} }
                                   alt='React logo'/>
                        </div>
                            <div className={"flex-row flex-grow"}>
                            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */}
                            <Image width={100} height={100} src={nextjs.src} style={{width: "auto", height: "100%", objectFit: "contain"} }
                                   alt={"NextJS logo"}/>
                        </div>
                            <div className={"flex-row flex-grow"}>
                            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */}
                            <Image width={100} height={100} style={{width: "auto", height: "100%", objectFit: "contain"} } src={python.src} alt={"Python logo"}/>
                        </div>
                            <div className={"flex-row flex-grow"}>
                            <Image width={100} height={100} style={{width: "auto", height: "100%", objectFit: "contain"} } src={java.src} alt={"Java logo"}/>
                        </div>
                            <div className={"flex-row flex-grow"}>
                            <Image width={200} height={200} style={{width: "auto", height: "100%", objectFit: "contain"} } src={mongo.src} alt={"Mongo logo"}/>
                        </div>
                        </div>

                    </ParallaxLayer>
                </Parallax>
            </main>
        </>
    );
};

export default Home;
