const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at serive layer");
    }
  }
  async deleteCity(cityID) {
    try {
      const city = await this.cityRepository.deleteCity(cityID);
      return city;
    } catch (error) {
      console.log("Something went wrong at serive layer");
    }
  }
  async updateCity(cityID, data) {
    try {
      const city = await this.cityRepository.updateCity(cityID, data);
      return city;
    } catch (error) {
      console.log("Something went wrong at serive layer");
    }
  }
  async getCity(cityID) {
    try {
      const city = await this.cityRepository.getCity(cityID);
      return city;
    } catch (error) {
      console.log("Something went wrong at serive layer");
    }
  }
  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({ name: filter });
      return cities;
    } catch (error) {
      console.log("Something went wrong at serive layer");
    }
  }
}

module.exports = CityService;
