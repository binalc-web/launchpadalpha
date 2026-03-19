import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "success"
    | "unassigned"
    | "archived"
    | "incomplete"
    | "plan-blue"
    | "plan-green"
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-muted text-muted-foreground",
    outline: "border border-border",
    success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    unassigned: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    archived: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    incomplete: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400",
    "plan-blue": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    "plan-green": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  }
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg px-2 py-1.5 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

export { Badge }
