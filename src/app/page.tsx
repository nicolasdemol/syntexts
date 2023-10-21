import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-16 mt-28 sm:mt-28 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-16 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <Image
            src="/openai.png"
            alt="openai logo"
            width={24}
            height={24}
            quality={100}
          />
          <p className="text-sm font-semibold text-gray-700">
            Chat GPT-4 supported
          </p>
        </div>
        <h1 className="flex flex-wrap text-5xl md:text-7xl lg:text-7xl tracking-tighter font-extrabold">
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--develop-start-gradient)] to-[var(--develop-end-gradient)] tracking-tight">
              Chat
            </span>{" "}
            with your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--develop-start-gradient)] to-[var(--develop-end-gradient)] tracking-tight">
              docs
            </span>{" "}
            in seconds.
          </span>
        </h1>
        <p className="mt-16 max-w-prose text-zinc-700 sm:text-xl">
          Syntexts allows you to have conversations with any PDF document.
          Simply upload your file and start asking questions right away.
        </p>
        <div className="flex space-x-4 mt-16">
          <Link
            className={buttonVariants({
              size: "lg",
            })}
            href="/dashboard"
            target="_blank"
          >
            Get started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
            })}
            href="/dashboard"
            target="_blank"
          >
            Learn SynTexts
          </Link>
        </div>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div className="mt-48">
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
          <div className="flex flex-col mb-8 justify-start flex-1">
            <span className="h-[100px] w-[1px] bg-gradient-to-t self-center from-[var(--develop-start-gradient)] to-white"></span>
            <span className="mb-6 self-center inline-flex text-white justify-center items-center h-[40px] w-[40px] rounded-full bg-gradient-to-r from-[var(--develop-start-gradient)] to-[var(--develop-end-gradient)] font-semibold">
              1
            </span>
            <h3 className="mb-8 self-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--develop-start-gradient)] to-[var(--develop-end-gradient)]">
              Docs
            </h3>
          </div>
          <div className="flex flex-col items-center px-8">
            <h4 className="text-5xl sm:text-center sm:text-6xl md:text-5xl lg:text-6xl tracking-tighter font-bold mb-8">
              Simplify the work for you
            </h4>
            <p className="text-center md:text-lg lg:text-xl max-w-[48rem] text-gray-600">
              Learn more, faster and better. Unecessary informations that slow
              your work, so you and your team can focus on learning the
              essential.
            </p>
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.png"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="flex flex-col mb-8 justify-start flex-1">
          <span className="h-[100px] w-[1px] bg-gradient-to-t self-center from-[var(--preview-start-gradient)] to-white"></span>
          <span className="mb-6 self-center inline-flex text-white justify-center items-center h-[40px] w-[40px] rounded-full bg-gradient-to-r from-[var(--preview-start-gradient)] to-[var(--preview-end-gradient)] font-semibold">
            2
          </span>
          <h3 className="mb-8 self-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--preview-start-gradient)] to-[var(--preview-end-gradient)]">
            Chat
          </h3>
        </div>
        <div className="flex flex-col items-center px-8">
          <h4 className="text-5xl sm:text-center md:text-5xl lg:text-6xl tracking-tighter font-bold mb-8">
            Start chatting in minutes
          </h4>
          <p className="text-center md:text-lg lg:text-xl max-w-[48rem] text-gray-600">
            Chatting to your PDF files has never been easier than with SynTexts
            AI.
          </p>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your PDF file
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className="mt-2 text-zinc-700">
                It&apos;s that simple. Try out Syntexts today - it really takes
                less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.png"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
