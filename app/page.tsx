import Image from "next/image";
import Link from "next/link";
import HeroSpotlight from "./hero-spotlight";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { works } from "@/lib/works";
import TallyEmbed from "./tally-embed";

export default function Home() {
  return (
    <main className="bg-[#e8e3da] text-[#1a1a1a]">
      <section
        id="hero"
        className="relative flex min-h-svh flex-col overflow-hidden px-6 py-8 sm:px-10 lg:px-16"
      >
        <Image
          src="/hero-mesh.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#e8e3da]/55 via-[#e8e3da]/20 to-transparent" />
        <HeroSpotlight />

        <header className="relative z-10 flex items-start justify-between gap-6">
          <span className="text-base font-semibold tracking-tight">
            Junseong Park<sup className="text-[0.5em]">®</sup>
          </span>
          <p className="hidden text-right text-xs leading-relaxed tracking-wide text-[#1a1a1a]/60 sm:block">
            UX Designer &amp; Researcher
            <br />
            Samsung Electronics MX
          </p>
        </header>

        <div className="relative z-10 flex flex-1 flex-col justify-center py-16">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <div className="flex flex-col gap-8">
              <BlurFade delay={0.1}>
                <h1 className="text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
                  Junseong
                  <br />
                  Park
                </h1>
              </BlurFade>
              <BlurFade delay={0.25}>
                <p className="max-w-md text-lg leading-relaxed text-[#1a1a1a]/80">
                  심물리학 및 인간공학 기반의 분석적 인사이트를 바탕으로
                  <br />
                  사용자에게 의미 있는 경험을 설계해요.
                </p>
              </BlurFade>
              <BlurFade delay={0.4}>
                <a
                  href="#projects"
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-[#e8e3da] transition-colors hover:bg-black"
                >
                  프로젝트 보기
                  <span className="transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
              </BlurFade>
            </div>

            <BlurFade
              delay={0.55}
              className="w-full max-w-sm self-end justify-self-end"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src="/avatar-clean.png"
                  alt="Junseong Park 일러스트 초상"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 384px"
                  className="object-contain object-bottom"
                />
              </div>
            </BlurFade>
          </div>
        </div>

        <footer className="relative z-10 flex items-end justify-between gap-6 border-t border-[#1a1a1a]/15 pt-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/50">
            From Pohang &amp; Seoul, Korea
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/50">
            Scroll ↓
          </span>
        </footer>
      </section>

      <section
        id="about"
        className="bg-[#0e0e0e] px-6 py-24 text-[#e8e3da] sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          <BlurFade inView delay={0.1}>
            <span className="text-xs uppercase tracking-[0.25em] text-[#e8e3da]/50">
              About
            </span>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="max-w-3xl text-2xl font-light leading-relaxed sm:text-3xl">
              UX 디자이너.
              <br />
              데이터를 기반으로 사용자 경험을 설계하고,
              <br />
              나아가 감성적·정서적 연결까지 아우르는
              <br />
              디자이너이자 연구자예요.
            </p>
          </BlurFade>

          <div className="flex flex-col gap-6">
            <BlurFade inView delay={0.3}>
              <span className="text-xs uppercase tracking-[0.25em] text-[#e8e3da]/40">
                Career
              </span>
            </BlurFade>
            <div className="border-t border-white/10">
              <BlurFade
                inView
                delay={0.4}
                className="flex flex-col gap-1 border-b border-white/10 py-6 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-lg sm:text-xl">
                  Senior UX Designer @ Samsung Electronics MX
                </span>
                <span className="text-sm tabular-nums text-[#e8e3da]/50">
                  - Now
                </span>
              </BlurFade>
              <BlurFade
                inView
                delay={0.5}
                className="flex flex-col gap-1 border-b border-white/10 py-6 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-lg sm:text-xl">
                  Ph.D. (Human Factors, Psychophysics, HCI) @ POSTECH
                </span>
                <span className="text-sm tabular-nums text-[#e8e3da]/50">
                  - 2025
                </span>
              </BlurFade>
              <BlurFade
                inView
                delay={0.6}
                className="flex flex-col gap-1 border-b border-white/10 py-6 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-lg sm:text-xl">
                  B.S. (Industrial &amp; Management Engineering) @ POSTECH
                </span>
                <span className="text-sm tabular-nums text-[#e8e3da]/50">
                  - 2018
                </span>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          <BlurFade inView delay={0.1}>
            <span className="text-xs uppercase tracking-[0.25em] text-[#1a1a1a]/50">
              Projects
            </span>
          </BlurFade>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work, index) => (
              <BlurFade key={work.slug} inView delay={0.1 + index * 0.1}>
                <Link href={`/works/${work.slug}`} className="block h-full">
                  <MagicCard
                    className="h-full overflow-hidden rounded-2xl border border-[#1a1a1a]/10"
                    gradientFrom="#f0ebe3"
                    gradientTo="#e8e3da"
                    gradientColor="#1a1a1a"
                    gradientOpacity={0.15}
                  >
                    <div className="flex h-full flex-col bg-[#e8e3da]">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                          src={work.thumbnail}
                          alt={work.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-2 p-5">
                        <span className="text-xs text-[#1a1a1a]/45">
                          {work.org}
                        </span>
                        <h3 className="text-base font-medium leading-snug tracking-tight">
                          {work.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#1a1a1a]/60">
                          {work.summary}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#0e0e0e] px-6 py-24 text-[#e8e3da] sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:gap-16">
          <BlurFade inView delay={0.1}>
            <span className="text-xs uppercase tracking-[0.25em] text-[#e8e3da]/50">
              Contact
            </span>
          </BlurFade>

          <div className="flex flex-col gap-6 sm:gap-8">
            <BlurFade inView delay={0.2}>
              <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
                Project with Junseong Park
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.3}>
              <p className="max-w-2xl text-base leading-relaxed text-[#e8e3da]/70 sm:text-lg">
                함께 새로운 경험을 설계하고 싶다면 간단히 남겨주세요.
              </p>
            </BlurFade>
          </div>

          <BlurFade inView delay={0.4}>
            <TallyEmbed />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
