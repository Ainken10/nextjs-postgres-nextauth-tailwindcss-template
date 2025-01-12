import { ColumnDef } from "@tanstack/react-table";
import { Company } from "types/companies";

export const columns: ColumnDef<Company>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "contactEmail",
      header: "Contact email",
    },
  ]