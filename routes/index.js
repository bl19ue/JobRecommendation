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

router.get('/csignin', function(req, res){
	console.log('heey3');
	res.render('csignin', { title: 'Express' });
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


router.get('/signin/:username/:password', function(req, res){
	var query = Company.findOne({username : req.param('username')});
	
	query.exec(function(err, company){
		if(err) console.log(err);
		else{
			if(company.password == req.param('password')){
				res.json(company);
			}
			else{
				res.json({
					problem: "probllemo"
				});
			}
		}
	});
});

module.exports = router;
