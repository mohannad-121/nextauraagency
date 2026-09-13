import { Button } from "@/components/ui/Button";
import { GoldText } from "@/components/ui/GoldText";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#050505] text-[#F4F0E7] px-6 text-center">
      {/* Background Glow */}
      <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-[#C9A45C]/10 blur-3xl" />

      <div className="relative z-10 max-w-xl space-y-6">
        <span className="text-7xl font-mono font-light text-[#C9A45C]">404</span>

        <h1 className="text-3xl sm:text-5xl font-light tracking-tight uppercase leading-tight">
          THIS FUTURE <br />
          <GoldText serif>DOESN&apos;T EXIST YET.</GoldText>
        </h1>

        <p className="text-xs sm:text-sm text-[#8D8D8D]">
          The route you are looking for has not been created or has moved within the NextAura ecosystem.
        </p>

        <div className="pt-4">
          <Button href="/">Return To Ecosystem</Button>
        </div>
      </div>
    </main>
  );
}
