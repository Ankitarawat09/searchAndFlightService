const { Flight } = require("../../models/index");
class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in The flightrepo layer");
    }
  }
}
module.exports = FlightRepository;
