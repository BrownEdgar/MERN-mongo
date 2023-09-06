const { default: mongoose } = require("mongoose");

const CarSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "field is required"]
	},
	img: {
		type: String,
		required: [true, "field is required"]
	},
	desc: {
		type: String,
		required: [true, "field is required"]
	},
	model: {
		type: String,
		required: [true, "field is required"]
	},
	color: {
		type: String,
		required: [true, "field is required"]
	},
	year: {
		type: Number,
		min: 1900,
		max: new Date().getFullYear(),
		required: [true, "field is required"]
	},
	engine: {
		type: Number,
		min:1.2,
		max:12,
		required: [true, "field is required"]
	},
})

const Cars = mongoose.model("Car", CarSchema);
module.exports = Cars;