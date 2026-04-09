import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CorporationProfilePage } from "@/pages/corporation-profile"
import { CompanyDirectoryPage } from "@/pages/company-directory"
import { CorporationsPage } from "@/pages/corporations"
import { ProjectsPage } from "@/pages/projects"
import { DashboardPage } from "@/pages/dashboard"
import { MeetingTrackerIframePreviewPage } from "@/pages/meeting-tracker-iframe-preview"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CorporationProfilePage />} />
        <Route path="/corporation/:id" element={<CorporationProfilePage />} />
        <Route path="/corporations" element={<CorporationsPage />} />
        <Route path="/corporations/" element={<CorporationsPage />} />
        <Route path="/company-directory" element={<CompanyDirectoryPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/" element={<ProjectsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/" element={<DashboardPage />} />
        <Route
          path="/iframe-preview/8004"
          element={<MeetingTrackerIframePreviewPage />}
        />
        <Route
          path="/iframe-preview/8004/"
          element={<MeetingTrackerIframePreviewPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
