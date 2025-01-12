'use client'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  Dot,
  HelpCircle,
  Timer,
} from "lucide-react"
import { Filter } from "types/filter"

export const labels : Filter = {
  columnName:"label",
  options: [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  }]}


export const statuses : Filter= {
  columnName:"status",
  options:[
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleOff,
  },
]}

export const priorities : Filter= {
  columnName:"priority",
  options:[
    {
      label: "Low",
      value: "low",
      icon: ArrowDown,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRight,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUp,
    },
]
}
