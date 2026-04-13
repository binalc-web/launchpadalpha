import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
	RELEASE_PAGE_CONTENT,
	RELEASE_TIMELINE_MOCK,
	ROUTES,
} from "@/const";
import { AppLayout } from "@/layout";
import { cn } from "@/lib/utils";

const plannedHeaderClass =
	"border-[#F0D48B] bg-gradient-to-r from-[#FFF9E5] to-white";
const plannedIconBoxClass = "bg-[#E8D4A8] text-[#92400E]";
const plannedEyebrowClass = "text-[#B45309]";

const actualVariants = {
	pink: {
		wrap: "border-[#F8D7DA] bg-gradient-to-r from-[#FFF1F1] to-white",
		iconBox: "bg-[#F5C6CB] text-[#9B2C2C]",
		eyebrow: "text-[#C53030]",
	},
	teal: {
		wrap: "border-[#B2F5EA] bg-gradient-to-r from-[#E6FFFA] to-white",
		iconBox: "bg-[#9AE6DE] text-[#234E52]",
		eyebrow: "text-[#2C7A7B]",
	},
} as const;

function ReleaseDateGradientHeader({
	eyebrow,
	dateLine,
	variant,
}: {
	eyebrow: string;
	dateLine: string;
	variant: "planned" | "pink" | "teal";
}) {
	const isPlanned = variant === "planned";
	const v = isPlanned ? null : actualVariants[variant];

	return (
		<div
			className={cn(
				"flex gap-3 rounded-xl border p-3 shadow-sm",
				isPlanned ? plannedHeaderClass : v?.wrap,
			)}
		>
			<div
				className={cn(
					"flex size-10 shrink-0 items-center justify-center rounded-lg",
					isPlanned ? plannedIconBoxClass : v?.iconBox,
				)}
			>
				<Calendar className="size-5" strokeWidth={2} aria-hidden />
			</div>
			<div className="min-w-0 flex flex-col justify-center gap-0.5">
				<p
					className={cn(
						"text-[10px] font-semibold uppercase tracking-wide",
						isPlanned ? plannedEyebrowClass : v?.eyebrow,
					)}
				>
					{eyebrow}
				</p>
				<p className="text-small font-semibold leading-snug text-text-foreground">
					{dateLine}
				</p>
			</div>
		</div>
	);
}

export function ReleasePage() {
	const breadcrumbs = [
		{
			label: RELEASE_PAGE_CONTENT.breadcrumbsTitle,
			path: ROUTES.release.root,
		},
	];

	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<div className="mb-6">
				<h1 className="text-heading-4 font-semibold text-text-foreground">
					{RELEASE_PAGE_CONTENT.title}
				</h1>
				<p className="text-small text-text-secondary">
					{RELEASE_PAGE_CONTENT.subtitle}
				</p>
			</div>

			<div className="flex flex-col gap-0 lg:flex-row lg:gap-10">
				{/* Timeline — green halo nodes + vertical connector */}
				<div className="relative mx-auto shrink-0 lg:mx-0 lg:w-44">
					<ul className="flex flex-col items-center">
						{RELEASE_TIMELINE_MOCK.map((entry, index) => {
							const isLast = index === RELEASE_TIMELINE_MOCK.length - 1;
							return (
								<li
									key={entry.id}
									className="flex flex-col items-center text-center"
								>
									<div
										className="flex size-8 shrink-0 items-center justify-center rounded-full bg-success-bg shadow-[0_0_0_1px_rgba(255,255,255,0.5)_inset]"
										aria-hidden
									>
										<span className="size-3.5 rounded-full bg-success shadow-sm ring-2 ring-background" />
									</div>
									<span className="mt-2 text-small font-bold text-text-foreground">
										{entry.version}
									</span>
									<span className="mt-0.5 text-xs text-text-secondary">
										{entry.timelineDate}
									</span>
									{!isLast ? (
										<div
											className="mt-3 h-10 w-1 shrink-0 rounded-full bg-border"
											aria-hidden
										/>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>

				{/* Cards + column headers */}
				<div className="min-w-0 flex-1 space-y-4">
					<div className="grid grid-cols-2 gap-4 border-b border-border pb-3 pl-1">
						<div className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
							{RELEASE_PAGE_CONTENT.columnPlanned}
						</div>
						<div className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
							{RELEASE_PAGE_CONTENT.columnActual}
						</div>
					</div>

					<div className="flex flex-col gap-6">
						{RELEASE_TIMELINE_MOCK.map((entry, rowIndex) => {
							const actualVariant =
								rowIndex % 2 === 0 ? ("pink" as const) : ("teal" as const);
							return (
								<Card
									key={entry.id}
									className="overflow-hidden border-border shadow-md"
									size="sm"
								>
									<CardContent className="grid grid-cols-1 gap-0 p-0 sm:grid-cols-2">
										<div className="flex flex-col border-border sm:border-r">
											<div
												className="h-1.5 w-full shrink-0 bg-destructive"
												aria-hidden
											/>
											<div className="p-5">
												<ReleaseDateGradientHeader
													eyebrow={RELEASE_PAGE_CONTENT.plannedHeaderEyebrow}
													dateLine={entry.plannedDateDisplay}
													variant="planned"
												/>
											</div>
										</div>
										<div className="flex flex-col justify-end border-t border-border sm:border-t-0">
											<div className="p-5 pt-6 sm:pt-8">
												<div className="sm:mt-4">
													<ReleaseDateGradientHeader
														eyebrow={
															RELEASE_PAGE_CONTENT.actualHeaderEyebrow
														}
														dateLine={entry.actualDateDisplay}
														variant={actualVariant}
													/>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</AppLayout>
	);
}
