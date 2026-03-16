import * as React from "react"

interface MainWrapperProps {
  children: React.ReactNode
  className?: string
}

export function MainWrapper({ children, className = "" }: MainWrapperProps) {
  return (
    <main
      data-node-id="1-10655"
      data-name="Main Wrapper"
      className={`flex flex-1 flex-col overflow-auto bg-background ${className}`}
    >
      {children}
    </main>
  )
}
