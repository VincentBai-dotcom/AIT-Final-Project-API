const mongoose = require('mongoose'),
	URLSlugs = require('mongoose-url-slugs'),
  passportLocalMongoose = require('passport-local-mongoose');


const User = new mongoose.Schema({
  // username, password
  performanceStats:  { type: mongoose.Schema.Types.ObjectId, ref: 'PerformanceStats' }
});

const PerformanceStats = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
	interval: [{type: String, correct: Number, total: Number}],
	chord: [{type: String, correct: Number, total: Number}]
});

User.plugin(passportLocalMongoose);

mongoose.model('User', User);
mongoose.model('PerformanceStats', PerformanceStats);
mongoose.connect('mongodb://localhost/earTrainerdb');
