import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { GlobalHeader } from "@/components/layout/global-header"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Plus,
  Search,
  ChevronDown,
  ChevronsUpDown,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const MOCK_COMPANIES = [
  {
    id: "COMP-001",
    name: "New York HQ",
    region: "North America",
    status: "active" as const,
    assignedCorporation: "Acme Corporation",
    assignedCorpId: "CORP-001",
    plan: "BSPBlueprint (Monthly)" as const,
    createdOn: "01-15-2025",
    lastUpdatedOn: "01-20-2025",
    actions: ["view", "edit", "delete"] as readonly ("view" | "edit" | "delete")[],
  },
  {
    id: "COMP-002",
    name: "San Francisco Office",
    region: "North America",
    status: "active" as const,
    assignedCorporation: "Beta Solutions",
    assignedCorpId: "CORP-002",
    plan: "BSPBlueprint (Monthly)" as const,
    createdOn: "02-18-2025",
    lastUpdatedOn: "02-15-2025",
    actions: ["view", "edit", "delete"] as readonly ("view" | "edit" | "delete")[],
  },
  {
    id: "COMP-003",
    name: "New York Office",
    region: "North America",
    status: "unassigned" as const,
    assignedCorporation: "Beta Solutions",
    assignedCorpId: "CORP-003",
    plan: "BSP Assessment (Annual)" as const,
    createdOn: "03-02-2025",
    lastUpdatedOn: "03-10-2025",
    actions: ["view", "edit", "delete"] as readonly ("view" | "edit" | "delete")[],
  },
  {
    id: "COMP-004",
    name: "Toronto Office",
    region: "North America",
    status: "archived" as const,
    assignedCorporation: "Alpha Innovations",
    assignedCorpId: "CORP-004",
    plan: "BSP Assessment (Annual)" as const,
    createdOn: "05-12-2025",
    lastUpdatedOn: "04-22-2025",
    actions: ["view", "edit", "delete"] as readonly ("view" | "edit" | "delete")[],
  },
  {
    id: "COMP-005",
    name: "London Office",
    region: "United Kingdom",
    status: "incomplete" as const,
    progress: 25,
    assignedCorporation: "NA",
    assignedCorpId: null,
    plan: "BSPBlueprint (Monthly)" as const,
    createdOn: "04-15-2025",
    lastUpdatedOn: "05-30-2025",
    actions: ["view"] as readonly ("view" | "edit" | "delete")[],
  },
  {
    id: "COMP-006",
    name: "Berlin Office",
    region: "Europe",
    status: "active" as const,
    assignedCorporation: "Delta Dynamics",
    assignedCorpId: "CORP-006",
    plan: "BSPBlueprint (Monthly)" as const,
    createdOn: "07-15-2025",
    lastUpdatedOn: "06-18-2025",
    actions: ["view", "edit", "delete"] as readonly ("view" | "edit" | "delete")[],
  },
  {
    id: "COMP-007",
    name: "Tokyo Office",
    region: "Japan",
    status: "unassigned" as const,
    assignedCorporation: "NA",
    assignedCorpId: null,
    plan: "BSP Assessment (Annual)" as const,
    createdOn: "06-20-2025",
    lastUpdatedOn: "07-05-2025",
    actions: ["view", "edit", "delete"] as readonly ("view" | "edit" | "delete")[],
  },
  {
    id: "COMP-008",
    name: "Sydney Office",
    region: "Australia",
    status: "active" as const,
    assignedCorporation: "Epsilon Enterprises",
    assignedCorpId: "CORP-007",
    plan: "BSP Assessment (Annual)" as const,
    createdOn: "08-30-2025",
    lastUpdatedOn: "08-27-2025",
    actions: ["view", "edit", "delete"] as readonly ("view" | "edit" | "delete")[],
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
    return <Badge variant="unassigned">Unassigned</Badge>
  }
  if (status === "archived") {
    return <Badge variant="archived">Archived</Badge>
  }
  if (status === "incomplete" && progress !== undefined) {
    return (
      <div className="flex flex-col gap-1">
        <Badge variant="incomplete">Incomplete ({progress}%)</Badge>
        <div className="h-0.5 w-[122px] overflow-hidden rounded-full bg-violet-100">
          <div
            className="h-full rounded-full bg-red-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )
  }
  return null
}

function PlanBadge({ plan }: { plan: "BSPBlueprint (Monthly)" | "BSP Assessment (Annual)" }) {
  return (
    <Badge variant={plan === "BSPBlueprint (Monthly)" ? "plan-blue" : "plan-green"}>
      {plan}
    </Badge>
  )
}

function TableHeader({
  label,
  sortable,
}: {
  label: string
  sortable?: boolean
}) {
  return (
    <div className="flex items-center gap-1 px-4">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {sortable && (
        <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" aria-hidden />
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
          <header
            data-node-id="591-1525110"
            data-name="Header"
            className="flex flex-col gap-4 border-b border-border bg-card px-6 py-4"
          >
            <Breadcrumb items={[{ label: "Company Directory" }]} />
          </header>

          <div data-node-id="591-1525111" className="flex-1 overflow-auto p-6">
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

            <div
              data-node-id="591-1525278"
              data-name="Table (Full View)"
              className="w-full"
            >
              <Card
                data-node-id="591-1525279"
                data-name="User Directory - Full table view"
                className="overflow-hidden rounded-[9px] border border-border p-4"
              >
                <div className="flex flex-col gap-6">
                  {/* Search + Filters */}
                  <div
                    data-node-id="591-1525280"
                    data-name="Search + Filters"
                    className="flex h-9 flex-row flex-wrap items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-80 shrink-0">
                        <Search
                          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                          aria-hidden
                        />
                        <Input
                          placeholder="Search here..."
                          className="h-9 rounded-lg pl-10"
                        />
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-[183px] shrink-0">
                          <Input
                            defaultValue="All Status"
                            readOnly
                            className="h-9 cursor-pointer rounded-lg pr-10"
                          />
                          <ChevronDown
                            className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                            aria-hidden
                          />
                        </div>
                        <div className="relative w-[183px] shrink-0">
                          <Input
                            defaultValue="All Corporations"
                            readOnly
                            className="h-9 cursor-pointer rounded-lg pr-10"
                          />
                          <ChevronDown
                            className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                            aria-hidden
                          />
                        </div>
                        <div className="relative w-[183px] shrink-0">
                          <Input
                            defaultValue="All Plans"
                            readOnly
                            className="h-9 cursor-pointer rounded-lg pr-10"
                          />
                          <ChevronDown
                            className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                            aria-hidden
                          />
                        </div>
                        <div className="relative w-[183px] shrink-0">
                          <Input
                            defaultValue="Last 30 days"
                            readOnly
                            className="h-9 cursor-pointer rounded-lg pr-10"
                          />
                          <ChevronDown
                            className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                            aria-hidden
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Wrapper: Table + Pagination */}
                  <div
                    data-node-id="591-1525292"
                    data-name="Main Wrapper"
                    className="flex flex-col gap-2"
                  >
                    {/* Table Wrapper */}
                    <div
                      data-node-id="591-1525293"
                      data-name="Table Wrapper"
                      className="overflow-x-auto"
                    >
                      <div className="min-w-[1648px]">
                        {/* Table Header */}
                        <div
                          className="grid h-[61px] shrink-0 items-center bg-muted/80"
                          style={{
                            gridTemplateColumns:
                              "130px 246px 154px 246px 246px 246px 246px 132px",
                          }}
                        >
                          <TableHeader label="Company ID" sortable />
                          <TableHeader label="Company Name" sortable />
                          <TableHeader label="Status" sortable />
                          <TableHeader label="Assigned Corporation" sortable />
                          <TableHeader label="Plan" sortable />
                          <TableHeader label="Created On" sortable />
                          <TableHeader label="Last Updated On" sortable />
                          <div className="flex items-center px-4">
                            <span className="text-sm font-medium text-foreground">
                              Actions
                            </span>
                          </div>
                        </div>

                        {/* Table Rows */}
                        {MOCK_COMPANIES.map((company) => (
                          <div
                            key={company.id}
                            className="grid min-h-[65px] items-center border-b border-border last:border-b-0"
                            style={{
                              gridTemplateColumns:
                                "130px 246px 154px 246px 246px 246px 246px 132px",
                            }}
                          >
                            <div className="px-4 py-3">
                              <span className="text-sm text-foreground">
                                {company.id}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1 px-4 py-3">
                              <span className="text-sm text-foreground">
                                {company.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {company.region}
                              </span>
                            </div>
                            <div className="px-4 py-3">
                              <StatusCell
                                status={company.status}
                                progress={
                                  company.status === "incomplete"
                                    ? company.progress
                                    : undefined
                                }
                              />
                            </div>
                            <div className="flex flex-col gap-1 px-4 py-3">
                              {company.assignedCorpId ? (
                                <>
                                  <span className="text-sm text-foreground">
                                    {company.assignedCorporation}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {company.assignedCorpId}
                                  </span>
                                </>
                              ) : (
                                <span className="text-sm text-foreground">
                                  {company.assignedCorporation}
                                </span>
                              )}
                            </div>
                            <div className="px-4 py-3">
                              <PlanBadge plan={company.plan} />
                            </div>
                            <div className="px-4 py-3">
                              <span className="text-sm text-foreground">
                                {company.createdOn}
                              </span>
                            </div>
                            <div className="px-4 py-3">
                              <span className="text-sm text-foreground">
                                {company.lastUpdatedOn}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-3">
                              <button
                                type="button"
                                className="rounded p-2 text-foreground hover:bg-muted"
                                aria-label="View"
                              >
                                <Eye className="h-5 w-5" />
                              </button>
                              {(company.actions as readonly string[]).includes("edit") && (
                                <button
                                  type="button"
                                  className="rounded p-2 text-foreground hover:bg-muted"
                                  aria-label="Edit"
                                >
                                  <Pencil className="h-5 w-5" />
                                </button>
                              )}
                              {(company.actions as readonly string[]).includes("delete") && (
                                <button
                                  type="button"
                                  className="rounded p-2 text-foreground hover:bg-muted"
                                  aria-label="Delete"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pagination */}
                    <div
                      data-node-id="591-1525440"
                      data-name="Pagination Wrapper"
                      className="flex flex-col gap-1"
                    >
                      <div
                        className="h-1.5 w-full max-w-[648px] rounded-full bg-muted"
                        aria-hidden
                      />
                      <div
                        data-node-id="591-1525442"
                        data-name="Pagination"
                        className="flex items-center justify-between"
                      >
                        <p className="text-sm text-muted-foreground">
                          Showing {pageSize} of {totalResults} results
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === 1}
                            onClick={() =>
                              setCurrentPage((p) => Math.max(1, p - 1))
                            }
                            className="h-9 gap-2 rounded-lg px-4"
                          >
                            <ChevronLeft className="h-3.5 w-3.5" />
                            Previous
                          </Button>
                          {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <Button
                              key={page}
                              variant={
                                currentPage === page ? "default" : "outline"
                              }
                              size="sm"
                              className="h-9 min-w-[34px] rounded-lg px-4"
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </Button>
                          ))}
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={currentPage === totalPages}
                            onClick={() =>
                              setCurrentPage((p) =>
                                Math.min(totalPages, p + 1)
                              )
                            }
                            className="h-9 gap-2 rounded-lg px-4"
                          >
                            Next
                            <ChevronRight className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </MainWrapper>
      </div>
    </div>
  )
}
