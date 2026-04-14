import { lazy, Suspense, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/animations/Loading Animation Looped.json";
import logo from "@/assets/logo_icon.png";
import InitialLoader from "@/components/InitialLoader";

// Lazy-loaded pages for performance (code-splitting)
const Index = lazy(() => import("./pages/Index.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const ManagementPage = lazy(() => import("./pages/ManagementPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const ImportExportPage = lazy(() => import("./pages/services/ImportExportPage.tsx"));
const RentalLeasingPage = lazy(() => import("./pages/services/RentalLeasingPage.tsx"));
const HospitalityPage = lazy(() => import("./pages/services/HospitalityPage.tsx"));
const LogisticsPage = lazy(() => import("./pages/services/LogisticsPage.tsx"));
const RealEstatePage = lazy(() => import("./pages/services/RealEstatePage.tsx"));
const CatNJoyPage = lazy(() => import("./pages/services/CatNJoyPage.tsx"));
const DogNJoyPage = lazy(() => import("./pages/services/DogNJoyPage.tsx"));
const PerfectaPage = lazy(() => import("./pages/services/PerfectaPage.tsx"));
const MechanicalPage = lazy(() => import("./pages/projects/MechanicalPage.tsx"));
const CivilPage = lazy(() => import("./pages/projects/CivilPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const RenewableSolarPage = lazy(() => import("./pages/services/RenewableSolarPage.tsx"));
const SolarPowerPlantDetailed = lazy(() => import("./pages/services/SolarPowerPlantDetailed.tsx"));
const SolarPumpsDetailed = lazy(() => import("./pages/services/SolarPumpsDetailed.tsx"));
const SolarStreetLightsDetailed = lazy(() => import("./pages/services/SolarStreetLightsDetailed.tsx"));
const SolarWaterHeatersDetailed = lazy(() => import("./pages/services/SolarWaterHeatersDetailed.tsx"));
const SolarBatteriesDetailed = lazy(() => import("./pages/services/SolarBatteriesDetailed.tsx"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-navy">
    <div className="relative flex items-center justify-center w-64 h-64">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute w-20 h-20 rounded-full overflow-hidden bg-white z-10 flex items-center justify-center p-3 shadow-lg">
        <img
          src={logo}
          alt="Solar Panel Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  const [showInitialLoader, setShowInitialLoader] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          {showInitialLoader && <InitialLoader onComplete={() => setShowInitialLoader(false)} />}
          <div className={`${showInitialLoader ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'} transition-opacity duration-1000`}>
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/management" element={<ManagementPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services/renewable-solar-panel" element={<RenewableSolarPage />} />
                  <Route path="/services/solar-power-plants" element={<SolarPowerPlantDetailed />} />
                  <Route path="/services/solar-pumps" element={<SolarPumpsDetailed />} />
                  <Route path="/services/solar-street-lights" element={<SolarStreetLightsDetailed />} />
                  <Route path="/services/solar-water-heaters" element={<SolarWaterHeatersDetailed />} />
                  <Route path="/services/solar-batteries" element={<SolarBatteriesDetailed />} />
                  <Route path="/services/import-and-export" element={<ImportExportPage />} />
                  <Route path="/services/rental-leasing-transportation" element={<RentalLeasingPage />} />
                  <Route path="/services/hospitality-services" element={<HospitalityPage />} />
                  <Route path="/services/logistics-warehouse-management" element={<LogisticsPage />} />
                  <Route path="/services/real-estate" element={<RealEstatePage />} />
                  <Route path="/projects/mechanical" element={<MechanicalPage />} />
                  <Route path="/projects/civil" element={<CivilPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
