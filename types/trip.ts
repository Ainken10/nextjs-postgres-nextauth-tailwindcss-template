export type Trip = {
    id: string;
    title: string;
};

export type TruckTrip = Trip & {
    truckId: string; // Unique identifier for the truck
    driverId: string; // Unique identifier for the driver
    startLocation: string; // Starting location of the trip
    endLocation: string; // Ending location of the trip
    startTime: Date; // Start time of the trip
    endTime?: Date; // End time of the trip (optional, as it might not be known yet)
    cargoDetails?: string; // Description of the cargo being transported (optional)
    weight?: number; // Weight of the cargo (in kilograms, tons, etc.)
    distance?: number; // Distance of the trip (in kilometers, miles, etc.)
    status?: 'planned' | 'in-progress' | 'completed' | 'canceled'; // Current status of the trip
    fuelConsumption?: number; // Fuel consumption for the trip (in liters, gallons, etc.)
    checkpoints?: Array<{
        location: string; // Checkpoint location
        time: Date; // Time of reaching the checkpoint
    }>; // List of checkpoints during the trip
};