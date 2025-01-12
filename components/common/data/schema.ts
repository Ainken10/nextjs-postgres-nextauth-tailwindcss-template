import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})
export const truckTripSchema = z.object({
  id: z.string(),
  truckId: z.string(),
  driverId: z.string(),
  startLocation: z.string(),
  endLocation: z.string(),
  startTime: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date()
  ),
  endTime: z.preprocess(
    (arg) => (typeof arg === "string" ? new Date(arg) : arg),
    z.date().optional()
  ),
  cargoDetails: z.string().optional(),
  weight: z.number().optional(),
  distance: z.number().optional(),
  status: z.enum(["planned", "in-progress", "completed", "canceled"]),
  fuelConsumption: z.number().optional(),
  checkpoints: z
    .array(
      z.object({
        location: z.string(),
        time: z.preprocess(
          (arg) => (typeof arg === "string" ? new Date(arg) : arg),
          z.date()
        ),
      })
    )
    .optional(),
});
export type TruckTrip = z.infer<typeof truckTripSchema>
export type Task = z.infer<typeof taskSchema>
