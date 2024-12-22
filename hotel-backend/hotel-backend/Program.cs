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

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:4173", "http://10.243.75.144:5173")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
