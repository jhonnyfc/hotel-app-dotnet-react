import { useEffect, useState } from "react";
import { getHotelDetail } from "./service";
import { NavLink, useParams } from "react-router";
import { Hotel } from "../shared/models/hotel";

function GoBackButton() {
  return (
    <div className="flex justify-center mt-4">
      <NavLink to={`/hotels`} className="text-blue-500 hover:underline">
        Go Back
      </NavLink>
    </div>
  );
}

function HotelDetailPage() {
  const params = useParams();

  const [hotel, setHotel] = useState<Hotel>({} as Hotel);

  useEffect(() => {
    getHotelDetail(Number(params.id)).then((hotel) => {
      if (Object.keys(hotel).length === 0) {
        return setHotel({} as Hotel);
      }

      return setHotel(hotel);
    });
  }, []);

  if (Object.keys(hotel).length === 0) {
    return (
      <div className="text-center text-red-500">
        Hotel not found
        <GoBackButton />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">{hotel.name}</h1>
      <div className="flex justify-center mb-4">
        <img
          src={hotel.imageUrl}
          alt={`${hotel.name} img not found`}
          className="w-[450px] h-auto"
        />
      </div>
      <p className="text-lg mb-2">{hotel.location}</p>
      <p className="text-md mb-2">
        <strong>Rating:</strong> {hotel.rating} / 5
      </p>
      <p className="text-md mb-2">
        <strong>Board Basis:</strong> {hotel.boardBasis}
      </p>
      <p className="text-md mb-2">
        <strong>Dates of Travel:</strong> {hotel.datesOfTravel.join(" to ")}
      </p>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Rooms</h2>
        <ul>
          {hotel.rooms.map((room, index) => (
            <li key={index} className="mb-2">
              <strong>{room.roomType}:</strong> {room.amount} available
            </li>
          ))}
        </ul>
      </div>
      <GoBackButton />
    </div>
  );
}

export default HotelDetailPage;
