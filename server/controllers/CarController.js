class CarController {
  async getAll(req, res) {
    console.log(`11111: `, 11111)
    try {
      const result = await req.app.services.cars.getAll();
      if (result.length === 0) {
        res.status(404).json({
          message: "cars not Found"
        })
      } else {
        res.status(200).json(result)
      }
    } catch (error) {
      res.status(500).json({ message: 'get All page' })

    }
  }
  async getCarsById(req, res) {
    res.json({ message: 'getCarsById' })
  }
  async addCar(req, res) {
    res.json({ message: 'addCar' })
  }
}

module.exports = CarController;