import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "../../../columns/TripDef"
import { DataTable } from "../../../components/common/Table/data-table"
import { truckTripSchema } from "../../../Schemas/TripSchema"
import {statuses} from "../../../Filters/TripFilter"
import {DashboardBreadcrumb} from "@/components/common/breadcrumbs/noid"
import { BreadcrumNoId } from "types/breadcrums/noid"
export const metadata: Metadata = {
  title: "Trips",
  description: "A task and issue tracker build using Tanstack Table.",
}

const BreadcrumbItem: BreadcrumNoId = {
  name:"Trips",
  link:"/trips"
}

// Simulate a database read for tasks.
async function getItems() {
  const data = await fs.readFile(
    path.join(process.cwd(), "public/trips.json")
  )

  const items = JSON.parse(data.toString())

  return z.array(truckTripSchema).parse(items)
}

export default async  function TripsPage() {
  const items = await getItems()

  return ( <>
<DashboardBreadcrumb item={BreadcrumbItem} /> 
<DataTable name={"Trips"} columns={columns} data={items} filters={[statuses]} />
  </>
  );
}
