import { ChooseSetupContent } from "@/components";
import { CORPORATE_DIRECTORY_PAGE_CONTENT, ROUTES } from "@/const";
import { AppLayout } from "@/layout";

export const ChooseSetupPage = () => {
	const breadcrumbs = [
		{
			label: CORPORATE_DIRECTORY_PAGE_CONTENT.breadcrumbsTitle,
			path: ROUTES.corporateDirectory.root,
			className: CORPORATE_DIRECTORY_PAGE_CONTENT.breadcrumbDirectoryLabelClass,
		},
		{
			label: CORPORATE_DIRECTORY_PAGE_CONTENT.chooseSetupBreadcrumbsTitle,
			path: ROUTES.corporateDirectory.chooseSetup,
		},
	];
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<ChooseSetupContent />
		</AppLayout>
	);
};
