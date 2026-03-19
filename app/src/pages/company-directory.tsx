import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { GlobalHeader } from "@/components/layout/global-header"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Plus,
  Search,
  ChevronDown,
  ChevronsUpDown,
} from "lucide-react"

const MOCK_COMPANIES = [
  {
    id: "COMP-001",
    name: "Tech Ventures Digital",
    status: "active" as const,
    assignedCorporation: "Acme Corporation",
    plan: "BSPBlueprint (Monthly)",
    createdOn: "Jan 15, 2024",
  },
  {
    id: "COMP-002",
    name: "Innovation Labs",
    status: "unassigned" as const,
    assignedCorporation: "—",
    plan: "BSP Assessment (Annual)",
    createdOn: "Jan 18, 2024",
  },
  {
    id: "COMP-003",
    name: "Marit Inc.",
    status: "archived" as const,
    assignedCorporation: "Global Corp",
    plan: "BSPBlueprint (Monthly)",
    createdOn: "Jan 20, 2024",
  },
  {
    id: "COMP-004",
    name: "Startup Alpha",
    status: "incomplete" as const,
    progress: 25,
    assignedCorporation: "Acme Corporation",
    plan: "BSP Assessment (Annual)",
    createdOn: "Jan 22, 2024",
  },
  {
    id: "COMP-005",
    name: "Beta Solutions",
    status: "active" as const,
    assignedCorporation: "Tech Holdings",
    plan: "BSPBlueprint (Monthly)",
    createdOn: "Jan 25, 2024",
  },
  {
    id: "COMP-006",
    name: "Gamma Industries",
    status: "active" as const,
    assignedCorporation: "Acme Corporation",
    plan: "BSP Assessment (Annual)",
    createdOn: "Jan 28, 2024",
  },
  {
    id: "COMP-007",
    name: "Delta Ventures",
    status: "unassigned" as const,
    assignedCorporation: "—",
    plan: "BSPBlueprint (Monthly)",
    createdOn: "Feb 1, 2024",
  },
  {
    id: "COMP-008",
    name: "Epsilon Corp",
    status: "incomplete" as const,
    progress: 75,
    assignedCorporation: "Global Corp",
    plan: "BSP Assessment (Annual)",
    createdOn: "Feb 5, 2024",
  },
]

function StatusCell({
  status,
  progress,
}: {
  status: "active" | "unassigned" | "archived" | "incomplete"
  progress?: number
}) {
  if (status === "active") {
    return <Badge variant="success">Active</Badge>
  }
  if (status === "unassigned") {
    return <Badge variant="secondary">Unassigned</Badge>
  }
  if (status === "archived") {
    return <Badge variant="secondary">Archived</Badge>
  }
  if (status === "incomplete" && progress !== undefined) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Incomplete ({progress}%)
        </span>
        <div className="h-1.5 w-16 min-w-16 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )
  }
  return null
}

function TableHeader({
  label,
  sortable,
}: {
  label: string
  sortable?: boolean
}) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {sortable && (
        <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
      )}
    </div>
  )
}

export function CompanyDirectoryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalResults = 14
  const pageSize = 8
  const totalPages = Math.ceil(totalResults / pageSize)

  return (
    <div
      data-node-id="591-1525107"
      data-name="Company Directory"
      className="flex h-screen w-full flex-col bg-background"
    >
      <GlobalHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem="company-directory" />
        <MainWrapper>
          {/* Header */}
          <header
            data-node-id="591-1525110"
            data-name="Header"
            className="flex flex-col gap-4 border-b border-border bg-card px-6 py-4"
          >
            <Breadcrumb items={[{ label: "Company Directory" }]} />
          </header>

          {/* Main Content */}
          <div
            data-node-id="591-1525111"
            className="flex-1 overflow-auto p-6"
          >
            {/* Title Section */}
            <div
              data-node-id="591-1525112"
              data-name="Title"
              className="mb-6 flex flex-wrap items-start justify-between gap-4"
            >
              <div>
                <h1 className="text-xl font-semibold text-foreground">
                  Company Directory
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Manage and view all companies in your organization.
                </p>
              </div>
              <Button className="gap-2" size="default">
                <Plus className="h-4 w-4" />
                Add New Company
              </Button>
            </div>

            {/* Card Wrapper */}
            <Card
              data-node-id="591-1525120"
              data-name="Card Wrapper"
              className="overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Search + Filters */}
                <div
                  data-node-id="591-1525121"
                  data-name="Search + Filters"
                  className="flex flex-wrap items-center gap-3 border-b border-border p-4"
                >
                  <div className="relative min-w-0 flex-1 basis-48">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search here..."
                      className="pl-9"
                    />
                  </div>
                  <div className="relative min-w-0 flex-1 basis-40">
                    <Input
                      defaultValue="All Status"
                      readOnly
                      className="cursor-pointer pr-9"
                    />
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  <div className="relative min-w-0 flex-1 basis-40">
                    <Input
                      defaultValue="All Corporations"
                      readOnly
                      className="cursor-pointer pr-9"
                    />
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  <div className="relative min-w-0 flex-1 basis-40">
                    <Input
                      defaultValue="All Plans"
                      readOnly
                      className="cursor-pointer pr-9"
                    />
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  <div className="relative min-w-0 flex-1 basis-40">
                    <Input
                      defaultValue="Last 30 days"
                      readOnly
                      className="cursor-pointer pr-9"
                    />
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                {/* Table */}
                <div
                  data-node-id="591-1525132"
                  data-name="Table Wrapper"
                  className="overflow-x-auto"
                >
                  <div className="min-w-[800px]">
                    {/* Table Header */}
                    <div className="grid grid-cols-[100px_1fr_140px_1fr_180px_100px] gap-4 border-b border-border bg-muted/30 px-4 py-3">
                      <TableHeader label="Company ID" sortable />
                      <TableHeader label="Company Name" sortable />
                      <TableHeader label="Status" sortable />
                      <TableHeader label="Assigned Corporation" sortable />
                      <TableHeader label="Plan" sortable />
                      <TableHeader label="Created On" sortable />
                    </div>
                    {/* Table Rows */}
                    {MOCK_COMPANIES.map((company) => (
                      <div
                        key={company.id}
                        className="grid grid-cols-[100px_1fr_140px_1fr_180px_100px] items-center gap-4 border-b border-border px-4 py-3 last:border-b-0"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {company.id}
                        </span>
                        <span className="text-sm text-foreground">
                          {company.name}
                        </span>
                        <StatusCell
                          status={company.status}
                          progress={
                            company.status === "incomplete"
                              ? company.progress
                              : undefined
                          }
                        />
                        <span className="text-sm text-muted-foreground">
                          {company.assignedCorporation}
                        </span>
                        <Badge variant="outline" className="w-fit text-xs">
                          {company.plan}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {company.createdOn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination */}
                <div
                  data-node-id="591-1525269"
                  data-name="Pagination"
                  className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-4 py-3"
                >
                  <p className="text-sm text-muted-foreground">
                    Showing {pageSize} of {totalResults} results
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    >
                      Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          className="min-w-9"
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      )
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </MainWrapper>
      </div>
    </div>
  )
}
