import type { Hotel } from "../shared/models/hotel";
import { getAllHotels } from "./repository";

export const getHotels = async (): Promise<Hotel[]> => {
  try {
    const hotels = await getAllHotels();
    return hotels;
  } catch {
    return [];
  }
};
