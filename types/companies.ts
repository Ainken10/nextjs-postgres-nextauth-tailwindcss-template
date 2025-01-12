

export type Company = {
    id: string
    name: string
    type: "pending" | "processing" | "success" | "failed"
    contactEmail: string
    phone?: string
    website?: string
}