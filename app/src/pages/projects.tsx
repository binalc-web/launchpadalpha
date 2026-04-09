import { GlobalHeader } from "@/components/layout/global-header"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Sidebar } from "@/components/layout/sidebar"

export function ProjectsPage() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background">
      <GlobalHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainWrapper className="h-full min-h-0">
          <div className="flex h-full flex-col">
            <div className="flex h-[52px] shrink-0 items-center border-b border-[#E5E7EB] px-6">
              <h1 className="text-[20px] font-semibold text-[#111827]">
                All Projects
              </h1>
            </div>
          </div>
        </MainWrapper>
      </div>
    </div>
  )
}
