const { City } = require("searchAndFlightsmodelscity.js");
const { where } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
    }
  }

  async deleteCity(cityID) {
    try {
      const city = await City.destory({
        where: {
          id: cityID,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repo layer");
    }
  }

  async getCity(cityID) {
    try {
      const city = await City.findByPk(cityID);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
    }
  }
  async updateCity(cityID, data) {
    try {
      const city = await City.update(data, { where: { id: cityID } });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
    }
  }
}
module.exports = CityRepository;
