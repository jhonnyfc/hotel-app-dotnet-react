import { Navigate, useLocation } from "react-router";

function RedirectToHotels() {
  const location = useLocation();

  return location.pathname !== "/hotels" ? (
    <Navigate to="/hotels" replace />
  ) : null;
}

export default RedirectToHotels;
