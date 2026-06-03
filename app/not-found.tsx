import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold">This route drifted out of orbit.</h1>
        <p className="mt-4 text-muted-foreground">Return to the portfolio experience.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-medium transition hover:border-primary"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>
      </section>
    </main>
  );
}
