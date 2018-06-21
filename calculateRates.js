const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//function to calculate the price based on package and weight
function calculateRates(req, res){
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

    }
    else if(type === 'flat'){

    }
    else if(type === 'retail'){

    }
    res.render("pages/displayResult");
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/rates', calculateRates(req, res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))