"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, socials } from "@/data/portfolio";
import { contactSchema } from "@/lib/validations";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const linkedinHandle = profile.linkedin.replace(
  /^https?:\/\/(www\.)?linkedin\.com\//,
  "linkedin.com/"
);

function buildMailtoHref(values: { name: string; email: string; message: string }) {
  const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
  const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`);
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export function ContactSection() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message")
    });

    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (field === "name" || field === "email" || field === "message") {
          nextErrors[field] ??= issue.message;
        }
      }
      setErrors(nextErrors);
      setOpened(false);
      return;
    }

    setErrors({});
    setOpened(true);
    window.location.href = buildMailtoHref(parsed.data);
  }

  return (
    <section id="contact" className="container py-16 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="The fastest way to reach me is by email or LinkedIn. Prefer to write a quick note here? The form below opens your email app with the message ready to send."
      />
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
        <Reveal className="glass rounded-2xl p-5 sm:p-6">
          <h3 className="text-xl font-semibold sm:text-2xl">Reach me directly</h3>
          <p className="text-muted-foreground mt-4 text-sm leading-7 sm:text-base">
            Best fit: front-end roles, React and Next.js builds, landing pages, and component work
            for teams that care about clean, accessible UI.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((social) => (
              <Link
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="border-border bg-background/50 hover:border-primary hover:text-primary grid size-11 place-items-center rounded-2xl border transition sm:size-12"
              >
                <social.icon className="size-5" />
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  autoComplete="name"
                  aria-invalid={errors.name ? true : undefined}
                  className="w-full bg-transparent outline-none"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-invalid={errors.email ? true : undefined}
                  className="w-full bg-transparent outline-none"
                  placeholder="you@example.com"
                />
              </Field>
            </div>
            <Field label="Message" htmlFor="message" error={errors.message} className="mt-5">
              <textarea
                id="message"
                name="message"
                required
                minLength={20}
                aria-invalid={errors.message ? true : undefined}
                className="min-h-36 w-full resize-none bg-transparent outline-none sm:min-h-40"
                placeholder="Tell me about the role, project, or collaboration."
              />
            </Field>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit">
                <Send className="size-4" />
                Compose email
              </Button>
              {opened ? (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-muted-foreground text-sm"
                >
                  Your email app should open.{" "}
                  <Link href={`mailto:${profile.email}`} className="text-primary underline">
                    Nothing happened?
                  </Link>
                </motion.p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "border-border bg-background/55 focus-within:border-primary block rounded-2xl border p-4 transition",
        error ? "border-accent/70" : "",
        className
      )}
    >
      <span className="text-muted-foreground mb-3 block text-sm font-medium">{label}</span>
      {children}
      {error ? <span className="text-accent mt-3 block text-sm">{error}</span> : null}
    </label>
  );
}
