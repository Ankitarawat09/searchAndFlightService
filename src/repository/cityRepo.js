const { Op } = require("sequelize");
const { City } = require("../../models/index");

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
      await City.destory({
        where: {
          id: cityID,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repo layer in deletecity");
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
      const city = await City.update(data, {
        where: { id: cityID },
        returning: true,
        plain: true,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
    }
  }
  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
    }
  }
}
module.exports = CityRepository;
