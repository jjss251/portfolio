import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { getWork, works } from "@/lib/works";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-svh bg-[#e8e3da] text-[#1a1a1a]">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <BlurFade delay={0.05}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#1a1a1a]/60 transition-colors hover:text-[#1a1a1a]"
          >
            ← 모든 작업물 보기
          </Link>
        </BlurFade>

        <div className="mt-12 flex flex-col gap-10">
          <BlurFade delay={0.15}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#1a1a1a]/10">
              <Image
                src={work.thumbnail}
                alt={work.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {work.title}
            </h1>
          </BlurFade>

          <BlurFade delay={0.35}>
            <p className="text-lg leading-relaxed text-[#1a1a1a]/80">
              {work.description}
            </p>
          </BlurFade>

          {work.links.length > 0 && (
            <BlurFade delay={0.45}>
              <div className="flex flex-wrap gap-3">
                {work.links.map((link) => (
                  <Button key={link.href} asChild variant="outline" size="lg">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2 rounded-full border-[#1a1a1a]/15 bg-transparent px-6 hover:bg-[#1a1a1a]/5"
                    >
                      {link.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </BlurFade>
          )}
        </div>
      </article>
    </main>
  );
}
