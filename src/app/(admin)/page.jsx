
import Link from "next/link";
import HeroIllustration from "@/assets/icons/hero-illustration.svg";

// This is the main page of the application, serving as a landing page
export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* main content block */}
      <div className="relative z-10 w-[473px] h-[438px] flex flex-col items-center">

        {/* Logo + Image */}
        <div className="flex flex-col items-center gap-6 mb-6">
          <HeroIllustration className="w-[162px] h-[162px]" />
          
          <div className="flex items-center gap-3">
            {/* Lightning Icon Box */}
            <div className="w-12 h-12 rounded-lg bg-[#161616] flex items-center justify-center">    
                      <svg className="w-4.5 h-6 fill-white text-white">
          <use href="/sprite.svg#icon-lightning" />
        </svg> 
            </div>
            {/* Title */}
            <h1 className="text-[40px] leading-[60px] font-semibold tracking-[-0.04em] text-[#161616] font-poppins">
              Task Pro
            </h1>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-[#161616] text-[14px] leading-[18px] font-normal tracking-[-0.02em] max-w-[473px] mb-8">
          Supercharge your productivity and take control of your tasks with <strong>Task Pro</strong> — Don’t wait, start achieving your goals now!
        </p>

        {/* Register button */}
        <Link
          href="/register"
          className="w-[344px] h-[49px] bg-[#161616] rounded-lg flex items-center justify-center text-white text-[14px] font-medium tracking-[-0.02em] hover:opacity-90 transition mb-4"
        >
          Registration
        </Link>
        {/* Login link */}
        <Link
          href="/login"
          className="text-[#161616] text-[14px] font-medium tracking-[-0.02em] hover:underline"
        >
          Log In
        </Link>
      </div>
    </main>
  )
}