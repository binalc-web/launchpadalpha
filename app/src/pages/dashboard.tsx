import { GlobalHeader } from "@/components/layout/global-header"

export function DashboardPage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <GlobalHeader />
      <div className="group/sidebar-wrapper flex min-h-0 flex-1 overflow-hidden has-data-[variant=inset]:bg-sidebar">
        <aside
          data-variant="inset"
          className="peer hidden w-64 shrink-0 border-r border-border bg-card md:block"
          aria-hidden
        />
        <main className="flex min-h-0 flex-1 flex-col md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:bg-background">
          <header className="z-10 flex h-15 shrink-0 items-center border-b border-border px-4 md:px-6">
            <div className="flex min-w-0 flex-1">
              <nav
                className="min-w-0 flex-1"
                aria-label="Breadcrumb"
              >
                <ol className="flex min-w-0 items-center">
                  <li className="flex min-w-0 shrink-0">
                    <span className="truncate text-sm font-medium capitalize text-text-foreground">
                      Test Dashbaord
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </header>
        </main>
      </div>
    </div>
  )
}
