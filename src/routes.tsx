import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import RootLayout from "./pages/root";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Services from "./pages/Services";
import Reports from "./pages/Reports";
import Communities from "./pages/Communities";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";


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
     

    </Route>
  )
);

export default appRouter;
