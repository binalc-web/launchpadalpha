import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CorporationProfilePage } from "@/pages/corporation-profile"
import { CompanyDirectoryPage } from "@/pages/company-directory"
import { MeetingTrackerIframePreviewPage } from "@/pages/meeting-tracker-iframe-preview"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CorporationProfilePage />} />
        <Route path="/corporation/:id" element={<CorporationProfilePage />} />
        <Route path="/company-directory" element={<CompanyDirectoryPage />} />
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
