import { z } from "zod";

/**
 * Dummy validation, could be more precise
 */
const ShowValidator = z.object({
  title: z.string().min(1).max(255),
  year: z.number(),
  description: z.string(),
});

export { ShowValidator }