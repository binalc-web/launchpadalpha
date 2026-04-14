export const RELEASE_PAGE_CONTENT = {
	title: "Release Roadmap",
	subtitle: "Planned and actual release dates by version.",
	breadcrumbsTitle: "Release Roadmap",
	columnPlanned: "Planned release",
	columnTimeline: "Timeline",
	columnActual: "Actual release",
	plannedLabel: "ReleaseDate",
	actualLabel: "Actual Release Date",
	plannedHeaderEyebrow: "Planned release dates",
	actualHeaderEyebrow: "Actual release date",
	actualNotesEyebrow: "Actual release notes",
	actualNotCompleted: "Release not completed",
	timelineMvpBadge: "MVP",
	accordionDescription: "Description",
	accordionChangeHistory: "Change history",
	accordionRevisionHistory: "Revision history",
	revisionLatestPrefix: "Latest",
	plannedStatusActive: "Active",
	plannedStatusLocked: "Locked",
	plannedStatusDraft: "Draft",
	plannedDescriptionPlaceholder:
		"Release scope, acceptance criteria, and rollout notes will appear here.",
	plannedChangeHistoryPlaceholder:
		"Prior schedule and scope changes will be listed here.",
	plannedRevisionNotesPlaceholder:
		"Revision notes and approvals will appear here.",
} as const;

export type PlannedReleaseStatus = "active" | "locked" | "draft";
export type ActualHeaderTheme = "pink" | "teal";

export type ReleaseTimelineEntry = {
	id: string;
	version: string;
	/** Optional; not shown on the timeline when using MVP-only nodes. */
	timelineDate: string;
	plannedDateRangeDisplay: string;
	plannedStatus: PlannedReleaseStatus;
	actualCompleted: boolean;
	actualDateDisplay: string;
	actualReleaseNotes: string;
	actualHeaderTheme: ActualHeaderTheme;
	ownerName: string;
	ownerInitials: string;
	revisionCount: number;
	revisionLatestId: string;
};

/** Sample data — replace with API when available. */
export const RELEASE_TIMELINE_MOCK: ReleaseTimelineEntry[] = [
	{
		id: "1",
		version: "1.0.10",
		timelineDate: "Mar 30, 2026",
		plannedDateRangeDisplay: "April 1, 2026 → April 15, 2026",
		plannedStatus: "active",
		actualCompleted: false,
		actualDateDisplay: "",
		actualReleaseNotes: "",
		actualHeaderTheme: "pink",
		ownerName: "Vraj Gangani",
		ownerInitials: "VG",
		revisionCount: 25,
		revisionLatestId: "R25",
	},
	{
		id: "2",
		version: "1.0.9",
		timelineDate: "Mar 25, 2026",
		plannedDateRangeDisplay: "April 5, 2026 → April 11, 2026",
		plannedStatus: "draft",
		actualCompleted: true,
		actualDateDisplay: "April 25, 2026",
		actualReleaseNotes: "early complete release",
		actualHeaderTheme: "teal",
		ownerName: "Vraj Gangani",
		ownerInitials: "VG",
		revisionCount: 1,
		revisionLatestId: "R1",
	},
	{
		id: "3",
		version: "1.0.8",
		timelineDate: "Feb 14, 2026",
		plannedDateRangeDisplay: "March 1, 2026 → March 20, 2026",
		plannedStatus: "locked",
		actualCompleted: true,
		actualDateDisplay: "April 18, 2026",
		actualReleaseNotes:
			"This is the first actual release notes for this version.",
		actualHeaderTheme: "pink",
		ownerName: "Vraj Gangani",
		ownerInitials: "VG",
		revisionCount: 3,
		revisionLatestId: "R3",
	},
] as const;
