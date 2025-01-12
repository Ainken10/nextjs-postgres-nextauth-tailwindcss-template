'use client'
import { CircleCheck, CircleOff, HelpCircle, Timer } from "lucide-react";
import { Filter } from "types/filter";


export const statuses : Filter= {
    columnName:"status",
    options:[
        {
            value: "planned",
            label: "planned",
            icon: HelpCircle,
          },
          {
            value: "in-progress",
            label: "in-progress", 
            icon:  Timer,
          },
          {
            value: "completed",
            label: "completed",
            icon: CircleCheck,
          },
          {
            value: "canceled",
            label: "Canceled",
            icon: CircleOff,
          },
  ]}
  