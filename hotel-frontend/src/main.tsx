import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HotelsPage from "./hotels/hotelsPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HotelDetailPage from "./hotelDetail/hotelDetailPage.tsx";
import RedirectToHotels from "./hotels/components/redirectToHotels.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="hotels">
          <Route index element={<HotelsPage />} />
          <Route path=":id" element={<HotelDetailPage />} />
        </Route>

        <Route path="*" element={<RedirectToHotels />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
