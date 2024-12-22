FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY ["hotel-backend", "./"]

RUN dotnet restore

RUN dotnet build "hotel-backend.csproj" -c Release -o /app/build

RUN dotnet publish "hotel-backend.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 8080

ENTRYPOINT ["dotnet", "hotel-backend.dll"]
