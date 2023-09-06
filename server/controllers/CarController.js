class CarController {
	async getAll(req,res) {
		res.json({message: 'get All page'})
	}
	async getCarsById(req,res) {
		res.json({ message: 'getCarsById'})
	}
	async addCar(req,res) {
		res.json({ message: 'addCar'})
	}
}

module.exports = CarController;