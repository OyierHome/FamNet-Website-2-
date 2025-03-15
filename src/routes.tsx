import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import RootLayout from "./pages/root";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Services from "./pages/Services";
import Reports from "./pages/Reports";
import Communities from "./pages/Communities";
import Resources from "./pages/Resources";
import Gallery from "./pages/Galleryone";
import Gallerynew from "./pages/Gallery";
import AgritechMainPage from "./pages/AgritechMainPage";
import AgritechPageone from "./pages/AgritechPageone";
import VoiceMainPage from "./pages/VoiceMainPage";
import VoicePageone from "./pages/VoicePageone";
import Data from "./pages/Data";
import Faqs from "./pages/Faqs";
import TermsAndConditions from "./pages/TermsAndConditions";
import InsightMainPage from "./pages/InsightMainPage";
import Contact from "./pages/Contact";
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<RootLayout />}
      errorElement={<NotFoundPage />}>
        
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/agritechmainpage" element={<AgritechMainPage/>} />
      <Route path="/agritechmainpageone" element={<AgritechPageone/>} />
      <Route path="/voicemainpage" element={<VoiceMainPage/>} />
      <Route path="/voicepageone" element={<VoicePageone/>} />
      <Route path="/data" element={<Data/>} />
      <Route path="/faqs" element={<Faqs/>} />
      <Route path="/termsandconditions" element={<TermsAndConditions/>} />
      <Route path="/insightmainpage" element={<InsightMainPage/>} />
      <Route path="/gallerynew" element={<Gallerynew/>} />
      <Route path="/contact" element={<Contact/>} />
    </Route>
  )
);

export default appRouter;
