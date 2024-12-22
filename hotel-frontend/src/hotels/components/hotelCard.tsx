import { NavLink } from "react-router";
import { Room } from "../../shared/models/room";
import { Hotel } from "../../shared/models/hotel";

function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-[350px]">
      <img
        src={hotel.imageUrl}
        alt={`${hotel.name} img not found`}
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
  );
}

export default HotelCard;
