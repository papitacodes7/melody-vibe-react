
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Albums from "./pages/Albums";
import Contacts from "./pages/Contacts";
import FAQs from "./pages/FAQs";
import AudioServices from "./pages/services/AudioServices";
import VideoServices from "./pages/services/VideoServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/services/audio" element={<AudioServices />} />
          <Route path="/services/video" element={<VideoServices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
