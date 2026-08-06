import { z } from "zod";

export const exampleSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Mínimo 8 caracteres"),
});

export type ExampleFormData = z.infer<typeof exampleSchema>;
