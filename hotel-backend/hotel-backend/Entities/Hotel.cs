using System.Collections;

namespace hotel_backend.Entities
{
    public class Hotel

    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public Double Rating { get; set; }
        public string ImageUrl { get; set; }
        public string[] DatesOfTravel { get; set; }
        public string BoardBasis { get; set; }
        public List<Room> Rooms { get; set; }

    }
}
