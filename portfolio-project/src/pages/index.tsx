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
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import {useRef} from "react";
import Image from "next/image";

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
            <Navbar/>
            <main>
                <Parallax ref={parallax} pages={2}>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return */}
                    <ParallaxLayer speed={1} factor={1} onClick={() => parallax.current.scrollTo(0.34)} offset={0} className="overflow-hidden">
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
                    <ParallaxLayer speed={2} offset={0.99}  factor={1} className={"bg-[#0066FF]"} onClick={() => parallax.current.scrollTo(1)}>
                        <div className={"flex-none sm:flex p-10 gap-20"}>
                            <div className={"sm:flex-1 flex-none align-top text-center"}>
                                <h1 className="font-Oswald text-white">About me</h1>
                            </div>
                            <div className={"sm:flex-1 flex-none"}>
                                <p className={"text-white bottom-0 pt-10"}>
                                    I graduated HBO-ICT:Software Engineering in 4 years at the University of Applied Sciences in Amsterdam. At the HvA I learned about concepts such as OOP, Databases, Webframeworks and Algorithms & Datastructures. Besides these necessary concepts I have also worked in different project groups where I learned to apply my professional skills in a SCRUM based context.
                                </p>
                                <Image className={"flex pt-10 justify-self-center"} width={400} height={400} src={gratuation_photo.src} alt={"photo of Sven Hoving"}></Image>
                            </div>
                        </div>

                        <div className={"flex-none sm:flex sm:flex-row-reverse p-10 gap-20 bg-[#0066FF]"} >
                            <div className={"sm:flex-1 flex-none align-top text-center"}>
                                <h1 className="font-Oswald text-white ">Work experience</h1>
                            </div>
                            <div className={"sm:flex-1 flex-none"}>
                                <p className={"text-white bottom-0 pt-10"}>
                                    I gained working experience trough various internships at companies such as Foleon, Youplan and Mud Jeans.                                </p>
                            </div>
                        </div>
                    </ParallaxLayer>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return */}
                    <ParallaxLayer offset={1} className={"-z-10"} >
                        <h1 className="font-Oswald text-center">Tech stack</h1>
                        <div className={"flex flex-row justify-center align-middle h-screen"}>
                        <div>
                            <Image width={100} height={100} src={react.src} alt={"React logo"}/>
                        </div>
                        <div>
                            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */}
                            <Image width={100} height={100} src={nextjs.src} alt={"NextJS logo"}/>
                        </div>
                        <div>
                            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */}
                            <Image width={100} height={100} src={python.src} alt={"Python logo"}/>
                        </div>
                        <div>
                            <Image width={100} height={100} src={java.src} alt={"Java logo"}/>
                        </div>
                        <div>
                            <Image width={200} height={200} src={mongo.src} alt={"Mongo logo"}/>
                        </div>
                        </div>

                    </ParallaxLayer>
                </Parallax>
            </main>
        </>
    );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//     const {data: sessionData} = useSession();
//
//     const {data: secretMessage} = api.example.getSecretMessage.useQuery(
//         undefined, // no input
//         {enabled: sessionData?.user !== undefined},
//     );
//
//     return (
//         <div className="flex flex-col items-center justify-center gap-4">
//             <p className="text-center text-2xl text-white">
//                 {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//                 {secretMessage && <span> - {secretMessage}</span>}
//             </p>
//             <button
//                 className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//                 onClick={sessionData ? () => void signOut() : () => void signIn()}
//             >
//                 {sessionData ? "Sign out" : "Sign in"}
//             </button>
//         </div>
//     );
// };
