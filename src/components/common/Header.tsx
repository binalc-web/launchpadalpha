import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
}

export function Header({ breadcrumbs }: HeaderProps) {
  return (
    <header
      className="h-[60px] w-full bg-background border-b border-border flex items-center justify-between px-6 shrink-0"
      style={{ minHeight: '60px' }}
    >
      <nav className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-muted-foreground">/</span>
            )}
            {item.path ? (
              <Link
                to={item.path}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          aria-label="User profile"
        >
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
