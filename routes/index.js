var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Company = mongoose.model('Company');
var Jobs = mongoose.model('Jobs');

/* GET home page. */
router.get('/', function(req, res) {
	console.log('heey1');
	res.render('index', { title: 'Express' });
});

router.get('/csignup', function(req, res){
	console.log('heey2');
	res.render('csignup', { title: 'Express' });
});

router.post('/signupdone', function(req, res, next){
	console.log(req.body);
	var company = new Company(req.body);

	company.save(function(err, company){
		if(err) {
			return next(err);
		}
		res.json(company);
	});
});

module.exports = router;
