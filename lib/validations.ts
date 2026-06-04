import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter at least 2 characters."),
  email: z.email("Enter a valid email address."),
  message: z.string().min(20, "Share a little more context.")
});

export type ContactFormValues = z.infer<typeof contactSchema>;
