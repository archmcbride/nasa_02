var express = require('express')
var request = require('request')

var app = express()

app.get('/asteroids', function (req, res){//'/asteroids' is a new file where the date request is stored
	console.log(req.query)
	//res.send('It works')
	request({
		url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.date}&end_date=${req.query.date}&api_key=ENpozZli8AWY4CB8f8IJi82EzWrORjimvItqd21l`, 
    }, function (error, response, body) {//query dates are a variable of the info returned at "req.query" which is the date entered by the user.  
        console.log(body)
        console.log('body:',typeof body);
        res.send(body)
	})
})

app.use(express.static('./public'))



app.listen(8000)