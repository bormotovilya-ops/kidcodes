import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { SiteLayout } from "@/components/layout/SiteLayout";
import Index from "./pages/Index.tsx";
import Immersion from "./pages/Immersion.tsx";
import Steps from "./pages/Steps.tsx";
import Locations from "./pages/Locations.tsx";
import Schedule from "./pages/Schedule.tsx";
import Documents from "./pages/Documents.tsx";
import Blog from "./pages/Blog.tsx";
import Reviews from "./pages/Reviews.tsx";
import Team from "./pages/Team.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/immersion" element={<Immersion />} />
              <Route path="/steps" element={<Steps />} />
              <Route path="/steps/:slug" element={<Steps />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/team" element={<Team />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SiteLayout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
