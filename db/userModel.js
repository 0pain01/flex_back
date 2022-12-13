const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name : {
		type: String,
		required : true
	},
	Age : String,
    DOJ: String,
	batch : String,
	 paid : {
	type : Boolean,
	default: false
	}
});

module.exports = mongoose.model.Users || mongoose.model('Users',userSchema);
