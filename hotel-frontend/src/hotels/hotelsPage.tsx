import { getHotels } from "./service";
import React from "react";
import { Hotel } from "../shared/models/hotel";
import { useEffect, useState } from "react";
import Spinner from "../shared/componentes/spinner";
import HotelCard from "./components/hotelCard";

function HotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  useEffect(() => {
    getHotels()
      .then((hotels) => {
        setHotels(hotels);
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  }, []);

  return (
    <div className="flex-col flex-wrap p-4 w-full">
      <h1 className="text-2xl font-bold mb-4 text-center mx-auto">
        Hotels Manager
      </h1>
      {isLoadingData ? (
        <Spinner></Spinner>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {hotels.length ? (
            hotels.map((hotel) => (
              <React.Fragment key={hotel.id}>
                <HotelCard hotel={hotel} />
              </React.Fragment>
            ))
          ) : (
            <div className="text-center text-xl font-semibold text-red-500">
              No hotels found!!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HotelsPage;
