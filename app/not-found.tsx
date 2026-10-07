import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[100svh] flex-col items-start justify-center px-5 py-24 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-sm text-rhode-muted">404</p>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.75rem,9vw,5.5rem)] font-semibold leading-[0.95] tracking-display text-rhode-dark">
          This page didn&apos;t make the final cut
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-rhode-muted">
          The link may be old or mistyped. The portfolio is one page away.
        </p>
        <Link
          href="/"
          className="press mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-rhode-dark px-6 text-[15px] font-medium text-rhode-light hover:bg-black"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
