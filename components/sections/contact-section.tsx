"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { socials } from "@/data/portfolio";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  async function onSubmit(values: ContactFormValues) {
    void values;
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setSent(true);
    reset();
  }

  return (
    <section id="contact" className="container py-16 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Open to junior front-end opportunities"
        description="If you are hiring for an internship, junior role, or project collaboration, send a message and I will respond with my availability"
      />
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-6">
        <Reveal className="glass rounded-2xl p-5 sm:p-6">
          <h3 className="text-xl font-semibold sm:text-2xl">Ready to contribute, learn, and improve.</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Best fit: junior front-end roles, internships, React projects, landing pages, component implementation, and teams that value growth and clean UI work
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => (
              <Link
                target="_blank"
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid size-11 place-items-center rounded-2xl border border-border bg-background/50 transition hover:border-primary hover:text-primary sm:size-12"
              >
                <social.icon className="size-5" />
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-5 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} className="w-full bg-transparent outline-none" placeholder="Your name" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input {...register("email")} type="email" className="w-full bg-transparent outline-none" placeholder="you@example.com" />
              </Field>
            </div>
            <Field label="Message" error={errors.message?.message} className="mt-5">
              <textarea {...register("message")} className="min-h-36 w-full resize-none bg-transparent outline-none sm:min-h-40" placeholder="Tell me about the role, project, or collaboration." />
            </Field>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={isSubmitting}>
                <Send className="size-4" />
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
              {sent ? (
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-primary">
                  Message received. I will respond shortly
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
  error,
  children,
  className
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block rounded-2xl border border-border bg-background/55 p-4 transition focus-within:border-primary", className)}>
      <span className="mb-3 block text-sm font-medium text-muted-foreground">{label}</span>
      {children}
      {error ? <span className="mt-3 block text-sm text-accent">{error}</span> : null}
    </label>
  );
}
