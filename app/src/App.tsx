import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CorporationProfilePage } from "@/pages/corporation-profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CorporationProfilePage />} />
        <Route path="/corporation/:id" element={<CorporationProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
