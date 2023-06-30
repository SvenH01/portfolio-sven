import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col">
          <Navbar/>
        <div className="container flex flex-col min-w-full items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-medium text-center md:px-40 tracking-tight sm:text-[5rem]">
            Hi my name is <span className="text-blue-800">Sven Hoving</span> and I am a Software Developer
          </h1>
          <div className="flex">
              <h1 className="font-Josefin font-semibold text-2xl text-center py-4">This site is still in progress, please come back later!</h1>
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
      </main>
    </>
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
