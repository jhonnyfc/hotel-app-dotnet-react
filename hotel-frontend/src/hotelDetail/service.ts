import type { Hotel } from "../shared/models/hotel";
import { getHotel } from "./repository";

export const getHotelDetail = async (id: number): Promise<Hotel> => {
  try {
    const hotels = await getHotel(id);
    return hotels;
  } catch {
    return {} as Hotel;
  }
};
