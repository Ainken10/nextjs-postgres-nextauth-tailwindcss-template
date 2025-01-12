
'use client'
import * as React from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { signIn } from 'next-auth/react';
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="relative">
        <div className="relative flex justify-center text-xs uppercase">
        </div>
      </div>
      <Button
        onClick={() => signIn('github', {
                        redirectTo: '/'
                      })}
        variant="outline"
        type="button"
      >
        <Icons.gitHub className="mr-2 h-4 w-4" />

        GitHub
      </Button>
    </div>
  )
}
