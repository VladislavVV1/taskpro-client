
import Link from "next/link";
import HeroIllustration from "@/assets/icons/hero-illustration.svg";
import HeroIllustrationSM from "@/assets/icons/hero-illustration-sm.svg";
import { BsFillLightningChargeFill } from "react-icons/bs";
// This is the main page of the application, serving as a landing page
export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-[20px]">
      {/* main content block */}
      <div className="relative z-10 max-w-[473px] flex flex-col items-center">

        {/* Logo + Image */}
        <div className="flex flex-col items-center gap-6 mb-6">
          <HeroIllustration className="w-[162px] h-[162px] hidden md:block"/>
          <HeroIllustrationSM className="w-[124px] h-[124px] md:hidden"/>
          <div className="flex items-center gap-3">
            {/* Lightning Icon Box */}
            <div className="md:w-[48px] md:h-[48px] w-[40px] h-[40px] rounded-lg bg-[#161616] flex items-center justify-center">
              <BsFillLightningChargeFill className="md:w-[18px] md:h-[24px] w-[15px] h-[20px] fill-white text-white" />
            </div>
            {/* Title */}
            <h1 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.04em] text-[#161616] font-poppins">
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
          className="w-full max-w-[344px] h-[49px] bg-[#161616] rounded-lg text-center flex items-center justify-center text-white text-[14px] font-medium hover:opacity-90 transition mb-4"
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