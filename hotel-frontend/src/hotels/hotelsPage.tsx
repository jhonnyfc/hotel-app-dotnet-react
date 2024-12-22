import { NavLink } from "react-router";
import { getHotels } from "./service";
import { Room } from "../shared/models/room";
import { Hotel } from "../shared/models/hotel";
import { useEffect, useState } from "react";

function HotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    getHotels().then((hotels) => {
      setHotels(hotels);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Hotels Manager</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md rounded-lg p-4 w-[350px]"
          >
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="text-gray-600">Rating: {hotel.rating}</p>
            <p className="text-gray-600">Board Basis: {hotel.boardBasis}</p>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Rooms:</h3>
              <ul className="list-disc list-inside">
                {hotel.rooms.map((room: Room, index: number) => (
                  <li key={index} className="text-gray-600">
                    {room.roomType} - {room.amount} available
                  </li>
                ))}
              </ul>
            </div>
            <NavLink
              to={`/hotels/${hotel.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              View Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelsPage;
