import * as React from "react"
import {
  LayoutDashboard,
  Building2,
  Users,
  Shield,
  FileText,
  ClipboardList,
  CreditCard,
  BarChart3,
  BookOpen,
  Wrench,
  Bell,
  Settings,
  ChevronLeft,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  badge?: number
  active?: boolean
}

function SidebarItem({ icon, label, badge, active }: SidebarItemProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-muted text-foreground"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      }`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <Badge variant="default" className="h-5 min-w-5 px-1.5 text-xs">
          {badge}
        </Badge>
      )}
    </button>
  )
}

interface SidebarGroupProps {
  label: string
  children: React.ReactNode
}

function SidebarGroup({ label, children }: SidebarGroupProps) {
  return (
    <div className="mb-4">
      <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="space-y-0.5">{children}</div>
    </div>
  )
}

interface SidebarProps {
  collapsed?: boolean
  onCollapse?: () => void
}

export function Sidebar({ collapsed = false, onCollapse }: SidebarProps) {
  return (
    <aside
      data-node-id="1-10654"
      data-name="Super Admin Sidebar"
      className={`flex flex-col border-r border-border bg-card text-card-foreground shadow-sm ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium">BSPBlueprint</span>
          </div>
        )}
        <button
          type="button"
          onClick={onCollapse}
          className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {!collapsed && (
        <p className="px-4 py-2 text-xs text-muted-foreground">
          powered by BSPBlueprint
        </p>
      )}

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {!collapsed && (
          <>
            <SidebarGroup label="Main">
              <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" />
              <SidebarItem icon={<Building2 className="h-4 w-4" />} label="Corporation Directory" active />
            </SidebarGroup>
            <SidebarGroup label="Administration">
              <SidebarItem icon={<Shield className="h-4 w-4" />} label="Security Baselines" />
              <SidebarItem icon={<FileText className="h-4 w-4" />} label="Audit Logs" />
            </SidebarGroup>
            <SidebarGroup label="Users & Access">
              <SidebarItem icon={<Users className="h-4 w-4" />} label="User Management" />
            </SidebarGroup>
            <SidebarGroup label="Finance">
              <SidebarItem icon={<CreditCard className="h-4 w-4" />} label="Billing" />
            </SidebarGroup>
            <SidebarGroup label="Assessments">
              <SidebarItem icon={<ClipboardList className="h-4 w-4" />} label="Assessments" />
            </SidebarGroup>
            <SidebarGroup label="BSPU">
              <SidebarItem icon={<BookOpen className="h-4 w-4" />} label="BSPU" />
            </SidebarGroup>
            <SidebarGroup label="System">
              <SidebarItem icon={<Wrench className="h-4 w-4" />} label="Maintenance" />
              <SidebarItem icon={<BarChart3 className="h-4 w-4" />} label="Reports" />
              <SidebarItem icon={<Bell className="h-4 w-4" />} label="Notifications" badge={1} />
            </SidebarGroup>
            <SidebarGroup label="Configuration">
              <SidebarItem icon={<Settings className="h-4 w-4" />} label="Settings" />
            </SidebarGroup>
          </>
        )}
      </nav>
    </aside>
  )
}
