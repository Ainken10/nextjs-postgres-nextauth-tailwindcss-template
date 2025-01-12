import { z } from "zod"


export const truckTripSchema = z.object({
  id: z.string(),
  title: z.string(),
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

// export function ProfileForm() {
//     // 1. Define your form.
//     const form = useForm<z.infer<typeof formSchema>>({
//       resolver: zodResolver(formSchema),
//       defaultValues: {
//         username: "",
//       },
//     })

export type TruckTrip = z.infer<typeof truckTripSchema>
