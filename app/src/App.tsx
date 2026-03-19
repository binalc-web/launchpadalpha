import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CorporationProfilePage } from "@/pages/corporation-profile"
import { CompanyDirectoryPage } from "@/pages/company-directory"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CorporationProfilePage />} />
        <Route path="/corporation/:id" element={<CorporationProfilePage />} />
        <Route path="/company-directory" element={<CompanyDirectoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
