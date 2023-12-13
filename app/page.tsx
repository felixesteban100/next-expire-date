import NavLinks from "@/components/own/NavLinks"
import { PAGE_BACKGROUND } from "@/lib/constants"

export default function Home() {
  return (
    <div
      // style={{ background: `url(${randomImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}
      // className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
      // className={`overflow-hidden bg-gradient-to-tl from-background via-foreground/20 to-background`}
      
      //bg-[linear-gradient(to top left,#F7941E,#004E8F)] https://gradient.page/vibrant-vista/vibrant-vista-001.jpg
      className={`overflow-hidden ${PAGE_BACKGROUND}`}
    >

      <div className="z-50 flex flex-col items-center justify-center w-screen h-screen ">
        <NavLinks />

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-foreground/50 to-foreground/0" />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-primary cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text font-bold flex justify-center items-center gap-2">
          {/* ch<Atom
            width={100}
            height={100}
            className={`object-contain text-primary animate-spin1`}
          />r4c73 */}
          {/* \/unexpire/\ */}
          unexpire{/* <CalendarCheck className="text-primary text-4xl animate-title font-display sm:text-6xl"/> */}
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-foreground/50 to-foreground/0" />
        {/* <Atom
          width={200}
          height={200}
          // className={`object-contain animate-spin1 text-primary`}
          className={`object-contain text-primary animate-spin1`}
        /> */}
        <div className="my-16 text-center animate-fade-in">
          {/* <Atom
            width={100}
            height={100}
            // className={`object-contain animate-spin1 text-primary`}
            className={`object-contain animate-spin1 text-white/50`}
          /> */}
          {/* <h2 className="text-sm ">
            I'm building{" "}
            <Link
              target="_blank"
              href="https://unkey.dev"
              className="underline duration-500 hover:text-primary"
            >
              unkey.dev
            </Link> to solve API authentication and authorization for developers.
          </h2> */}
        </div>
      </div>
    </div>
  )
}
