using hotel_backend.Entities;
using hotel_backend.services;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);


string jsonData = File.ReadAllText("hotels.json");
var hotelData = JsonConvert.DeserializeObject<List<Hotel>>(jsonData);
builder.Services.AddSingleton(hotelData);
builder.Services.AddSingleton<IHotelService,MockHotelsService>();

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
