import { http } from "../shared/helper/http";
import type { Hotel } from "../shared/models/hotel";

export const getAllHotels = async (): Promise<Hotel[]> => {
  try {
    const response = await http.get<Hotel[]>("/hotels");
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};
