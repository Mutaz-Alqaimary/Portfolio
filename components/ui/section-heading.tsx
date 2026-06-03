import { Reveal } from "@/components/animations/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm sm:tracking-[0.32em]">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(2rem,6vw,3.75rem)] font-semibold leading-tight tracking-tight text-foreground">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-lg">{description}</p>
    </Reveal>
  );
}
