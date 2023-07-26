import {type NextPage} from "next";
import Navbar from "~/components/Navbar";


const CV: NextPage = () => {

    return (
        <>
            <Navbar activePageId={'1'}/>
            <main>
                <h1 className="text-5xl font-medium py-40 md:px-40 tracking-tight sm:text-[5rem] animate-fade-up animate-duration-[6000ms]">
                    CV
                </h1>
            </main>
        </>
    );
};

export default CV;
