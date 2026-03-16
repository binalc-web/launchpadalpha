import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CorporationProfilePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("basic-info")

  return (
    <div
      data-node-id="1-10653"
      data-name="Corporation Directory/ Corporation Profile - Overview"
      className="flex h-screen w-full bg-background"
    >
      <Sidebar
        collapsed={sidebarCollapsed}
        onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <MainWrapper>
        {/* Header */}
        <header
          data-node-id="1-10656"
          data-name="Header"
          className="flex flex-col gap-4 border-b border-border bg-card px-6 py-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb
              items={[
                { label: "Corporation Directory", href: "#" },
                { label: "Acme Corporation" },
              ]}
            />
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="outline" size="sm">
                Suspend
              </Button>
              <Button variant="destructive" size="sm">
                Close Corporation
              </Button>
              <Badge variant="secondary">CORP-001</Badge>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div
          data-node-id="1-10671"
          data-name="Tabs"
          className="border-b border-border px-6 pt-4"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="basic-info">Basic Info.</TabsTrigger>
              <TabsTrigger value="key-contacts">Key Contacts</TabsTrigger>
              <TabsTrigger value="plan-seats">Plan & Seats</TabsTrigger>
              <TabsTrigger value="configuration">Configuration</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Cards Wrapper */}
        <div
          data-node-id="1-10672"
          data-name="Cards Wrapper"
          className="flex-1 overflow-auto p-6"
        >
          <div
            data-node-id="1-10673"
            data-name="Row 1"
            className="grid gap-6 lg:grid-cols-2"
          >
            {/* Corporation Basics Card */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Corporation Basics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-0">
                <InfoRow label="Legal Name" value="Acme Corporation" />
                <InfoRow label="DBA Name" value="Acme Corp" />
                <InfoRow label="Corporate Phone No." value="+1 (555) 123-4567" />
                <InfoRow label="Region" value="North America" />
                <InfoRow label="Industry" value="Technology" />
                <InfoRow label="Website URL" value="https://acme.example.com" />
                <InfoRow
                  label="Address"
                  value="123 Main St, San Francisco, CA 94105"
                />
                <InfoRow label="Time Zone" value="America/Los_Angeles (PST)" />
                <InfoRow label="Created On" value="Jan 15, 2024" last />
              </CardContent>
            </Card>

            {/* Executive Sponsor + Key Contact */}
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Executive Sponsor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-0">
                  <InfoRow label="Name" value="Jane Smith" />
                  <InfoRow label="Role" value="VP of Operations" />
                  <InfoRow label="Email" value="jane.smith@acme.example.com" />
                  <InfoRow label="Work Phone No." value="+1 (555) 987-6543" />
                  <InfoRow label="Cell Phone No." value="+1 (555) 456-7890" last />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Key Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-0">
                  <InfoRow
                    label="Primary Corporate Admin"
                    value="John Doe (john.doe@acme.example.com)"
                  />
                  <InfoRow
                    label="Billing/Finance Contact"
                    value="finance@acme.example.com"
                  />
                  <InfoRow
                    label="Legal/Compliance Contact"
                    value="legal@acme.example.com"
                    last
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </MainWrapper>
    </div>
  )
}

function InfoRow({
  label,
  value,
  last = false,
}: {
  label: string
  value: string
  last?: boolean
}) {
  return (
    <div
      className={`flex flex-col gap-1 py-3 ${!last ? "border-b border-border" : ""}`}
    >
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  )
}
