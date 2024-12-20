using hotel_backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace hotel_backend.Controllers
{
    [Route("hotels")]
    [ApiController]
    public class HotelsController : ControllerBase
    {
        [HttpGet()]
        public async Task<ActionResult<List<Hotel>>> GetAllHotels()
        {
            List<Hotel> Hotels = new List<Hotel> { new Hotel {
                Id = 1,
                Name = "Seaside Paradise",
                Location = "Maldives",
                Rating = 4.9,
                ImageUrl = "https://example.com/images/seaside-paradise.jpg",
                DatesOfTravel = ["2024-01-01", "2024-01-07"],
                BoardBasis = "All Inclusive",
                Rooms = new List<Room>
                {
                    new Room { RoomType = "Deluxe Suite", Amount = 5 },
                    new Room { RoomType = "Family Room", Amount = 3 }
                }
            } };

            return Ok(Hotels);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Hotel>>> GetHotelById(int id)
        {
            List<Hotel> Hotels = new List<Hotel> { new Hotel {
                Id = 5,
                Name = "Seaside Paradise",
                Location = "Maldives",
                Rating = 4.9,
                ImageUrl = "https://example.com/images/seaside-paradise.jpg",
                DatesOfTravel = ["2024-01-01", "2024-01-07"],
                BoardBasis = "All Inclusive",
                Rooms = new List<Room>
                {
                    new Room { RoomType = "Deluxe Suite", Amount = 5 },
                    new Room { RoomType = "Family Room", Amount = 3 }
                }
            } };

            var hotel = Hotels.Find(x => x.Id == id);

            if (hotel == null) {
                return NotFound($"Sorry the hotle with id: {id} does not exits");
            }

            return Ok(hotel);

        }
    }
}
