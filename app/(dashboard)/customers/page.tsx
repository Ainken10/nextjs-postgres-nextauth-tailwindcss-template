import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import { columns } from "../../../columns/TaskDef"
import { DataTable } from "../../../components/common/Table/data-table"
import { taskSchema } from "../../../components/common/data/schema"

import { priorities, statuses } from "../../../components/common/data/data"
import { DashboardBreadcrumb } from "@/components/common/breadcrumbs/noid"
import { BreadcrumNoId } from "types/breadcrums/noid"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}
const BreadcrumbItem: BreadcrumNoId = {
  name:"Tasks",
  link:"/customers"
}
// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "public/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async  function CustomersPage() {
  const tasks = await getTasks()

  return ( <>
  <DashboardBreadcrumb item={BreadcrumbItem}/>
  <DataTable name={"customers"} columns={columns} data={tasks} filters={[statuses,priorities]}/>
  </>
      
  );
}
