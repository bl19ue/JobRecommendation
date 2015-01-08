var mongoose = require('mongoose');

var JobsSchema = mongoose.Schema({
	jobtitle	:	String,
	jobdesc		:	String,
	jobskills	:	{type: Array, default : []},
	company		:	[{type: mongoose.Schema.Types.ObjectId, ref: 'Company'}]
});

mongoose.model('Jobs', JobsSchema);