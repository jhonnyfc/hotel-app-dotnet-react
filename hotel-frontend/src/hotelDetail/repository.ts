import { http } from "../shared/helper/http";
import type { Hotel } from "../shared/models/hotel";

const API_URL = "https://localhost:7251/hotels";

export const getHotel = async (id: number): Promise<Hotel> => {
  try {
    const response = await http.get<Hotel>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};
