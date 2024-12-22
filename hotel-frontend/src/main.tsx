import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HotelsPage from "./hotels/hotelsPage.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HotelDetailPage from "./hotelDetail/hotelDetailPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="hotels" />} />

        <Route path="hotels">
          <Route index element={<HotelsPage />} />
          <Route path=":id" element={<HotelDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
