

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

// code here for adding static assets
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('bmi');
});

app.post('/', (req, res) => {
    let age = req.body.age;
    let weight = req.body.weight;
    let height = req.body.height;

    res.render('bmi', { result: "Your BMI Result is: "+ Math.round(((req.body.weight)/(Math.pow(req.body.height/100,2))) * 10) / 10, age: age, weight: weight, height: height});
  });


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});