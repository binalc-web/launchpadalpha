import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from '@/components/common/Sidebar';
import { AddBspAssessmentIndividual } from '@/pages/AddBspAssessmentIndividual';
import { ROUTES } from '@/const/routes';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full" style={{ minWidth: '1440px' }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0" style={{ width: '1160px', maxWidth: '100%' }}>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.ADD_BSP_ASSESSMENT_INDIVIDUAL}
          element={
            <AppLayout>
              <AddBspAssessmentIndividual />
            </AppLayout>
          }
        />
        <Route
          path="/"
          element={<Navigate to={ROUTES.ADD_BSP_ASSESSMENT_INDIVIDUAL} replace />}
        />
        <Route
          path="*"
          element={
            <AppLayout>
              <div className="flex items-center justify-center h-screen bg-[var(--page-background)]">
                <p className="text-muted-foreground">Select a page from the sidebar</p>
              </div>
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
