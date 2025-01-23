import { z } from "zod"

export const exampleSchema = z.object({
  id: z.string().min(4),
});

export type TruckTrip = z.infer<typeof exampleSchema>
