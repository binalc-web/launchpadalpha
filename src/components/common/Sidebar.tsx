import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Users,
  Shield,
  UserCog,
  CreditCard,
  FileText,
  Receipt,
  Tag,
  BookOpen,
  Library,
  Activity,
  ShieldCheck,
  FileCheck,
  Wrench,
  BarChart3,
  Bell,
  Settings,
} from 'lucide-react';
import { ROUTES } from '@/const/routes';

const navGroups = [
  {
    title: 'Main',
    items: [
      { path: ROUTES.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Administration',
    items: [
      { path: ROUTES.CORPORATION_DIRECTORY, label: 'Corporation Directory', icon: Building2 },
      { path: ROUTES.COMPANY_DIRECTORY, label: 'Company Directory', icon: Building2 },
      { path: ROUTES.USER_DIRECTORY, label: 'User Directory', icon: Users },
    ],
  },
  {
    title: 'Users & Access',
    items: [
      { path: ROUTES.ROLES_PERMISSIONS, label: 'Roles & Permissions', icon: Shield },
      { path: ROUTES.COACHES, label: 'Coaches', icon: UserCog },
    ],
  },
  {
    title: 'Finance',
    items: [
      { path: ROUTES.BILLING_MANAGEMENT, label: 'Billing Management', icon: CreditCard },
      { path: ROUTES.PLANS_PRICING, label: 'Plans & Pricing', icon: FileText },
      { path: ROUTES.INVOICES, label: 'Invoices', icon: Receipt },
      { path: ROUTES.PROMO_CODE_MANAGEMENT, label: 'Promo Code Management', icon: Tag },
    ],
  },
  {
    title: 'Assessments',
    items: [
      { path: ROUTES.QUESTION_BANK, label: 'Question Bank', icon: BookOpen },
      { path: ROUTES.LEARNING_LIBRARY, label: 'Learning Library', icon: Library },
    ],
  },
  {
    title: 'BSPU',
    items: [],
  },
  {
    title: 'System',
    items: [
      { path: ROUTES.SYSTEM_HEALTH, label: 'System Health', icon: Activity },
      { path: ROUTES.SECURITY_BASELINES, label: 'Security Baselines', icon: ShieldCheck },
      { path: ROUTES.AUDIT_LOGS, label: 'Audit Logs', icon: FileCheck },
      { path: ROUTES.MAINTENANCE, label: 'Maintenance', icon: Wrench },
    ],
  },
  {
    title: 'Insights',
    items: [
      { path: ROUTES.REPORTS, label: 'Reports', icon: BarChart3 },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { path: ROUTES.NOTIFICATIONS, label: 'Notifications', icon: Bell },
      { path: ROUTES.SETTINGS, label: 'Settings', icon: Settings },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="w-[280px] h-[900px] bg-background border-r border-border flex flex-col shrink-0 overflow-y-auto"
      style={{ minHeight: '900px' }}
    >
      <div className="p-6 border-b border-border">
        <Link to={ROUTES.DASHBOARD} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="font-semibold text-foreground">Launchpad</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.title} className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
              {group.title}
            </h3>
            {group.items.length > 0 && (
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    location.pathname === item.path ||
                    (item.path !== ROUTES.DASHBOARD &&
                      location.pathname.startsWith(item.path));
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? 'bg-muted text-foreground font-medium'
                            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
