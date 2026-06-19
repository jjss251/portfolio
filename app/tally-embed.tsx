"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function TallyEmbed() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (
        event.origin === "https://tally.so" &&
        event.data?.type === "TALLY_FORM_SUBMITTED"
      ) {
        setSubmitted(true);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  if (submitted) {
    return (
      <div className="flex min-h-48 w-full items-center justify-center rounded-2xl bg-[#f5f1ea] px-8 py-16">
        <p className="text-center text-base text-[#1a1a1a]/60 sm:text-lg">
          문의가 접수됐어요. 확인 후 답장드릴게요.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-[#f5f1ea]">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof (window as Window & { Tally?: { loadEmbeds: () => void } }).Tally !== "undefined") {
            (window as Window & { Tally?: { loadEmbeds: () => void } }).Tally?.loadEmbeds();
          }
        }}
      />
      <iframe
        data-tally-src="https://tally.so/embed/dWg9ao?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="400"
        title="Project with Junseong Park"
        style={{ border: "none" }}
        className="w-full"
      />
    </div>
  );
}
