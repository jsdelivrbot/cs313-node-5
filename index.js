const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/math', function(req,res) 
  {
    var num1 = parseFloat(req.query.num1);
    var num2 = parseFloat(req.query.num2);
    var operator = req.query.operator;
    var result = 0;
    if(operator === 'plu'){result = num1 + num2;}
    if(operator === 'min'){result = num1 - num2;}
    if(operator === 'mul'){result = num1 * num2;}
    if(operator === 'div'){result = num1 / num2;}
    res.locals.result = result;
    res.render("pages/math");
  }) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
