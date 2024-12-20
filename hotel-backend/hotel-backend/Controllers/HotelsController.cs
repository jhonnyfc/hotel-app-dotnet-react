using hotel_backend.Entities;
using hotel_backend.services;
using Microsoft.AspNetCore.Mvc;

namespace hotel_backend.Controllers
{
    [Route("hotels")]
    [ApiController]
    public class HotelsController : ControllerBase
    {
        private readonly IHotelService _hotelService;

        public HotelsController(IHotelService hotelService)
        {
            _hotelService = hotelService;
        }

        [HttpGet()]
        public async Task<ActionResult<List<Hotel>>> GetAllHotels()
        {
            List<Hotel> Hotels = _hotelService.GetHotelData();

            return Ok(Hotels);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Hotel>>> GetHotelById(int id)
        {
            List<Hotel> Hotels = _hotelService.GetHotelData();

            var hotel = Hotels.Find(x => x.Id == id);

            if (hotel == null) {
                return NotFound($"Sorry the hotle with id: {id} does not exists");
            }

            return Ok(hotel);

        }
    }
}
