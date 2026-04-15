import {
	Bell,
	Home,
	Search,
	UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { KALRAV_PAGE_CONTENT, ROUTES } from "@/const";
import { AppLayout } from "@/layout";
import { cn } from "@/lib/utils";

const bottomNavIcons = [Home, Search, Bell, UserRound] as const;

export function KalravPage() {
	const breadcrumbs = [
		{ label: KALRAV_PAGE_CONTENT.breadcrumbsTitle, path: ROUTES.kalrav.root },
	];

	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<div className="mx-auto flex w-full max-w-3xl flex-col gap-6 pb-24 lg:max-w-4xl">
				<div>
					<h1 className="text-heading-4 font-semibold text-text-foreground">
						{KALRAV_PAGE_CONTENT.title}
					</h1>
					<p className="text-small text-text-secondary">
						{KALRAV_PAGE_CONTENT.subtitle}
					</p>
				</div>

				{/* Row 1: four thin tabs */}
				<div className="grid grid-cols-4 gap-2">
					{KALRAV_PAGE_CONTENT.tabLabels.map((label) => (
						<button
							key={label}
							type="button"
							className="h-9 rounded-md border border-border bg-card text-xs font-medium text-text-secondary shadow-sm transition-colors hover:bg-muted/60 hover:text-text-foreground"
						>
							{label}
						</button>
					))}
				</div>

				{/* Row 2: two summary cards */}
				<div className="grid grid-cols-2 gap-3">
					{KALRAV_PAGE_CONTENT.summaryTitles.map((title) => (
						<Card
							key={title}
							className="border-border shadow-sm"
							size="sm"
						>
							<CardContent className="flex min-h-[72px] items-center justify-center p-4">
								<p className="text-center text-small font-semibold text-text-foreground">
									{title}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Row 3: two large blocks */}
				<div className="grid grid-cols-2 gap-3">
					{KALRAV_PAGE_CONTENT.mainBlockTitles.map((title, i) => (
						<Card
							key={`${title}-${i}`}
							className="border-border shadow-sm"
							size="sm"
						>
							<CardContent className="flex aspect-square max-h-[220px] min-h-[160px] items-center justify-center p-4 sm:max-h-[280px] sm:min-h-[200px]">
								<p className="text-center text-small font-medium text-text-secondary">
									{title}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Row 4: three smaller widgets */}
				<div className="grid grid-cols-3 gap-2 sm:gap-3">
					{KALRAV_PAGE_CONTENT.smallBlockTitles.map((title) => (
						<Card
							key={title}
							className="border-border shadow-sm"
							size="sm"
						>
							<CardContent className="flex min-h-[88px] items-center justify-center p-3">
								<p className="text-center text-xs font-medium text-text-foreground sm:text-small">
									{title}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Row 5: bottom nav — four circles (mobile-first; sticky within scroll area) */}
				<div className="sticky bottom-0 z-10 -mx-2 flex justify-center border-t border-border bg-content-bg/95 px-2 py-3 backdrop-blur-sm lg:-mx-0 lg:rounded-xl lg:border lg:shadow-sm">
					<div className="flex w-full max-w-md items-center justify-between gap-2 px-2">
						{KALRAV_PAGE_CONTENT.navLabels.map((label, i) => {
							const Icon = bottomNavIcons[i];
							return (
								<Button
									key={label}
									type="button"
									variant="ghost"
									size="icon"
									className={cn(
										"size-12 shrink-0 rounded-full border border-border bg-card text-muted-foreground shadow-sm hover:bg-muted/80 hover:text-text-foreground",
									)}
									aria-label={label}
								>
									<Icon className="size-5" aria-hidden />
								</Button>
							);
						})}
					</div>
				</div>
			</div>
		</AppLayout>
	);
}
