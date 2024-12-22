import { http } from "../shared/helper/http";
import type { Hotel } from "../shared/models/hotel";

export const getHotel = async (id: number): Promise<Hotel> => {
  try {
    const response = await http.get<Hotel>(`hotels/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};
