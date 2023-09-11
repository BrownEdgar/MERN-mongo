class CarService {
  constructor(models) {
    this.models = models;
  }

  async getAll() {
    const cars = await this.models.cars.find({})
    return cars;
  }
}
module.exports = CarService