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
    res.render("pages/math");}) 
  .get('/rates', function (req, res){
    var num = parseFloat(req.query.weight);
    var type = req.query.package;
    var price = 0;
    if(type === 'stamped'){
        if (num < 1){price = 0.50;}
        else if (num > 1 && num < 1){price = 0.71;}
        else if (num > 2 && num < 3){price = 0.92;}
        else if (num > 3 && num < 3.5){price = 1.13;}
        else if (num > 3.5){price = 'Error: package is too heavy.'}
    }
    else if(type === 'metered'){
        if (num < 1){price = 0.47;}
        else if (num > 1 && num < 2){price = 0.68;}
        else if (num > 2 && num < 3){price = 0.89;}
        else if (num > 3 && num < 3.5){price = 1.10;}
        else if (num > 3.5){price = 'Error: package is too heavy.'}
    }
    else if(type === 'flat'){
        if (num < 1){price = 1.00;}
        else if (num > 1 && num < 2){price = 1.21;}
        else if (num > 2 && num < 3){price = 1.42;}
        else if (num > 3 && num < 4){price = 1.63;}
        else if (num > 4 && num < 5){price = 1.84;}
        else if (num > 5 && num < 6){price = 2.05;}
        else if (num > 6 && num < 7){price = 2.26;}
        else if (num > 7 && num < 8){price = 2.47;}
        else if (num > 8 && num < 9){price = 2.68;}
        else if (num > 9 && num < 10){price = 2.89;}
        else if (num > 10 && num < 11){price = 3.10;}
        else if (num > 11 && num < 12){price = 3.31;}
        else if (num > 12 && num < 13){price = 3.52;}
    }
    else if(type === 'retail'){
        if (num < 4){price = 3.50;}
        else if (num > 4 && num < 8){price = 3.75;}
        else if (num > 8 && num < 9){price = 4.10;}
        else if (num > 9 && num < 10){price = 4.45;}
        else if (num > 10 && num < 11){price = 4.80;}
        else if (num > 11 && num < 12){price = 5.15;}
        else if (num > 12 && num < 13){price = 5.50;}
    }
    res.locals.price = price;
    res.render("pages/rates");
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
