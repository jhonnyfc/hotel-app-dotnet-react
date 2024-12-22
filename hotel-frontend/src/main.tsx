import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import HotelsPage from "./hotels/hotelsPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HotelDetailPage from "./hotelDetail/hotelDetailPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="hotels">
          <Route index element={<HotelsPage />} />
          <Route path=":id" element={<HotelDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
