using hotel_backend.Entities;

namespace hotel_backend.services
{
    public interface IHotelService
    {
        List<Hotel> GetHotelData();
    }

    public class MockHotelsService : IHotelService
    {
        private readonly List<Hotel> _hotelData;

        public MockHotelsService(List<Hotel> hotelData)
        {
            _hotelData = hotelData;
        }

        public List<Hotel> GetHotelData()
        {
            return _hotelData;
        }
    }
}
