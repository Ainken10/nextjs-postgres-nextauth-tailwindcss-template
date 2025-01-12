"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "components/ui/checkbox"  // Update path to your checkbox component
import { DataTableColumnHeader } from "../components/common/Table/data-table-column-header"
import { DataTableRowActions } from "../components/common/Table/data-table-row-actions"
import { CircleCheck, CircleOff, HelpCircle, Timer } from "lucide-react";
import { TruckTrip } from "types/trip";
import { statuses } from "../Filters/TripFilter";



export const columns: ColumnDef<TruckTrip>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trip ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "truckId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Truck ID" />
    ),
    cell: ({ row }) => <span>{row.getValue("truckId")}</span>,
  },
  {
    accessorKey: "driverId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Driver ID" />
    ),
    cell: ({ row }) => <span>{row.getValue("driverId")}</span>,
  },
  {
    accessorKey: "startLocation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Location" />
    ),
    cell: ({ row }) => <span>{row.getValue("startLocation")}</span>,
  },
  {
    accessorKey: "endLocation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Location" />
    ),
    cell: ({ row }) => <span>{row.getValue("endLocation")}</span>,
  },
  {
    accessorKey: "startTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Time" />
    ),
    cell: ({ row }) =>
      new Date(row.getValue("startTime")).toLocaleString() || "N/A",
  },
  {
    accessorKey: "endTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Time" />
    ),
    cell: ({ row }) =>
      row.getValue("endTime")
        ? new Date(row.getValue("endTime")).toLocaleString()
        : "N/A",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.options.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
