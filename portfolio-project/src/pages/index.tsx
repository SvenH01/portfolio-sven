import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Navbar from "~/components/Navbar";
import bg_mobile from '~/assets/background_blob_mobile.svg'
import bg from '~/assets/background_blob.svg'
import type {CSSProperties} from "react";

const default_background_style: CSSProperties = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
    backgroundImage: `url(${bg.src})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    position: "absolute",
    zIndex: -1,
    animation: "resize-intro",
    animationDuration: "4s",
    maxWidth: "100vw",
    overflow: "hidden"
}

const mobile_background_style: CSSProperties = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions
    backgroundImage: `url(${bg_mobile.src})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    position: "absolute",
    zIndex: -1,
    animation: "resize-intro",
    animationDuration: "4s",
    maxWidth: "100vw",
    overflow: "hidden"
}



const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <main>
      <div className="min-h-screen max-h-screen min-w-full max-w-screen-md overflow-hidden">
          <div style={default_background_style} className={"hidden sm:block"} id={'main-background'}/>
          <div style={mobile_background_style} className={"sm:hidden block"} id={'mobile-background'}/>
          <div id={'main-content overflow-hidden'}>
              <Navbar/>
              <div className="container flex flex-col min-w-full items-center justify-center gap-12 px-4 py-16 ">
                  <h1 className="text-5xl font-medium text-center py-40 md:px-40 tracking-tight sm:text-[5rem] animate-fade-up animate-duration-[6000ms]">
                      <span className="text-blue-800">Sven Hoving</span><br/>Software Developer
                  </h1>
                  <div className="flex">
                      <p className="font-Josefin font-semibold text-2xl text-center py-4">

                      </p>
                  </div>
                  {/*<Link*/}
                  {/*  className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4"*/}
                  {/*  href="/cv"*/}
                  {/*  // target="_blank"*/}
                  {/*>*/}
                  {/*  <h3 className="text-2xl font-bold">Curriculum vitae</h3>*/}
                  {/*  <div className="text-lg font-extralight">*/}
                  {/*    As you explore this page, you&apos;ll discover my extensive background in software development, along with my proficiency in a wide range of programming languages and technologies. I have a solid foundation in software engineering principles and gained experience by my internships, hobby projects and as full-stack developer.*/}
                  {/*  </div>*/}
                  {/*</Link>*/}
                  {/*<div*/}
                  {/*  className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4"*/}
                  {/*>*/}
                  {/*  <h3 className="text-2xl font-bold">Learning goals and competences</h3>*/}
                  {/*  <div className="text-lg font-extralight">*/}
                  {/*    In the coming years I will study mathematics, various AI topics and keep my front-end knowledge up to date. On this page, my progress will be shown for each topic, and my learning goals for every month will be displayed.*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*</div>*/}
                  {/*<div className="flex flex-col items-center gap-2">*/}
                  {/*  /!*<p className="text-2xl">*!/*/}
                  {/*  /!*  {hello.data ? hello.data.greeting : "Loading tRPC query..."}*!/*/}
                  {/*  /!*</p>*!/*/}
                  {/*  /!*<AuthShowcase />*!/*/}
                  {/*</div>*/}
              </div>
          </div>
      </div>
        <div className="flex min-h-screen flex-col bg-[#0066FF]">
            <h1 className="font-Oswald text-white text-center">Work in progress...</h1>
        </div>
    </main>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
